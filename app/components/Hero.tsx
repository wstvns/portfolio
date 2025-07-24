'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SkillsCarousel } from './SkillsCarousel'; // Importe o carrossel

const socialLinks = [
	{
		name: 'GitHub',
		icon: Github,
		url: 'https://github.com/wstvns',
		colorClass: 'text-primary-400 bg-primary-400/10 hover:bg-primary-400/20',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		url: 'https://linkedin.com/in/wallisson-stevan-985b9375/',
		colorClass: 'text-secondary-400 bg-secondary-400/10 hover:bg-secondary-400/20',
	},
	{
		name: 'Email',
		icon: Mail,
		url: 'mailto:wstevandev@gmail.com',
		colorClass: 'text-accent-400 bg-accent-400/10 hover:bg-accent-400/20',
	},
];

const skills = [
	'Full Stack Developer',
	'Cloud Computing',
	'DevOps & CI/CD',
	'Test Automation & Quality Assurance',
];

export const Hero = () => {
	return (
		<section className="flex flex-col justify-center py-20 px-4 md:px-8 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-radial from-primary-400/10 via-background to-background -z-10" />

			<div className="max-w-4xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="space-y-4"
				>
					<h1 className="text-4xl md:text-6xl font-bold">
						<span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
							Wallisson Stevan
						</span>
					</h1>

					<div className="h-24 overflow-hidden relative">
						{skills.map((skill, index) => (
							<motion.p
								key={skill}
								className="text-xl md:text-2xl text-muted absolute w-full"
								initial={{ opacity: 0, y: 40 }}
								animate={{
									opacity: [0, 1, 1, 0],
									y: [40, 0, 0, -40],
								}}
								transition={{
									duration: 3,
									delay: index * 3,
									repeat: Infinity,
									repeatDelay: (skills.length - 1) * 3,
								}}
							>
								{skill}
							</motion.p>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg text-muted max-w-2xl"
					>
						
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-wrap gap-4 pt-4"
					>
						{socialLinks.map((link) => (
							<motion.a
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div
									className={`p-2 rounded-lg transition-colors ${link.colorClass}`}
								>
									<link.icon className="w-5 h-5" />
								</div>
								<span>{link.name}</span>
							</motion.a>
						))}
					</motion.div>

					{/* Adicione o carrossel aqui */}
					<div className="mt-6">
						<SkillsCarousel />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;