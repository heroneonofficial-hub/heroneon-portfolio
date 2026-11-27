 "use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const videos = [
  { id: "VIDEO_ID_1", title: "Minecraft Adventure", category: "GAMEPLAY", description: "Add one of your latest uploads." },
  { id: "VIDEO_ID_2", title: "Survival Journey", category: "MINECRAFT", description: "A world full of possibilities." },
  { id: "VIDEO_ID_3", title: "The Next Challenge", category: "CHALLENGE", description: "More videos coming soon." }
];

export default function Videos() {
  return (
    <section className="content-section section-wrap" id="videos">
      <div className="section-heading">
        <div><div className="eyebrow orange">THE CONTENT / 01</div><h2>Latest <span>videos.</span></h2></div>
        <a className="text-link" href="https://www.youtube.com/@Heroneon_YT/videos" target="_blank" rel="noreferrer">VIEW CHANNEL <ArrowUpRight size={16} /></a>
      </div>
      <p className="section-intro">A collection of gaming moments, Minecraft adventures and videos from the channel.</p>
      <div className="video-grid">
        {videos.map((video, i) => {
          const valid = !video.id.startsWith("VIDEO_ID");
          const href = valid ? `https://www.youtube.com/watch?v=${video.id}` : "https://www.youtube.com/@Heroneon_YT/videos";
          return (
            <motion.a className="video-card" href={href} target="_blank" rel="noreferrer" key={video.id}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className={`video-thumb thumb-${i + 1}`}>
                {valid && <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" />}
                <div className="thumb-pattern"><span>H</span></div>
                <div className="play-button"><Play fill="currentColor" size={19} /></div>
                <span className="thumb-index">0{i + 1}</span>
              </div>
              <div className="video-meta"><span>{video.category}</span><ArrowUpRight size={15} /></div>
              <h3>{video.title}</h3><p>{video.description}</p>
            </motion.a>
          );
        })}
      </div>
      <p className="edit-hint">To add your real uploads, edit the video list in <code>components/Videos.jsx</code>.</p>
    </section>
  );
}
