import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techs, repoLink }) => {
  return (
    <a
      href={repoLink}
      className="block w-full h-[200px] bg-zinc-800 text-white rounded-lg shadow-lg overflow-hidden hover:bg-zinc-700 transition duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="flex-1 mb-4 text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 text-gray-400">
          {techs.map((tech, index) => (
            <span key={index} className="bg-zinc-600 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <FaGithub size={24} className="text-gray-400" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
