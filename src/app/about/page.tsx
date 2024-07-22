import { Navigation } from "../components/nav";
import React from "react";
import { WorkExperienceCard } from "./_components/work-experience-card";
import { summary, workExperiences } from "./_lib/contants";

export default function AboutMe() {
  return (
    <main>
      <Navigation />

      <div className="p-4 pt-20 flex flex-col justify-center w-screen">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Summary</h2>
          <div className="pl-8 pr-8">
            <p className=" bg-zinc-800 text-white rounded-lg shadow-lg p-6 mb-6 text-lg">{summary}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
          <div className="space-y-6 pl-8 pr-8">
            {workExperiences.map((experience, index) => (
              <WorkExperienceCard
                key={index}
                companyName={experience.companyName}
                startDate={experience.startDate}
                endDate={experience.endDate}
                role={experience.role}
                description={experience.description}
                techStack={experience.techStack}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
