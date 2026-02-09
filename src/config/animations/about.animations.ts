export interface AboutAnimations {
  scroll: {
    offset: [string, string];
    keyframes: [number, number, number, number];
  };
  avatar: {
    scroll: {
      opacity: [number, number, number, number];
      scale: [number, number, number, number];
      y: [number, number, number, number];
    };
    initial: {
      opacity: number;
      scale: number;
    };
    whileInView: {
      opacity: number;
      scale: number;
    };
    viewport: {
      once: boolean;
    };
  };
  heading: {
    scroll: {
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
    };
  };
  content: {
    scroll: {
      opacity: [number, number, number, number];
      y: [number, number, number, number];
    };
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
}

export const aboutAnimations: AboutAnimations = {
  scroll: {
    offset: ['start end', 'end start'] as const,
    keyframes: [0, 0.3, 0.7, 1],
  },
  avatar: {
    scroll: {
      opacity: [0, 1, 1, 0],
      scale: [0.85, 1, 1, 0.85],
      y: [80, 0, 0, -80],
    },
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
    viewport: {
      once: true,
    },
  },
  heading: {
    scroll: {
      opacity: [0, 1, 1, 0],
      y: [30, 0, 0, -30],
    },
    initial: {
      opacity: 0,
      y: 10,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
  },
  content: {
    scroll: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20],
    },
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
};
