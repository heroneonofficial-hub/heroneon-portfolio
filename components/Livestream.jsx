 "use client";

import { motion } from "framer-motion";
import { Radio, ExternalLink, Bell } from "lucide-react";

export default function Livestream() {
  return (
    <section className="live-section section-wrap" id="live">
      <motion.div className="live-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="live-decoration">LIVE</div>
        <div className="live-copy">
          <div className="eyebrow"><span className="live-pulse" /> THE LIVE ZONE / 02</div>
          <h2>Be there<br /><em>when it happens.</em></h2>
          <p>Catch Minecraft livestreams, hang out with the community and be part of the next adventure.</p>
          <div className="live-actions">
            <a className="button button-primary" href="https://www.youtube.com/@Heroneon_YT/streams" target="_blank" rel="noreferrer"><Radio size={17} /> Watch streams <ExternalLink size={15} /></a>
            <a className="button button-ghost" href="https://www.youtube.com/@Heroneon_YT" target="_blank" rel="noreferrer"><Bell size={17} /> Follow the channel</a>
          </div>
        </div>
        <div className="live-visual"><div className="live-screen"><div className="screen-sky" /><div className="screen-ground" /><div className="pixel-sun" /><div className="screen-caption">YOUR NEXT<br />ADVENTURE</div><div className="screen-play">▶</div></div><span className="live-caption">TRANSMISSION / HN-YT</span></div>
      </motion.div>
    </section>
  );
}
