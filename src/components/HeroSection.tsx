import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CoordinateLabel } from './ui/CoordinateLabel';
import { Map, Globe, Layers } from 'lucide-react';
import mapImage from '../assets/images/map-image.png';
import { heroConfig } from '../config/information/hero.config';
import { heroAnimations } from '../config/animations/hero.animations';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: heroAnimations.scroll.offset,
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    heroAnimations.scroll.transforms.scale
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    heroAnimations.scroll.transforms.opacity
  );
  const blurValue = useTransform(
    scrollYProgress,
    [0, 1],
    heroAnimations.scroll.transforms.blur
  );
  const filter = useTransform(blurValue, (b) => `blur(${b}px)`);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="max-w-4xl">
            <CoordinateLabel
              text={heroConfig.coordinateLabel}
              className="mb-6"
            />

            <motion.h1
              initial={heroAnimations.name.initial}
              animate={heroAnimations.name.animate}
              transition={heroAnimations.name.transition}
              className="text-6xl md:text-8xl font-bold text-charcoal tracking-tighter mb-6"
            >
              {heroConfig.name}
            </motion.h1>

            <motion.div
              initial={heroAnimations.title.initial}
              animate={heroAnimations.title.animate}
              transition={heroAnimations.title.transition}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-px w-12 bg-teal"></div>
              <h2 className="text-xl md:text-2xl text-charcoal/80 font-light tracking-wide">
                {heroConfig.title}
              </h2>
            </motion.div>

            <motion.div
              initial={heroAnimations.aboutWhatIDo.initial}
              animate={heroAnimations.aboutWhatIDo.animate}
              transition={heroAnimations.aboutWhatIDo.transition}
              className="max-w-xl space-y-8 mb-12"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-6 bg-teal/50"></div>
                  <span className="font-mono text-xs text-teal tracking-wider uppercase">
                    {heroConfig.aboutMe.label}
                  </span>
                </div>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {heroConfig.aboutMe.text}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-6 bg-teal/50"></div>
                  <span className="font-mono text-xs text-teal tracking-wider uppercase">
                    {heroConfig.whatIDo.label}
                  </span>
                </div>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {heroConfig.whatIDo.text}
                </p>
              </div>
            </motion.div>

            {/* <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="max-w-xl text-lg text-charcoal/70 leading-relaxed mb-12"
        >
          Building spatial intelligence tools at the intersection of cartography
          and code. Specializing in high-performance vector tiling, geospatial
          analysis pipelines, and interactive map interfaces.
        </motion.p> */}

            <motion.div
              initial={heroAnimations.skills.initial}
              animate={heroAnimations.skills.animate}
              transition={heroAnimations.skills.transition}
              className="flex gap-8"
            >
              <div className="flex flex-col gap-2">
                <Map className="w-6 h-6 text-teal" />
                <span className="font-mono text-xs text-charcoal/60">
                  {heroConfig.skills[0].label}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Globe className="w-6 h-6 text-teal" />
                <span className="font-mono text-xs text-charcoal/60">
                  {heroConfig.skills[1].label}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Layers className="w-6 h-6 text-teal" />
                <span className="font-mono text-xs text-charcoal/60">
                  {heroConfig.skills[2].label}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Map Image */}
          <motion.div
            initial={heroAnimations.mapImage.initial}
            whileInView={heroAnimations.mapImage.whileInView}
            viewport={heroAnimations.mapImage.viewport}
            transition={heroAnimations.mapImage.transition}
            style={{
              scale,
              opacity,
              filter,
            }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <img
              src={mapImage}
              alt="Geographic map visualization"
              className="w-full max-w-lg h-auto object-contain opacity-90"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="font-mono text-xs text-charcoal/40 text-right">
          <div>{heroConfig.decorative.elev}</div>
          <div>{heroConfig.decorative.accuracy}</div>
          <div>{heroConfig.decorative.datum}</div>
        </div>
      </div>
    </section>
  );
}
