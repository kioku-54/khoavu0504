import React, { useEffect } from 'react';
import { GridOverlay } from './components/ui/GridOverlay';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSession } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Also handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-offwhite overflow-x-hidden selection:bg-teal/20 selection:text-teal-900">
      {/* Fixed Background Grid */}
      <GridOverlay />

      {/* Content Layer */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSession />
        <ContactSection />
      </div>

      {/* Fixed border frame for the "map view" feel */}
      <div className="fixed inset-0 border-[12px] border-offwhite pointer-events-none z-50 hidden lg:block"></div>
      <div className="fixed inset-4 border border-charcoal/5 pointer-events-none z-50 hidden lg:block"></div>
    </main>
  );
}
