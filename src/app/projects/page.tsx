import { Navigation } from "../components/nav";
import ProjectCard from "../components/project-card";

const projects = [
  {
    title: 'go-ironn-be',
    repoLink: 'https://github.com/ch3b/go-ironn-be',
    description: 'API to log workouts and excercises',
    techs: ['GO', 'PostgreSQL']
  },
  {
    title: 'ch3b-clash-api',
    repoLink: 'https://github.com/ch3b/ch3b-clash-api',
    description: 'API to fetch and store data for a Clash of Clans user',
    techs: ['GO']
  },
  {
    title: 'ch3b-website',
    repoLink: 'https://github.com/ch3b/ch3b-website',
    description: 'Source code for this webpage',
    techs: ['NextJS', 'React', 'Typescript']
  }
];


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
