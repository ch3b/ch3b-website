import { Navigation } from "../components/nav";
import ProjectCard from "./_components/project-card";
import { projects } from "./_lib/constants";

export default function Projects() {
  return (
    <main>
      <Navigation /> 

      <div className="p-4 flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              repoLink={project.repoLink}
              description={project.description}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
