'use client';

import { motion } from 'framer-motion';
import { CounterAnimation, ScrollReveal } from './animations';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface StatsClientProps {
  stats: Stat[];
}

export default function StatsClient({ stats }: StatsClientProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 0.1} direction="up">
          <motion.div
            className="text-center p-6 rounded-xl bg-white dark:bg-[#2a2218] shadow-lg border border-primary/10"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
            </motion.div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              <CounterAnimation
                value={stat.value}
                suffix={stat.suffix}
                duration={2.5}
                delay={0.3 + index * 0.15}
              />
            </div>
            <p className="text-text-muted font-sans text-sm">{stat.label}</p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
