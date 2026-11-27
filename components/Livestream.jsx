"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Radio, ExternalLink, Bell } from "lucide-react";

export default function Livestream() {
  const [live, setLive] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/youtube/live")
      .then((response) => {
        if (!response.ok) throw new Error("Could not check live status.");
        return response.json();
      })
      .then((data) => {
        if (active) setLive(data.isLive ? data.video : null);
      })
      .catch(() => {
        if (active) setLive(null);
      })
      .finally(() => {
        if (active) setChecked(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const liveUrl =
    live?.url || "https://www.youtube.com/@Heroneon_YT/streams";

  return (
    <section className="live-section section-wrap" id="live">
      <motion.div
        className="live-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="live-decoration">{live ? "LIVE NOW" : "STREAMS"}</div>
        <div className="live-copy">
          <div className="eyebrow">
            {live ? (
              <span className="live-pulse" />
            ) : (
              <span className="status-dot" />
            )}
            {live ? "HERONEON IS LIVE" : checked ? "NOT LIVE RIGHT NOW" : "CHECKING LIVE STATUS"}
          </div>
          <h2>
            {live ? (
              <>We are<br /><em>live right now.</em></>
            ) : (
              <>Be there<br /><em>when it happens.</em></>
            )}
          </h2>
          <p>
            {live
              ? live.title
              : "Catch Minecraft livestreams, hang out with the community and be part of the next adventure."}
          </p>
          <div className="live-actions">
            <a className="button button-primary" href={liveUrl} target="_blank" rel="noreferrer">
              <Radio size={17} /> {live ? "Watch live now" : "Browse streams"} <ExternalLink size={15} />
            </a>
            <a
              className="button button-ghost"
              href="https://www.youtube.com/@Heroneon_YT"
              target="_blank"
              rel="noreferrer"
            >
              <Bell size={17} /> Follow the channel
            </a>
          </div>
        </div>
        <div className="live-visual">
          <div className="live-screen">
            {live?.thumbnail ? (
              <img
                src={live.thumbnail}
                alt="Current livestream thumbnail"
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
              />
            ) : (
              <>
                <div className="screen-sky" />
                <div className="screen-ground" />
                <div className="pixel-sun" />
                <div className="screen-caption">YOUR NEXT<br />ADVENTURE</div>
              </>
            )}
            <div className="screen-play">▶</div>
          </div>
          <span className="live-caption">
            {live ? "ON AIR / HN-YT" : "TRANSMISSION / HN-YT"}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
