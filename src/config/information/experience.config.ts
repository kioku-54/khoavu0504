export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  impact: {
    title: string;
    items: string[];
  };
}

export interface ExperienceConfig {
  coordinateLabel: string;
  experiences: ExperienceItem[];
}

export const experienceConfig: ExperienceConfig = {
  coordinateLabel: 'CAREER_LOG // TIMELINE',
  experiences: [
    {
      company: 'Be Group',
      role: 'Product Map Intelligent',
      period: 'Mar 2024 - Now',
      description: [
        'LLMOps & AgentOps Platform: Architected and deployed production-grade LLMOps and AgentOps infrastructures. Developed intelligent AI agents to automate high-complexity geospatial tasks, successfully transforming time-intensive manual processes into scalable, AI-powered workflows.',
        'Map Intelligence & R&D: Led the research and development of POI scoring models and route similarity algorithms. These solutions analyze driver behavior patterns to directly optimize ETA/ATA accuracy and enhance the overall reliability of the ride-hailing platform.',
        'MapOps Automation Ecosystem: Built a comprehensive suite of MapOps tools and spatial ETL pipelines to streamline operational workflows. Focused on minimizing manual intervention and reducing human-induced errors across the entire map data lifecycle.',
      ],
      impact: {
        title: 'Key Impact',
        items: [
          'Cost Efficiency: Reduced manual costs by 60% and eliminated third-party dependencies through automation tools and GenAI.',
          'Innovation: Pioneered GenAI integration to solve complex geospatial challenges, setting new internal benchmarks.',
          'Ops Shift: Transformed team mindset from manual workflows to AI-augmented automation.',
        ],
      },
    },
    {
      company: 'Freelance',
      role: 'GIS Developer',
      period: 'May 2022 - Jan 2024',
      description: [
        'PropTech - Propalt (UK): Served as a GIS Frontend Developer, engineering an interactive Web-GIS interface using Mapbox GL JS and React. I specialized in optimizing spatial queries to ensure high-speed data rendering and smooth interaction for a dataset of millions of UK property records.',
        'GovTech - Electrical Management (Norway): Developed a Web-GIS solution for electrical grid management using OpenLayers and Webserver. Additionally, I conducted R&D on NILM (Non-Intrusive Load Monitoring) models to analyze and predict electricity consumption patterns more accurately.',
        'PropTech – Vmax (India): Designed and built a comprehensive Web-GIS application for real estate visualization. I integrated OpenLayers with PHP-based backends to provide a seamless user experience for searching and filtering complex spatial data.',
      ],
      impact: {
        title: 'Key Impact',
        items: [
          'Successful Delivery: Successfully delivered multiple end-to-end Web-GIS products for clients, meeting all technical requirements and project deadlines.',
          'Performance Launch: Successfully launched a complex Web-GIS system for Propalt (UK), capable of visualizing dozens of geospatial layers over a massive dataset of tens of millions of records with high stability.',
        ],
      },
    },
    {
      company: 'Vlab S.J.C',
      role: 'Web Developer - GIS Specialist',
      period: 'Feb 2021 - May 2022',
      description: [
        'GIS Foundations & Automation: Started as a GIS Specialist focused on cleaning and preprocessing land parcel data. Developed automation tools and scripts to optimize data preparation workflows.',
        "Spatial Database & API Management: Transitioned to a backend developer role to maintain and build new features for the company's Web-GIS products. Managed spatial databases and developed spatial APIs to support web applications. Established a seamless data flow between the GIS team and the Engineering team to ensure data consistency and integrity.",
      ],
      impact: {
        title: 'Key Impact',
        items: [
          'Team Collaboration: Optimized the "GIS-to-Engineer" data pipeline, reducing synchronization errors and improving the product update cycle.',
          'Product Maintenance: Maintained high system stability while integrating new spatial features for existing Web-GIS platforms.',
        ],
      },
    },
  ],
};
