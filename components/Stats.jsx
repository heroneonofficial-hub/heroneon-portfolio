 "use client";

import { motion } from "framer-motion";
import { Users, Gamepad2, Infinity } from "lucide-react";

const stats = [
  { icon: Users, value: "—", label: "SUBSCRIBERS", note: "Connect channel stats" },
  { icon: Gamepad2, value: "MINECRAFT", label: "MAIN CONTENT", note: "More games, more adventures" },
  { icon: Infinity, value: "∞", label: "POSSIBILITIES", note: "Always creating" }
];

export default function Stats() {
  return (
    <section className="stats-section section-wrap">
      <div className="stats-panel">
        {stats.map(({ icon: Icon, value, label, note }, i) => (
          <motion.div className="stat-item" key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <Icon className="stat-icon" size={21} />
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{note}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
