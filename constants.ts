import { Project, SkillData } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Futurológico",
    description: "Uma plataforma de vendas next-gen com renderização 3D de produtos e checkout instantâneo via Pix.",
    tags: ["React", "Three.js", "Node.js", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Dashboard Analítico AI",
    description: "Sistema de gerenciamento de dados que utiliza Machine Learning para prever tendências de mercado.",
    tags: ["Python", "TensorFlow", "Next.js", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "App Social 'Connect'",
    description: "Rede social focada em comunidades de nicho com chat em tempo real criptografado.",
    tags: ["React Native", "Firebase", "TypeScript"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "SaaS de Automação",
    description: "Ferramenta B2B para automação de fluxos de trabalho corporativos.",
    tags: ["Vue.js", "Golang", "Docker", "AWS"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#",
    github: "#"
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'React/Next', A: 120, fullMark: 150 },
  { subject: 'TypeScript', A: 98, fullMark: 150 },
  { subject: 'Node.js', A: 86, fullMark: 150 },
  { subject: 'UI/UX Design', A: 99, fullMark: 150 },
  { subject: 'DevOps', A: 85, fullMark: 150 },
  { subject: 'AI/LLM', A: 65, fullMark: 150 },
];

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];