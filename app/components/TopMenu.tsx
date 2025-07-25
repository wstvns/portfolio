import Link from 'next/link';
import React from 'lucide-react';

const TopMenu = () => (
  <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur z-50 shadow">
    <ul className="flex justify-center gap-8 py-4">
      <li><Link href="#home" className="hover:text-primary transition">Início</Link></li>
      <li><Link href="#skills" className="hover:text-primary transition">Skills</Link></li>
      <li><Link href="#projects" className="hover:text-primary transition">Projetos</Link></li>
      <li><Link href="#experience" className="hover:text-primary transition">Experência</Link></li>
      <li><Link href="#contact" className="hover:text-primary transition">Contato</Link></li>      
    </ul>
  </nav>
);

export default TopMenu;