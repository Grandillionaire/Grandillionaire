const projects = [
  {
    title: 'OpenBuild',
    description: 'Open-source website builder with visual editor and AI generation',
    year: '2024',
    link: 'https://github.com/Grandillionaire/openbuild',
  },
  {
    title: 'BrainVault',
    description: 'Local-first note-taking with graph view and semantic search',
    year: '2024',
    link: 'https://github.com/Grandillionaire/brainvault',
  },
  {
    title: 'Code Translator',
    description: 'AI-powered code translation across 10+ languages',
    year: '2024',
    link: 'https://github.com/Grandillionaire/code-translator',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <a href="/" className="text-lg tracking-tight">Maxim Gagiev</a>
          <div className="flex gap-8 text-sm text-[var(--text-muted)]">
            <a href="#work" className="hover:text-[var(--text)] transition-colors">Work</a>
            <a href="#about" className="hover:text-[var(--text)] transition-colors">About</a>
            <a href="mailto:maximgagiev@myg-media.com" className="hover:text-[var(--text)] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto w-full pt-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight">
            Full-Stack Developer<br />
            <span className="text-[var(--text-muted)]">& Founder</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-[var(--text-muted)] max-w-xl leading-relaxed">
            Building digital solutions that drive business growth. 
            Founder of MYG Media.
          </p>
          <div className="mt-12 flex gap-12 text-sm">
            <div>
              <div className="text-3xl md:text-4xl font-normal">€300K+</div>
              <div className="text-[var(--text-muted)] mt-1">Revenue</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-normal">112</div>
              <div className="text-[var(--text-muted)] mt-1">Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-normal">2023</div>
              <div className="text-[var(--text-muted)] mt-1">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-12">Selected Work</h2>
          <div className="space-y-0">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-b border-[var(--border)] hover:pl-4 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-normal group-hover:text-[var(--text-muted)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-muted)] mt-2">{project.description}</p>
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">{project.year}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg leading-relaxed text-[var(--text-muted)]">
              <p>
                I started building software at 17 and founded MYG Media at 18. 
                Within six months, we grew to €300K+ in revenue serving over 
                100 clients across the DACH region.
              </p>
              <p>
                My focus is on AI automation and building tools that give 
                businesses a competitive edge. I've been working with AI daily 
                since GPT-3.5.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-4">Expertise</h3>
                <p className="text-lg">
                  React, Next.js, TypeScript, Python, FastAPI, 
                  Node.js, PostgreSQL, AI/ML, LangChain
                </p>
              </div>
              <div>
                <h3 className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-4">Location</h3>
                <p className="text-lg">Vienna, Austria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-12">Contact</h2>
          <a 
            href="mailto:maximgagiev@myg-media.com"
            className="text-3xl md:text-4xl lg:text-5xl font-normal hover:text-[var(--text-muted)] transition-colors"
          >
            maximgagiev@myg-media.com
          </a>
          <div className="mt-12 flex gap-8 text-sm text-[var(--text-muted)]">
            <a href="https://github.com/Grandillionaire" className="hover:text-[var(--text)] transition-colors">
              GitHub
            </a>
            <a href="https://myg-media.com" className="hover:text-[var(--text)] transition-colors">
              MYG Media
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-[var(--text-muted)]">
          <span>© 2024 Maxim Gagiev</span>
          <span>Vienna, Austria</span>
        </div>
      </footer>
    </main>
  )
}
