"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/youtube")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load videos.");
        return response.json();
      })
      .then((data) => {
        if (active) setVideos(data.videos || []);
      })
      .catch(() => {
        if (active) setVideos([]);
      })
      .finally(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="content-section section-wrap" id="videos">
      <div className="section-heading">
        <div>
          <div className="eyebrow orange">THE CONTENT / 01</div>
          <h2>
            Latest <span>videos.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://www.youtube.com/@Heroneon_YT/videos"
          target="_blank"
          rel="noreferrer"
        >
          VIEW CHANNEL <ArrowUpRight size={16} />
        </a>
      </div>

      <p className="section-intro">
        A collection of gaming moments, Minecraft adventures and videos from the channel.
      </p>

      {videos.length > 0 ? (
        <div className="video-grid">
          {videos.map((video, i) => (
            <motion.a
              className="video-card"
              href={video.url}
              target="_blank"
              rel="noreferrer"
              key={video.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className={`video-thumb thumb-${(i % 3) + 1}`}>
                <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} loading="lazy" />
                <div className="play-button">
                  <Play fill="currentColor" size={19} />
                </div>
                <span className="thumb-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="video-meta">
                <span>YOUTUBE UPLOAD</span>
                <ArrowUpRight size={15} />
              </div>
              <h3>{video.title}</h3>
              <p>{video.description || "Watch the latest video on YouTube."}</p>
            </motion.a>
          ))}
        </div>
      ) : (
        <p className="edit-hint">
          {loaded
            ? "No public uploads were found. Check that the YouTube Data API is enabled and your API key is configured."
            : "Loading the latest uploads from YouTube…"}
        </p>
      )}
    </section>
  );
}
