const projects = [
  {
    title: 'OpenBuild',
    category: 'Web Application',
    description: 'Visual website builder with AI-powered component generation',
    link: 'https://github.com/Grandillionaire/openbuild',
  },
  {
    title: 'BrainVault',
    category: 'Productivity',
    description: 'Note-taking reimagined with graph visualization',
    link: 'https://github.com/Grandillionaire/brainvault',
  },
  {
    title: 'Code Translator',
    category: 'Developer Tool',
    description: 'Seamless code translation across languages',
    link: 'https://github.com/Grandillionaire/code-translator',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-8 flex justify-between items-center">
          <span className="text-white text-sm tracking-[0.2em] uppercase">MG</span>
          <div className="flex gap-6 sm:gap-10 text-white text-xs sm:text-sm tracking-[0.15em] uppercase">
            <a href="#work" className="link-hover">Work</a>
            <a href="#info" className="link-hover">Info</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8 fade-in">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-4 sm:mb-6">
                Full-Stack Developer & Founder
              </p>
              <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-[-0.02em]">
                Maxim
                <br />
                Gagiev
              </h1>
            </div>
            <div className="lg:col-span-4 fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-sm">
                Creating digital experiences that merge 
                technical precision with thoughtful design.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-neutral-300 fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-light">112</div>
              <div className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-500 mt-1 sm:mt-2">Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-light">€300K</div>
              <div className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-500 mt-1 sm:mt-2">Revenue</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-light">2023</div>
              <div className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-neutral-500 mt-1 sm:mt-2">Founded</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-px h-16 bg-neutral-300 mx-auto"></div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 sm:py-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-20 gap-4">
            <h2 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500">
              Selected Projects
            </h2>
            <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500">
              03 Works
            </span>
          </div>
          
          <div className="space-y-1">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6 sm:py-10 border-b border-neutral-200 hover:border-neutral-400 transition-colors"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start sm:items-center">
                  <div className="sm:col-span-1 text-xs sm:text-sm text-neutral-400 font-light">
                    0{i + 1}
                  </div>
                  <div className="sm:col-span-5">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-3 text-neutral-500 text-sm sm:text-base">
                    {project.description}
                  </div>
                  <div className="sm:col-span-2 text-xs sm:text-sm text-neutral-400 tracking-[0.1em] uppercase">
                    {project.category}
                  </div>
                  <div className="sm:col-span-1 flex justify-start sm:justify-end">
                    <span className="text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section id="info" className="py-20 sm:py-32 px-5 sm:px-8 bg-[#1a1a1a] text-[#f8f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h2 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-6 sm:mb-10">
                About
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
                I build software that solves real problems. Started at 17, 
                founded MYG Media at 18, and haven't stopped shipping since.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-4 sm:mb-6">
                  Expertise
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Python & FastAPI</li>
                  <li>AI Integration</li>
                  <li>System Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500 mb-4 sm:mb-6">
                  Connect
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li>
                    <a href="mailto:maximgagiev@myg-media.com" className="link-hover">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Grandillionaire" className="link-hover">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://myg-media.com" className="link-hover">
                      MYG Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-5 sm:px-8 bg-[#1a1a1a] text-[#f8f7f4] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-[0.15em] uppercase text-neutral-500">
          <span>© 2024</span>
          <span>Vienna, Austria</span>
        </div>
      </footer>
    </main>
  )
}
