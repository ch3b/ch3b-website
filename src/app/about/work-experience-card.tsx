interface WorkExperienceCardProps {
    companyName: string;
    startDate: string;
    endDate: string;
    role: string;
    description: React.ReactNode;
    techStack: string[];
  }

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ companyName, startDate, endDate, role, description, techStack }) => {
    return (
      <div className="bg-zinc-800 text-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">{companyName}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {startDate} - {endDate}
        </p>
        <h4 className="text-lg font-medium mb-2">{role}</h4>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-zinc-600 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };