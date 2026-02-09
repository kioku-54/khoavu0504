export interface HeroAnimations {
  scroll: {
    offset: [string, string];
    transforms: {
      scale: [number, number];
      opacity: [number, number];
      blur: [number, number];
    };
  };
  name: {
    initial: {
      opacity: number;
      y: number;
    };
    animate: {
      opacity: number;
      y: number;
    };
    transition: {
      duration: number;
      ease: string;
    };
  };
  title: {
    initial: {
      opacity: number;
      x: number;
    };
    animate: {
      opacity: number;
      x: number;
    };
    transition: {
      duration: number;
      delay: number;
      ease: string;
    };
  };
  aboutWhatIDo: {
    initial: {
      opacity: number;
    };
    animate: {
      opacity: number;
    };
    transition: {
      duration: number;
      delay: number;
    };
  };
  skills: {
    initial: {
      opacity: number;
      y: number;
    };
    animate: {
      opacity: number;
      y: number;
    };
    transition: {
      duration: number;
      delay: number;
    };
  };
  mapImage: {
    initial: {
      opacity: number;
      scale: number;
      filter: string;
    };
    whileInView: {
      opacity: number;
      scale: number;
      filter: string;
    };
    viewport: {
      once: boolean;
    };
    transition: {
      duration: number;
      delay: number;
      ease: string;
    };
  };
}

export const heroAnimations: HeroAnimations = {
  scroll: {
    offset: ['start start', 'end start'] as const,
    transforms: {
      scale: [1, 0.4],
      opacity: [1, 0],
      blur: [0, 4],
    },
  },
  name: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  title: {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
  aboutWhatIDo: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
  skills: {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.8,
      delay: 0.6,
    },
  },
  mapImage: {
    initial: {
      opacity: 0,
      scale: 0.4,
      filter: 'blur(4px)',
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    viewport: {
      once: true,
    },
    transition: {
      duration: 1.2,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};
