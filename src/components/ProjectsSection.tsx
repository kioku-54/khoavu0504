import { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CoordinateLabel } from './ui/CoordinateLabel';
import { ProjectTile } from './ProjectTile';
import { projectsConfig } from '../config/information/projects.config';
import { projectsAnimations } from '../config/animations/projects.animations';

// Helper function to chunk array into rows
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

// ProjectRow component with individual scroll animation
function ProjectRow({
  rowProjects,
  rowIndex,
}: {
  rowProjects: typeof projectsConfig.projects;
  rowIndex: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: false, margin: '-100px' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay scroll animation setup to prevent flicker on initial load
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, projectsAnimations.mountDelay);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: projectsAnimations.scroll.offset as any,
    layoutEffect: projectsAnimations.scrollOptions.layoutEffect,
  });

  const opacity = useTransform(
    scrollYProgress,
    projectsAnimations.scroll.keyframes,
    projectsAnimations.scroll.opacity
  );
  const y = useTransform(
    scrollYProgress,
    projectsAnimations.scroll.keyframes,
    projectsAnimations.scroll.y
  );

  // Only apply scroll animation after mount and when in view
  const shouldUseScrollAnimation = isMounted && isInView;

  return (
    <motion.div
      ref={rowRef}
      initial={projectsAnimations.initial}
      whileInView={projectsAnimations.whileInView}
      viewport={projectsAnimations.viewport}
      transition={{
        duration: projectsAnimations.transition.duration,
        delay: rowIndex * projectsAnimations.transition.delayMultiplier,
      }}
      style={shouldUseScrollAnimation ? { opacity, y } : undefined}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {rowProjects.map((project, index) => (
        <ProjectTile
          key={project.title}
          index={rowIndex * 3 + index}
          {...project}
        />
      ))}
    </motion.div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Chunk projects into rows based on desktop layout (3 columns)
  const projectRows = useMemo(() => {
    return chunkArray(projectsConfig.projects, 3);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 border-t border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <CoordinateLabel
              text={projectsConfig.coordinateLabel}
              className="mb-4"
            />

            <h2 className="text-4xl font-bold text-charcoal">
              {projectsConfig.title}
            </h2>
          </div>
          <div className="font-mono text-xs text-charcoal/50 mt-4 md:mt-0">
            {projectsConfig.scale}
          </div>
        </div>

        <div className="space-y-6">
          {projectRows.map((row, rowIndex) => (
            <ProjectRow key={rowIndex} rowProjects={row} rowIndex={rowIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
