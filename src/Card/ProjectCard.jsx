import React from "react";



const ProjectCard = ({ project }) => {
  return (
    <div className=" project-card group border border-[#1C1C1C]/20 bg-[#F8F5F0]">
      
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-[#EFE7DD]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">

        {/* Title + Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1C1C1C]/65 sm:text-base">
            {project.description}
          </p>
        </div>

        {/* What I Built */}
        <div className="border-t border-[#1C1C1C]/15 pt-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]">
            What I Built
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {project.built.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-6 text-[#1C1C1C]/75"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1C1C1C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 border-t border-[#1C1C1C]/15 pt-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-[#1C1C1C]/20 px-3 py-1.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="border border-[#1C1C1C] px-5 py-2.5 text-sm transition hover:bg-[#1C1C1C] hover:text-[#F8F5F0]"
          >
            Live Preview ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-[#1C1C1C]/30 px-5 py-2.5 text-sm transition hover:border-[#1C1C1C]"
          >
            GitHub ↗
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard