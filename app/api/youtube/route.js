import { NextResponse } from "next/server";

export const revalidate = 900;

const API_BASE = "https://www.googleapis.com/youtube/v3";
const CHANNEL_HANDLE = "@Heroneon_YT";

async function youtubeRequest(resource, params) {
  const url = new URL(`${API_BASE}/${resource}`);
  Object.entries({ ...params, key: process.env.YOUTUBE_API_KEY }).forEach(
    ([key, value]) => url.searchParams.set(key, value)
  );

  const response = await fetch(url, { next: { revalidate: 900 } });
  const data = await response.json();

  if (!response.ok) {
    console.error("YouTube API request failed:", data.error?.message || response.statusText);
    throw new Error("YouTube data could not be loaded.");
  }

  return data;
}

export async function GET() {
  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: "Missing YOUTUBE_API_KEY environment variable." },
      { status: 500 }
    );
  }

  try {
    const channelData = await youtubeRequest("channels", {
      part: "snippet,statistics,contentDetails",
      forHandle: CHANNEL_HANDLE,
      maxResults: "1",
    });

    const channel = channelData.items?.[0];

    if (!channel) {
      return NextResponse.json(
        { error: "The YouTube channel could not be found." },
        { status: 404 }
      );
    }

    const uploadsPlaylistId =
      channel.contentDetails?.relatedPlaylists?.uploads;

    let videos = [];

    if (uploadsPlaylistId) {
      const uploadsData = await youtubeRequest("playlistItems", {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: "6",
      });

      videos = (uploadsData.items || [])
        .map((item) => {
          const videoId = item.contentDetails?.videoId || item.snippet?.resourceId?.videoId;
          if (!videoId || item.snippet?.title === "Deleted video") return null;

          const thumbnails = item.snippet?.thumbnails || {};
          const thumbnail =
            thumbnails.maxres?.url ||
            thumbnails.high?.url ||
            thumbnails.medium?.url ||
            thumbnails.default?.url ||
            `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

          return {
            id: videoId,
            title: item.snippet?.title || "Untitled video",
            description: item.snippet?.description || "",
            publishedAt: item.snippet?.publishedAt || null,
            thumbnail,
            url: `https://www.youtube.com/watch?v=${videoId}`,
          };
        })
        .filter(Boolean);
    }

    const subscriberCount = channel.statistics?.hiddenSubscriberCount
      ? null
      : channel.statistics?.subscriberCount || null;

    return NextResponse.json({
      channel: {
        title: channel.snippet?.title || "Heroneon_YT",
        subscriberCount,
        hiddenSubscriberCount: Boolean(channel.statistics?.hiddenSubscriberCount),
      },
      videos,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to load YouTube data." },
      { status: 502 }
    );
  }
}
