export interface ProjectTileAnimations {
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
}

export const projectTileAnimations: ProjectTileAnimations = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-50px',
  },
  transition: {
    duration: 0.5,
    delayMultiplier: 0.1,
  },
};
