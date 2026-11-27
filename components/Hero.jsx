 "use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Youtube, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="eyebrow"><Sparkles size={14} /> A CREATOR UNIVERSE</div>
        <h1>PLAY<span className="title-dot">.</span><br /><em>CREATE.</em><br />REPEAT<span className="title-dot">.</span></h1>
        <p className="hero-description">
          Welcome to my corner of the internet. Minecraft adventures, gaming,
          livestreams and good times — all in one place.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://www.youtube.com/@Heroneon_YT" target="_blank" rel="noreferrer">
            <Youtube size={18} /> Subscribe on YouTube
          </a>
          <a className="button button-ghost" href="#videos">Explore the content <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-note"><span className="status-dot" /> CREATING SOMETHING NEW</div>
      </motion.div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        aria-label="Abstract placeholder artwork for the creator character"
      >
        <div className="art-ring ring-a" />
        <div className="art-ring ring-b" />
        <div className="art-card">
          <div className="art-topline"><span>PLAYER PROFILE</span><span>001 / HN</span></div>
          <div className="avatar-placeholder">
            <div className="avatar-glow" />
            <div className="avatar-head"><div className="hair" /><div className="blindfold" /><div className="neck" /></div>
            <div className="avatar-body"><div className="shirt" /><div className="tie" /><div className="arm arm-left" /><div className="arm arm-right" /></div>
          </div>
          <div className="art-bottom"><strong>HERONEON</strong><span>CHARACTER ART COMING SOON</span></div>
        </div>
        <div className="floating-sticker sticker-star">✳</div>
        <div className="floating-sticker sticker-play">▶</div>
        <div className="floating-sticker sticker-label">MINECRAFT<br />& MORE</div>
      </motion.div>
      <a href="#videos" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  );
}
