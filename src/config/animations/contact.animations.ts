export interface ContactAnimations {
  scroll: {
    offset: [string, string];
    keyframes: [number, number, number, number];
    opacity: [number, number, number, number];
    scale: [number, number, number, number];
  };
  description: {
    initial: {
      opacity: number;
    };
    whileInView: {
      opacity: number;
    };
    viewport: {
      once: boolean;
    };
    transition: {
      delay: number;
    };
  };
  contactLink: {
    whileHover: {
      y: number;
    };
  };
}

export const contactAnimations: ContactAnimations = {
  scroll: {
    offset: ['start end', 'end start'] as const,
    keyframes: [0, 0.3, 0.7, 1],
    opacity: [0, 1, 1, 0],
    scale: [0.9, 1, 1, 0.9],
  },
  description: {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    },
    viewport: {
      once: true,
    },
    transition: {
      delay: 0.2,
    },
  },
  contactLink: {
    whileHover: {
      y: -5,
    },
  },
};
