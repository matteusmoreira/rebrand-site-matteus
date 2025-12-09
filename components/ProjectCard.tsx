import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div 
      className="group relative rounded-2xl overflow-hidden glass-panel hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-800 text-indigo-300 border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
            <Github size={16} /> Code
          </a>
          <a href={project.link} className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;