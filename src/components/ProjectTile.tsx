import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectTileAnimations } from '../config/animations/projectTile.animations';

interface ProjectTileProps {
  title: string;
  description: string;
  tags: string[];
  coordinates: string;
  index: number;
}

export function ProjectTile({
  title,
  description,
  tags,
  coordinates,
  index,
}: ProjectTileProps) {
  return (
    <motion.div
      initial={projectTileAnimations.initial}
      whileInView={projectTileAnimations.whileInView}
      viewport={projectTileAnimations.viewport}
      transition={{
        duration: projectTileAnimations.transition.duration,
        delay: index * projectTileAnimations.transition.delayMultiplier,
      }}
      className="group relative bg-offwhite border border-dashed border-charcoal/30 p-6 h-full transition-all duration-300 hover:border-solid hover:border-teal hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden"
    >
      {/* Corner markers for map tile feel */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-charcoal/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-charcoal/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-charcoal/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-charcoal/50" />

      {/* Coordinate Label */}
      <div className="mb-4 font-mono text-[10px] text-teal/80 tracking-widest">
        {coordinates}
      </div>

      {/* Content */}
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-charcoal group-hover:text-teal transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-teal transition-colors opacity-0 group-hover:opacity-100" />
        </div>

        <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4 min-w-0">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-mono border border-charcoal/20 text-charcoal/60 rounded-sm bg-charcoal/5 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
