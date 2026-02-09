import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CoordinateLabel } from './ui/CoordinateLabel';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactConfig } from '../config/information/contact.config';
import { contactAnimations } from '../config/animations/contact.animations';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: contactAnimations.scroll.offset,
  });

  const opacity = useTransform(
    scrollYProgress,
    contactAnimations.scroll.keyframes,
    contactAnimations.scroll.opacity
  );
  const scale = useTransform(
    scrollYProgress,
    contactAnimations.scroll.keyframes,
    contactAnimations.scroll.scale
  );

  return (
    <section
      ref={sectionRef}
      className="py-8 px-6 md:px-12 lg:px-24 border-t border-charcoal/10 bg-charcoal/5"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center"
      >
        <CoordinateLabel
          text={contactConfig.coordinateLabel}
          className="mb-3 justify-center flex"
        />

        <motion.p
          initial={contactAnimations.description.initial}
          whileInView={contactAnimations.description.whileInView}
          viewport={contactAnimations.description.viewport}
          transition={contactAnimations.description.transition}
          className="text-lg text-charcoal/60 mb-4 max-w-2xl mx-auto"
        >
          {contactConfig.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactConfig.links.map((link, index) => {
            const icons = [
              <Mail className="w-5 h-5" />,
              <Github className="w-5 h-5" />,
              <Linkedin className="w-5 h-5" />,
            ];
            return (
              <ContactLink
                key={index}
                href={link.href}
                icon={icons[index]}
                label={link.label}
                value={link.value}
              />
            );
          })}
        </div>

        <footer className="mt-8 pt-3 border-t border-charcoal/10 flex justify-between items-center text-xs font-mono text-charcoal/40">
          <div>{contactConfig.footer.copyright}</div>
          <div>{contactConfig.footer.coordinates}</div>
        </footer>
      </motion.div>
    </section>
  );
}
function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={contactAnimations.contactLink.whileHover}
      className="flex flex-col items-center p-3 bg-offwhite border border-charcoal/10 hover:border-teal transition-colors group"
    >
      <div className="mb-1.5 text-charcoal group-hover:text-teal transition-colors">
        {icon}
      </div>
      <span className="font-mono text-xs text-teal mb-1.5">{label}</span>
      <span className="text-sm text-charcoal/80 font-medium">{value}</span>
    </motion.a>
  );
}
