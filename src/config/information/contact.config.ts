export interface ContactLink {
  href: string;
  label: string;
  value: string;
}

export interface ContactConfig {
  coordinateLabel: string;
  description: string;
  links: ContactLink[];
  footer: {
    copyright: string;
    coordinates: string;
  };
}

export const contactConfig: ContactConfig = {
  coordinateLabel: 'TRANSMISSION // CONNECT',
  description:
    'Currently open to new opportunities in geospatial engineering and spatial data science.',
  links: [
    {
      href: 'mailto:anhkhoakioku@gmail.com',
      label: 'EMAIL',
      value: 'anhkhoakioku@gmail.com',
    },
    {
      href: 'https://github.com/kioku-54',
      label: 'GITHUB',
      value: 'github.com/kioku-54',
    },
    {
      href: 'https://linkedin.com/in/khoa-kioku',
      label: 'LINKEDIN',
      value: ' linkedin.com/in/khoa-kioku',
    },
  ],
  footer: {
    copyright: '© 2026 KHOA VU',
    coordinates: 'LAT: 10.8231 / LNG: 106.6297',
  },
};
