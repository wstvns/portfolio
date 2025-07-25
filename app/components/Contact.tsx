'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/wstvns',
    color: 'primary',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/wallisson-stevan-985b9375/',
    color: 'secondary',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:wstevandev@gmail.com',
    color: 'accent',
  },
  
];

export const Contact = () => {
  return (
    <footer className="relative py-8 px-4 md:px-8 bg-background/50 backdrop-blur-sm border-t border-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Contact info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <p className="text-sm text-muted mb-4 md:mb-0">
              Se você procura um desenvolvedor comprometido, acabou de encontrar.
            </p>
          </div>

          {/* Right side - Social links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-${link.color}/10 hover:bg-${link.color}/20 transition-colors group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className={`w-4 h-4 text-${link.color}`} />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-muted/10 text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} Wallisson Stevan. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact; 