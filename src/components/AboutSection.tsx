import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CoordinateLabel } from './ui/CoordinateLabel';
import { aboutConfig } from '../config/information/about.config';
import { aboutAnimations } from '../config/animations/about.animations';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: aboutAnimations.scroll.offset as any,
  });

  // Scroll-based animations
  // Avatar box
  const avatarOpacity = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.avatar.scroll.opacity
  );
  const avatarScale = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.avatar.scroll.scale
  );
  const avatarY = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.avatar.scroll.y
  );

  // Heading
  const headingOpacity = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.heading.scroll.opacity
  );
  const headingY = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.heading.scroll.y
  );

  // Content
  const contentOpacity = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.content.scroll.opacity
  );
  const contentY = useTransform(
    scrollYProgress,
    aboutAnimations.scroll.keyframes,
    aboutAnimations.content.scroll.y
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 border-t border-charcoal/10 bg-offwhite relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <CoordinateLabel text={aboutConfig.coordinateLabel} className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.div
              initial={aboutAnimations.avatar.initial}
              whileInView={aboutAnimations.avatar.whileInView}
              viewport={aboutAnimations.avatar.viewport}
              style={{
                opacity: avatarOpacity,
                scale: avatarScale,
                y: avatarY,
              }}
              className="aspect-square bg-charcoal/5 border border-dashed border-charcoal/30 relative"
            >
              {/* Abstract avatar representation using map layers */}
              <div className="absolute inset-4 border border-charcoal/10 bg-teal/5"></div>
              <div className="absolute inset-8 border border-charcoal/10 bg-teal/10"></div>
              <div className="absolute inset-12 border border-charcoal/10 bg-teal/20"></div>

              <div className="absolute bottom-2 right-2 font-mono text-[10px] text-charcoal/40">
                FIG. 1.1
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center">
            <motion.h3
              initial={aboutAnimations.heading.initial}
              whileInView={aboutAnimations.heading.whileInView}
              viewport={aboutAnimations.heading.viewport}
              style={{
                opacity: headingOpacity,
                y: headingY,
              }}
              className="text-2xl font-bold text-charcoal mb-6"
            >
              {aboutConfig.heading}
            </motion.h3>

            <motion.div
              initial={aboutAnimations.content.initial}
              whileInView={aboutAnimations.content.whileInView}
              viewport={aboutAnimations.content.viewport}
              transition={aboutAnimations.content.transition}
              style={{
                opacity: contentOpacity,
                y: contentY,
              }}
              className="space-y-4 text-charcoal/70 leading-relaxed"
            >
              {aboutConfig.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-mono text-xs text-teal mb-2">CORE STACK</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  {aboutConfig.coreStack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs text-teal mb-2">TOOLS</h4>
                <ul className="text-sm text-charcoal/80 space-y-1">
                  {aboutConfig.tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
