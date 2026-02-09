export interface Project {
  title: string;
  description: string;
  tags: string[];
  coordinates: string;
}

export interface ProjectsConfig {
  coordinateLabel: string;
  title: string;
  scale: string;
  projects: Project[];
}

export const projectsConfig: ProjectsConfig = {
  coordinateLabel: 'PROJECT_INDEX // 2023-2025',
  title: 'Selected Works',
  scale: 'SCALE 1:50000',
  projects: [
    {
      title: 'Terrain Analysis Pipeline',
      description:
        'High-performance Python pipeline for processing LiDAR point clouds into DEM/DSM raster products. Optimized for distributed processing across AWS Lambda.',
      tags: ['Python', 'PDAL', 'AWS Lambda', 'Rasterio'],
      coordinates: '45.5152°N, 122.6784°W',
    },
    {
      title: 'Real-time Fleet Tracker',
      description:
        'WebSocket-based dashboard visualizing 10,000+ moving assets with historical playback and geofencing alerts. Built with Mapbox GL JS and Node.js.',
      tags: ['React', 'Mapbox GL', 'WebSockets', 'PostGIS'],
      coordinates: '37.7749°N, 122.4194°W',
    },
    {
      title: 'Satellite Imagery Classifier',
      description:
        'Deep learning model for automated land cover classification using Sentinel-2 imagery. Achieved 94% accuracy in urban density detection.',
      tags: ['PyTorch', 'TensorFlow', 'GDAL', 'Docker'],
      coordinates: '40.7128°N, 74.0060°W',
    },
    {
      title: 'OpenStreetMap Contributor Tool',
      description:
        'Web-based editor for rapid building footprint validation. Integrated with OSM API for direct changeset uploads.',
      tags: ['TypeScript', 'OSM API', 'Turf.js', 'Leaflet'],
      coordinates: '51.5074°N, 0.1278°W',
    },
    {
      title: 'Watershed Delineation App',
      description:
        'Interactive tool allowing hydrologists to calculate upstream drainage areas instantly by clicking any point on a river network.',
      tags: ['Vue.js', 'GeoServer', 'WPS', 'PostgreSQL'],
      coordinates: '34.0522°N, 118.2437°W',
    },
    {
      title: 'LiDAR Point Cloud Viewer',
      description:
        'WebGL-based viewer for massive point cloud datasets (1B+ points) with classification filtering and vertical profile tools.',
      tags: ['Three.js', 'WebGL', 'Potree', 'C++'],
      coordinates: '48.8566°N, 2.3522°E',
    },
  ],
};
