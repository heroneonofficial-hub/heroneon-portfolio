 "use client";

import { motion } from "framer-motion";
import { Gamepad2, Video, WandSparkles } from "lucide-react";

export default function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <motion.div className="about-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="eyebrow">A LITTLE ABOUT ME / 04</div>
        <h2>Hey, I'm <span>Heroneon.</span></h2>
        <p className="about-lead">Gaming is the playground. Creativity is the superpower.</p>
        <p className="about-body">I'm a content creator who enjoys gaming, making videos and sharing experiences with an awesome community. Minecraft is a big part of what I do — and this site is the home base for everything happening on the channel.</p>
        <div className="about-interests">
          <div><Gamepad2 /><span>MINECRAFT & GAMING</span></div>
          <div><Video /><span>VIDEOS & LIVESTREAMS</span></div>
          <div><WandSparkles /><span>CREATIVE PROJECTS</span></div>
        </div>
      </motion.div>
    </section>
  );
}
