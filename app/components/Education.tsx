'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Clock, Award } from 'lucide-react';

const education = [
	{
		degree: 'Análise e Desenvolvimento de Sistemas',
		institution: 'Faculdade Senac SP',
		period: '2024 - Presente',
		status: 'Cursando',
		description: [
			'Desenvolvimento de aplicações web modernas',
			'Estudo de arquitetura de software e padrões de projeto',
			'Práticas de desenvolvimento ágil e DevOps',
			'Foco em tecnologias Full Stack',
		],
	},
];

const certifications = [
	{
		name: 'Cloud Practitioner AWS',
		issuer: 'Amazon Web Services',
		date: '2025',
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export const Education = () => {
	return (
		<section className="min-h-[40vh] flex flex-col justify-center py-35 px-4 md:px-8">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="max-w-4xl mx-auto w-full"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
					Formação Acadêmica
				</h2>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="space-y-8"
				>
					{education.map((edu, index) => (
						<motion.div key={index} variants={item} className="relative">
							<div className="card group p-8">
								<div className="absolute -top-3 right-8">
									<div className="px-4 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 flex items-center gap-2">
										<Clock className="w-4 h-4 text-primary" />
										<span className="text-sm text-primary">{edu.status}</span>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="mt-1">
										<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
											<GraduationCap className="w-6 h-6 text-primary" />
										</div>
									</div>

									<div className="flex-1">
										<h3 className="text-xl font-semibold text-foreground mb-1">
											{edu.degree}
										</h3>
										<p className="text-muted mb-1">{edu.institution}</p>
										<p className="text-sm text-muted/80 mb-4">{edu.period}</p>

										<ul className="list-disc list-inside space-y-2 text-muted">
											{edu.description.map((item, i) => (
												<motion.li
													key={i}
													initial={{ opacity: 0, x: -20 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ delay: i * 0.1 }}
													viewport={{ once: true }}
												>
													{item}
												</motion.li>
											))}
										</ul>
									</div>
								</div>

								<div className="mt-6 pt-6 border-t border-muted/10">
									<div className="flex flex-wrap gap-2">
										<span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
											Full Stack
										</span>
										<span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
											Clean Architecture
										</span>
										<span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
											DevOps
										</span>
										<span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
											Agile
										</span>
									</div>
								</div>
							</div>

							{/* Decorative gradient line */}
							<div className="absolute left-12 top-full h-16 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
						</motion.div>
					))}
				</motion.div>

				{/* Certifications*/}
				{false && ( // quando quiser ocultar ou mostrar certificados é só mudar true/false
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="mt-16"
					>
						<h3 className="text-2xl font-bold mb-8 text-foreground">
							Certificações
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{certifications.map((cert, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="card group"
								>
									<div className="flex items-start gap-3">
										<div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
											<Award className="w-5 h-5 text-secondary" />
										</div>
										<div>
											<h4 className="text-lg font-semibold text-foreground">
												{cert.name}
											</h4>
											<p className="text-sm text-muted">{cert.issuer}</p>
											<p className="text-xs text-muted/80 mt-1">{cert.date}</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
};

export default Education;
