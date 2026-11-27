"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Gamepad2, Infinity } from "lucide-react";

export default function Stats() {
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/youtube")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load channel stats.");
        return response.json();
      })
      .then((data) => {
        if (active) setSubscriberCount(data.channel?.subscriberCount ?? null);
      })
      .catch(() => {
        if (active) setSubscriberCount(null);
      })
      .finally(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const subscriberLabel =
    subscriberCount !== null
      ? new Intl.NumberFormat("en", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(Number(subscriberCount))
      : loaded
        ? "—"
        : "…";

  const stats = [
    {
      icon: Users,
      value: subscriberLabel,
      label: "SUBSCRIBERS",
      note: loaded && subscriberCount !== null ? "YouTube channel stats" : "Live channel stats",
    },
    {
      icon: Gamepad2,
      value: "MINECRAFT",
      label: "MAIN CONTENT",
      note: "More games, more adventures",
    },
    {
      icon: Infinity,
      value: "∞",
      label: "POSSIBILITIES",
      note: "Always creating",
    },
  ];

  return (
    <section className="stats-section section-wrap">
      <div className="stats-panel">
        {stats.map(({ icon: Icon, value, label, note }, i) => (
          <motion.div
            className="stat-item"
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
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
