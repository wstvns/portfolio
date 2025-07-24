'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';

const experiences = [
  {
    title: 'Jr. QA Engineer',
    company: 'Outlier',
    period: '2025 - Presente',
    description: [
      'Garantia da qualidade de software por meio de testes automatizados e manuais',
      'Automação com Python (Pytest, Selenium) e JavaScript (Playwright, Cypress)',
      'Testes de API com Postman, integração em pipelines CI/CD',
      'Atuação em times ágeis com foco em rastreio de issues e desenho de casos de teste',
    ],
  },
  {
    title: 'AI&ML Trainee',
    company: 'Compass UOL',
    period: '2024 - 2025',
    description: [
      'Desenvolvimento de modelos de machine learning para processamento de linguagem natural',
      'Implementação de pipelines de dados com Python e TensorFlow',
      'Otimização de modelos para produção',
      'Integração com serviços de cloud computing utilizando AWS',
    ],
  },
  {
    title: 'Software Developer',
    company: 'PJ/Contrato',
    period: '2019 - 2024',
    description: [
      'Manutenção e otimização de bancos de dados e servidores fisicos',
      'Desenvolvimento full stack com foco em backend',
      'Implementação de APIs RESTful',
      'Desenvolvimento de features para aplicações web',
    ],
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const Experience = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-12 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/30 backdrop-blur-[1px]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Experiência
        </h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="bg-background/50 border border-muted/10 rounded-lg p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <BriefcaseIcon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-muted mb-1">{exp.company}</p>
                  <p className="text-sm text-muted/80 mb-4">{exp.period}</p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-muted text-left">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience; 