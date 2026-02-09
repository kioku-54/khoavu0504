export interface AboutConfig {
  coordinateLabel: string;
  heading: string;
  description: string[];
  coreStack: string[];
  tools: string[];
}

export const aboutConfig: AboutConfig = {
  coordinateLabel: 'BIO_DATA // ENGINEER_PROFILE',
  heading: 'Bridging the gap between physical geography and digital infrastructure.',
  description: [
    'I am a GIS Software Engineer with a background in Environmental Science and Computer Science. My work focuses on building scalable geospatial applications that help organizations make data-driven decisions based on location.',
    'From optimizing vector tile generation to training machine learning models on satellite imagery, I enjoy tackling complex spatial problems. I believe that good maps tell the truth, and good software makes that truth accessible.',
  ],
  coreStack: [
    'Python / GeoPandas',
    'PostgreSQL / PostGIS',
    'React / TypeScript',
    'AWS / Docker',
  ],
  tools: [
    'QGIS / ArcGIS Pro',
    'GDAL / PDAL',
    'Mapbox / Leaflet',
    'Google Earth Engine',
  ],
};
