'use client'

import { useState } from 'react'

const projects = [
  {
    title: 'OpenBuild',
    description: 'Open-source website builder with drag-and-drop visual editor, AI component generation, and Figma import.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'AI'],
    link: 'https://github.com/Grandillionaire/openbuild',
    featured: true,
  },
  {
    title: 'BrainVault',
    description: 'Local-first note-taking app with markdown, wiki links, graph view, and semantic search.',
    tech: ['React', 'TypeScript', 'SQLite', 'AI'],
    link: 'https://github.com/Grandillionaire/brainvault',
    featured: true,
  },
  {
    title: 'Code Translator',
    description: 'AI-powered code translation between 10+ programming languages with CLI and web interface.',
    tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
    link: 'https://github.com/Grandillionaire/code-translator',
    featured: true,
  },
]

const stats = [
  { value: '€300K+', label: 'Revenue Generated' },
  { value: '112+', label: 'Clients Served' },
  { value: '93%', label: 'Efficiency Gains' },
  { value: '6', label: 'Team Members' },
]

const skills = [
  'React', 'Next.js', 'TypeScript', 'Python', 'FastAPI',
  'Node.js', 'TailwindCSS', 'PostgreSQL', 'Docker',
  'OpenAI', 'Claude', 'LangChain', 'n8n', 'GoHighLevel'
]

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="text-cyan-400 font-mono text-sm tracking-wider">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            Maxim Gagiev<span className="text-cyan-400">.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-400">
            I build things that matter.
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Full-Stack Developer and founder of{' '}
            <a href="https://myg-media.com" className="text-cyan-400 hover:underline">
              MYG Media
            </a>
            . I specialize in AI automation, web development, and building digital solutions 
            that drive real business growth.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono text-sm"
            >
              View My Work
            </a>
            <a
              href="mailto:maximgagiev@myg-media.com"
              className="px-6 py-3 bg-cyan-400 text-zinc-950 rounded hover:bg-cyan-300 transition-colors font-mono text-sm font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-zinc-500 mt-2 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 px-6 md:px-12 lg:px-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-400 font-mono text-xl">01.</span> Featured Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-xl border border-zinc-800 hover:border-cyan-400/50 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover-lift"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mt-2 max-w-xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-400 font-mono text-xl">02.</span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-zinc-700 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-400 font-mono text-xl">03.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I started my journey in software at 17 and founded MYG Media at 18. 
                Within 6 months, we grew to €300K+ in revenue serving 112+ clients 
                across the DACH region.
              </p>
              <p>
                My focus is on AI automation and building tools that give businesses 
                a competitive edge. I've been using AI daily since GPT-3.5 and specialize 
                in context engineering, RAG systems, and workflow automation.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, trading markets, 
                or planning the next venture.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <h3 className="font-bold text-lg mb-2">MYG Media</h3>
                <p className="text-zinc-400 text-sm">Founder & CTO</p>
                <p className="text-zinc-500 text-sm mt-1">AI automation agency based in Vienna</p>
              </div>
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-zinc-400 text-sm">Vienna, Austria 🇦🇹</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-cyan-400 font-mono text-xl">04.</span> Get In Touch
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-8">
            I'm always open to interesting projects and collaborations. 
            Let's build something great together.
          </p>
          <a
            href="mailto:maximgagiev@myg-media.com"
            className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Grandillionaire" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href="https://myg-media.com" className="hover:text-cyan-400 transition-colors">
            MYG Media
          </a>
          <a href="mailto:maximgagiev@myg-media.com" className="hover:text-cyan-400 transition-colors">
            Email
          </a>
        </div>
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}
