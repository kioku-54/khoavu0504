import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CoordinateLabel } from './ui/CoordinateLabel';
import { Calendar } from 'lucide-react';
import {
  experienceConfig,
  type ExperienceItem,
} from '../config/information/experience.config';
import { experienceAnimations } from '../config/animations/experience.animations';
export function ExperienceSession() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 border-t border-charcoal/10 bg-offwhite relative"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <CoordinateLabel
          text={experienceConfig.coordinateLabel}
          className="mb-16"
        />

        <div className="relative border-l border-charcoal/10 ml-3 md:ml-6 space-y-16">
          {experienceConfig.experiences.map((exp, index) => (
            <ExperienceNode key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
function ExperienceNode({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: nodeRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: experienceAnimations.scroll.offset as any,
  });

  const opacity = useTransform(
    scrollYProgress,
    experienceAnimations.scroll.keyframes,
    experienceAnimations.scroll.opacity
  );
  const x = useTransform(
    scrollYProgress,
    experienceAnimations.scroll.keyframes,
    experienceAnimations.scroll.x
  );

  return (
    <motion.div
      ref={nodeRef}
      initial={experienceAnimations.initial}
      whileInView={experienceAnimations.whileInView}
      viewport={experienceAnimations.viewport}
      transition={{
        duration: experienceAnimations.transition.duration,
        delay: index * experienceAnimations.transition.delayMultiplier,
      }}
      style={{
        opacity,
        x,
      }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-offwhite border-2 border-teal rounded-full z-10"></div>

      {/* Horizontal Connector */}
      <div className="absolute left-0 top-3 w-6 md:w-8 h-px bg-charcoal/10"></div>

      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
        <h3 className="text-xl md:text-2xl font-bold text-charcoal">
          {experience.company}
        </h3>
        <span className="hidden md:inline text-charcoal/30">/</span>
        <h4 className="text-lg text-teal font-medium">{experience.role}</h4>
      </div>

      <div className="flex items-center gap-2 mb-6 font-mono text-xs text-charcoal/50">
        <Calendar className="w-3 h-3" />
        <span>{experience.period}</span>
      </div>

      <div className="space-y-4 mb-6">
        {experience.description.map((desc, i) => (
          <p
            key={i}
            className="text-charcoal/70 leading-relaxed text-sm md:text-base"
          >
            • {desc}
          </p>
        ))}
      </div>

      {/* Impact Box */}
      <div className="bg-charcoal/5 border border-charcoal/10 p-6 relative group hover:border-teal/30 transition-colors">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-teal/50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-teal/50"></div>

        <h5 className="font-mono text-xs text-teal mb-3 uppercase tracking-wider">
          {experience.impact.title}
        </h5>
        <ul className="space-y-2">
          {experience.impact.items.map((item, i) => (
            <li key={i} className="text-sm text-charcoal/80 pl-4 relative">
              <span className="absolute left-0 top-1.5 w-1 h-1 bg-teal/50 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
