 "use client";

import { useState } from "react";
import { Menu, X, Youtube } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Videos", "#videos"],
  ["Livestreams", "#live"],
  ["Character", "#character"],
  ["About", "#about"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="brand" href="#home" aria-label="Heroneon home">
        HERONEON<span>_YT</span><i />
      </a>
      <div className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-youtube" href="https://www.youtube.com/@Heroneon_YT" target="_blank" rel="noreferrer">
          <Youtube size={16} /> YouTube
        </a>
      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
