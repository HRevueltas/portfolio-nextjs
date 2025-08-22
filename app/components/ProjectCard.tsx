'use client';

import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl?: string;
  techStack: string[];
  links: {
    code?: string;
    demo?: string;
    docs?: string;
    download?: string;
  };
  color: 'blue' | 'green' | 'teal' | 'amber' | 'purple' | 'red';
  icon: React.ReactNode;
}

const colorVariants = {
  blue: {
    bg: 'bg-blue-3',
    hoverBg: 'group-hover:bg-blue-4',
    text: 'text-blue-11',
    border: 'hover:border-[var(--color-blue-7)]',
    shadow: 'hover:shadow-blue-4/20',
    tag: 'bg-blue-2 text-blue-11'
  },
  green: {
    bg: 'bg-green-3',
    hoverBg: 'group-hover:bg-green-4',
    text: 'text-green-11',
    border: 'hover:border-[var(--color-green-7)]',
    shadow: 'hover:shadow-green-4/20',
    tag: 'bg-green-2 text-green-11'
  },
  teal: {
    bg: 'bg-teal-3',
    hoverBg: 'group-hover:bg-teal-4',
    text: 'text-teal-11',
    border: 'hover:border-[var(--color-teal-7)]',
    shadow: 'hover:shadow-teal-4/20',
    tag: 'bg-teal-2 text-teal-11'
  },
  amber: {
    bg: 'bg-amber-3',
    hoverBg: 'group-hover:bg-amber-4',
    text: 'text-amber-11',
    border: 'hover:border-[var(--color-amber-7)]',
    shadow: 'hover:shadow-amber-4/20',
    tag: 'bg-amber-2 text-amber-11'
  },
  purple: {
    bg: 'bg-purple-3',
    hoverBg: 'group-hover:bg-purple-4',
    text: 'text-purple-11',
    border: 'hover:border-[var(--color-purple-7)]',
    shadow: 'hover:shadow-purple-4/20',
    tag: 'bg-purple-2 text-purple-11'
  },
  red: {
    bg: 'bg-red-3',
    hoverBg: 'group-hover:bg-red-4',
    text: 'text-red-11',
    border: 'hover:border-[var(--color-red-7)]',
    shadow: 'hover:shadow-red-4/20',
    tag: 'bg-red-2 text-red-11'
  }
};

export default function ProjectCard({
  title,
  description,
  fullDescription,
  imageUrl,
  techStack,
  links,
  color,
  icon
}: ProjectCardProps) {
  const [showMore, setShowMore] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const colorClasses = colorVariants[color];
  const hasFullDescription = fullDescription && fullDescription !== description;
  
  return (
    <div className={`group relative bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] rounded-xl overflow-hidden ${colorClasses.border} transition-all duration-300 hover:shadow-lg ${colorClasses.shadow} h-[420px] flex flex-col`}>
      {/* Image Preview */}
      <div className="relative h-40 bg-[var(--color-gray-3)] overflow-hidden">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-3 to-gray-4">
            <div className={`flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-xl ${colorClasses.hoverBg} transition-colors`}>
              <div className={`w-8 h-8 ${colorClasses.text}`}>
                {icon}
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-18 font-600 text-[var(--color-high-contrast)] mb-3 line-clamp-1">
          {title}
        </h3>
        
        {/* Description */}
        <div className="flex-1 mb-4">
          <p className="text-14 text-gray-11 leading-relaxed">
            {showMore && hasFullDescription ? fullDescription : description}
          </p>
          
          {hasFullDescription && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-13 text-blue-11 hover:text-blue-12 font-500 mt-2 transition-colors"
            >
              {showMore ? 'Ver menos' : 'Ver más...'}
            </button>
          )}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4 max-h-16 overflow-hidden">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-3 text-gray-11 text-11 font-500 rounded-md whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-2 py-1 bg-gray-4 text-gray-10 text-11 font-500 rounded-md">
              +{techStack.length - 4}
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {links.code && (
            <a
              href={links.code}
              className="text-blue-11 hover:text-blue-12 text-13 font-500 flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          
          {links.demo && (
            <a
              href={links.demo}
              className="text-green-11 hover:text-green-12 text-13 font-500 flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
          
          {links.docs && (
            <a
              href={links.docs}
              className="text-amber-11 hover:text-amber-12 text-13 font-500 flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Docs
            </a>
          )}
          
          {links.download && (
            <a
              href={links.download}
              className="text-teal-11 hover:text-teal-12 text-13 font-500 flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
