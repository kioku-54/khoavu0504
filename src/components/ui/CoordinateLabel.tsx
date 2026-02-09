import React from 'react';
import { motion } from 'framer-motion';
interface CoordinateLabelProps {
  text: string;
  className?: string;
  delay?: number;
}
export function CoordinateLabel({
  text,
  className = '',
  delay = 0,
}: CoordinateLabelProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      className={`font-mono text-xs text-teal tracking-wider uppercase ${className}`}
    >
      {text}
    </motion.div>
  );
}
