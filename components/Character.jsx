 "use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Character() {
  return (
    <section className="character-section section-wrap" id="character">
      <div className="character-art-panel">
        <div className="character-grid" />
        <div className="character-sigil">H<span>N</span></div>
        <div className="character-orbit orbit-one" />
        <div className="character-orbit orbit-two" />
        <div className="character-placeholder-label"><Sparkles size={17} /> CHARACTER REVEAL INCOMING</div>
      </div>
      <motion.div className="character-copy" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="eyebrow orange">THE IDENTITY / 03</div>
        <h2>More than a<br /><em>profile picture.</em></h2>
        <p>The character is part of the Heroneon identity. A custom illustration is planned for this space, with the same signature look used across the channel and community.</p>
        <div className="character-tags"><span>ORIGINAL OC</span><span>CREATOR IDENTITY</span><span>COMING SOON</span></div>
        <a className="text-link" href="https://www.youtube.com/@Heroneon_YT" target="_blank" rel="noreferrer">EXPLORE THE CHANNEL <ArrowUpRight size={16} /></a>
      </motion.div>
    </section>
  );
}
