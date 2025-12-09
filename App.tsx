import React, { useState, useEffect } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import {
  Menu, X
} from 'lucide-react';
import AIChatbot from './components/AIChatbot';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import Hero from './components/Hero';
import { PROJECTS, SKILLS_DATA, NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-indigo-500 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            matteus<span className="text-indigo-500">.moreira</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-500/30">
              Contrate-me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-slate-700 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle title="Quem sou eu" subtitle="SOBRE" />

          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-slate-300 text-center font-light">
              Sou o <span className="font-bold text-white">Matteus</span>, um apaixonado por tecnologia que acredita que o código é uma forma de arte. Com <span className="text-indigo-400">6 anos de experiência</span>, já liderei projetos que impactaram milhares de usuários. Meu foco não é apenas escrever linhas de código, mas resolver problemas complexos com elegância e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section (Data Viz) */}
      <section id="skills" className="py-24 bg-slate-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Tech Stack" subtitle="HABILIDADES" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] w-full flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#818cf8"
                    strokeWidth={3}
                    fill="#6366f1"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Domínio Tecnológico</h3>
              <p className="text-slate-400">
                Minha expertise se concentra no ecossistema JavaScript moderno, mas minha curiosidade me leva a explorar constantemente novas fronteiras como IA e Arquitetura de Microsserviços.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['React', 'Next.js', 'Node.js', 'Tailwind', 'GraphQL', 'Docker'].map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Trabalhos Recentes" subtitle="PORTFÓLIO" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#" className="inline-block border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white px-8 py-3 rounded-full transition-all hover:bg-slate-800">
              Ver todos os projetos no GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-indigo-950/20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle title="Vamos Conversar?" subtitle="CONTATO" />

          <div className="glass-panel p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nome</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="seu@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Como posso ajudar no seu projeto?"></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-indigo-500/25">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Matteus Moreira. Developed with React & Gemini AI.</p>
      </footer>

      {/* AI Assistant */}
      <AIChatbot />
    </div>
  );
};

export default App;