import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing YOUTUBE_API_KEY environment variable." },
      { status: 500 }
    );
  }

  try {
    const channelUrl = new URL("https://www.googleapis.com/youtube/v3/channels");
    channelUrl.search = new URLSearchParams({
      part: "id",
      forHandle: "@Heroneon_YT",
      key: apiKey,
      maxResults: "1",
    }).toString();

    const channelResponse = await fetch(channelUrl, {
      next: { revalidate: 3600 },
    });
    const channelData = await channelResponse.json();

    if (!channelResponse.ok) {
      throw new Error(channelData.error?.message || "Could not look up channel.");
    }

    const channelId = channelData.items?.[0]?.id;

    if (!channelId) {
      return NextResponse.json({ isLive: false, video: null });
    }

    const liveUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    liveUrl.search = new URLSearchParams({
      part: "snippet",
      channelId,
      type: "video",
      eventType: "live",
      maxResults: "1",
      key: apiKey,
    }).toString();

    const liveResponse = await fetch(liveUrl, {
      next: { revalidate: 3600 },
    });
    const liveData = await liveResponse.json();

    if (!liveResponse.ok) {
      throw new Error(liveData.error?.message || "Could not check livestream status.");
    }

    const item = liveData.items?.[0];

    if (!item) {
      return NextResponse.json({ isLive: false, video: null });
    }

    const videoId = item.id?.videoId;

    return NextResponse.json({
      isLive: Boolean(videoId),
      video: videoId
        ? {
            id: videoId,
            title: item.snippet?.title || "Heroneon_YT is live",
            thumbnail:
              item.snippet?.thumbnails?.high?.url ||
              item.snippet?.thumbnails?.medium?.url ||
              null,
            url: `https://www.youtube.com/watch?v=${videoId}`,
          }
        : null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to check livestream status." },
      { status: 502 }
    );
  }
}
