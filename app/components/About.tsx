'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Brain, Terminal, Globe } from 'lucide-react';

const skills = [
	{
		name: 'Full Stack Development',
		icon: Code2,
		description: 'React, Next.js, Node.js, Python',
	},
	{
		name: 'Machine Learning',
		icon: Brain,
		description: 'TensorFlow, PyTorch, Scikit-learn',
	},
	{
		name: 'Cloud Computing',
		icon: Cloud,
		description: 'AWS, Docker, Kubernetes',
	},
	{
		name: 'Database',
		icon: Database,
		description: 'PostgreSQL, MongoDB, Redis',
	},
	{
		name: 'DevOps',
		icon: Terminal,
		description: 'CI/CD, Git, Linux',
	},
	{
		name: 'Web Technologies',
		icon: Globe,
		description: 'HTML5, CSS3, JavaScript, TypeScript',
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export const About = () => {
	return (
		<section className="relative flex flex-col justify-center py-12 px-4 md:px-8">
			<div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/30 backdrop-blur-[1px]" />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="relative max-w-4xl mx-auto"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
					Sobre Mim
				</h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-lg text-muted mb-8"
				>
					Sou desenvolvedor Full Stack com experiência em desenvolvimento web moderno,
					machine learning e cloud computing. Gosto de transformar ideias em soluções práticas
					que geram impacto real. Estou sempre buscando novos desafios e aprendizados para
					crescer profissionalmente e contribuir com projetos inovadores.
				</motion.p>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
				>
					{skills.map((skill) => {
						const Icon = skill.icon;
						return (
							<motion.div
								key={skill.name}
								variants={item}
								className="card group backdrop-blur-[1px] bg-background/20"
							>
								<Icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
								<h3 className="text-xl font-semibold mb-2 text-foreground/90">
									{skill.name}
								</h3>
								<p className="text-muted/80">{skill.description}</p>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;