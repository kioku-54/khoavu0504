export interface HeroConfig {
  coordinateLabel: string;
  name: string;
  title: string;
  aboutMe: {
    label: string;
    text: string;
  };
  whatIDo: {
    label: string;
    text: string;
  };
  skills: Array<{
    label: string;
  }>;
  decorative: {
    elev: string;
    accuracy: string;
    datum: string;
  };
}

export const heroConfig: HeroConfig = {
  coordinateLabel: '10.8231°N, 106.6297°E // HO CHI MINH CITY, VIETNAM',
  name: 'KHOA VU',
  title: 'GIS SOFTWARE ENGINEER',
  aboutMe: {
    label: 'About Me',
    text: 'Senior GIS Engineer with 5 years of experience and a diverse background as a Specialist, Web Developer, Data Engineer, and AI researcher.',
  },
  whatIDo: {
    label: 'What I Do',
    text: 'I specialize in GeoSpatial Data Engineering and Map Intelligence, focusing on optimizing large-scale data infrastructure and applying intelligent models to spatial analysis. With practical experience in Ride-hailing, Real Estate, and GovTech, I design scalable data systems that transform complex spatial data into smart solutions for business operations and strategic decision-making.',
  },
  skills: [
    { label: 'SPATIAL' },
    { label: 'WEB' },
    { label: 'DATA' },
  ],
  decorative: {
    elev: 'ELEV: 520ft',
    accuracy: 'ACCURACY: ±0.5m',
    datum: 'DATUM: WGS84',
  },
};
