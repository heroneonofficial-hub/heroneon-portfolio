import { Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-top">
        <a className="brand footer-brand" href="#home">HERONEON<span>_YT</span><i /></a>
        <p>Gaming. Creativity. Community.</p>
        <a className="footer-social" href="https://www.youtube.com/@Heroneon_YT" target="_blank" rel="noreferrer"><Youtube size={18} /> YOUTUBE <ArrowUpRight size={14} /></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} HERONEON_YT</span><a href="#home">BACK TO TOP ↑</a><span>MADE FOR THE NEXT ADVENTURE.</span></div>
    </footer>
  );
}
