export interface ExperienceAnimations {
  scroll: {
    offset: [string, string];
    keyframes: [number, number, number, number];
    opacity: [number, number, number, number];
    x: [number, number, number, number];
  };
  initial: {
    opacity: number;
    x: number;
  };
  whileInView: {
    opacity: number;
    x: number;
  };
  viewport: {
    once: boolean;
    margin: string;
  };
  transition: {
    duration: number;
    delayMultiplier: number;
  };
}

export const experienceAnimations: ExperienceAnimations = {
  scroll: {
    offset: ['start end', 'end start'] as const,
    keyframes: [0, 0.3, 0.7, 1],
    opacity: [0, 1, 1, 0],
    x: [-30, 0, 0, 30],
  },
  initial: {
    opacity: 0,
    x: -20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    margin: '-100px',
  },
  transition: {
    duration: 0.6,
    delayMultiplier: 0.1,
  },
};
