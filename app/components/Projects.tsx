'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Octokit } from '@octokit/rest';

interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  fork: boolean;
}

interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  fork: boolean;
}

const featuredProjects = [
  'YouText',
  'chatbot-juridico',
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

export const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.repos.listForUser({
          username: 'wstvns',
          sort: 'updated',
          per_page: 100,
        });

        const repos = response.data
          .filter((repo) => !repo.fork && (featuredProjects.includes(repo.name) || (repo.stargazers_count ?? 0) > 0))
          .sort((a, b) => {
            const aFeatured = featuredProjects.includes(a.name);
            const bFeatured = featuredProjects.includes(b.name);
            if (aFeatured && !bFeatured) return -1;
            if (!aFeatured && bFeatured) return 1;
            return (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0);
          })
          .slice(0, 6)
          .map((repo): Repository => ({
            name: repo.name,
            description: repo.description || 'No description available',
            html_url: repo.html_url,
            homepage: repo.homepage ?? null,
            stargazers_count: repo.stargazers_count ?? 0,
            forks_count: repo.forks_count ?? 0,
            topics: repo.topics ?? [],
            language: repo.language ?? null,
            fork: repo.fork ?? false
          }));

        setRepositories(repos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-10 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/30 backdrop-blur-[1px]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Projetos
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-background/50 border border-muted/10 rounded-lg p-6 animate-pulse"
              >
                <div className="h-6 bg-muted/10 rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted/10 rounded w-full mb-2" />
                <div className="h-4 bg-muted/10 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {repositories.map((repo) => (
              <motion.div
                key={repo.name}
                variants={item}
                className="group relative bg-background/50 border border-muted/10 rounded-lg p-6 hover:border-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <Github className="w-5 h-5 text-primary mr-2" />
                      <h3 className="text-lg font-semibold text-foreground">{repo.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-muted mb-3 line-clamp-2">{repo.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects; 