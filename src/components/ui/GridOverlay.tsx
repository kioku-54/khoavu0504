import React from 'react';
import { motion } from 'framer-motion';
export function GridOverlay() {
  // Create a grid of lines
  const horizontalLines = Array.from({
    length: 20,
  });
  const verticalLines = Array.from({
    length: 12,
  });
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#D8D6D0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        {/* Base subtle grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#smallGrid)"
          className="opacity-30"
        />

        {/* Animated Major Grid Lines - Horizontal */}
        {horizontalLines.map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${(i + 1) * 10}%`}
            x2="100%"
            y2={`${(i + 1) * 10}%`}
            stroke="#D8D6D0"
            strokeWidth="1"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Animated Major Grid Lines - Vertical */}
        {verticalLines.map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i + 1) * 10}%`}
            y1="0"
            x2={`${(i + 1) * 10}%`}
            y2="100%"
            stroke="#D8D6D0"
            strokeWidth="1"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: i * 0.1 + 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
