'use client';

import Link from 'next/link';
import React from 'react';

const TopMenu = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-zinc-900/0 backdrop-blur-md shadow-sm">
    <ul className="flex justify-center gap-8 py-4 text-sm font-medium">
      <li><Link href="#home" className="hover:text-primary transition">Início</Link></li>
      <li><Link href="#skills" className="hover:text-primary transition">Skills</Link></li>
      <li><Link href="#projects" className="hover:text-primary transition">Projetos</Link></li>
      <li><Link href="#experience" className="hover:text-primary transition">Experiência</Link></li>
      <li><Link href="#contact" className="hover:text-primary transition">Contato</Link></li>
    </ul>
  </nav>
);

export default TopMenu;
