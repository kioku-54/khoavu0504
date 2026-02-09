export interface ProjectsAnimations {
  scroll: {
    offset: [string, string];
    keyframes: [number, number, number, number];
    opacity: [number, number, number, number];
    y: [number, number, number, number];
  };
  initial: {
    opacity: number;
    y: number;
  };
  whileInView: {
    opacity: number;
    y: number;
  };
  viewport: {
    once: boolean;
    margin: string;
  };
  transition: {
    duration: number;
    delayMultiplier: number;
  };
  mountDelay: number;
  scrollOptions: {
    layoutEffect: boolean;
  };
}

export const projectsAnimations: ProjectsAnimations = {
  scroll: {
    offset: ['start end', 'end start'] as const,
    keyframes: [0, 0.3, 0.7, 1],
    opacity: [0, 1, 1, 0],
    y: [100, 0, 0, -100],
  },
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-100px',
  },
  transition: {
    duration: 0.6,
    delayMultiplier: 0.1,
  },
  mountDelay: 100,
  scrollOptions: {
    layoutEffect: false,
  },
};
