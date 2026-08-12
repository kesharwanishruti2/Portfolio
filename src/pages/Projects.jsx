import React, { useEffect, useRef } from 'react'
import ProjectCard from "../Card/ProjectCard"
import gsap from "gsap"

const projects = [
  {
    id: 1,
    title: "SKY MART",
    description:
      "A responsive e-commerce platform for browsing products and managing a shopping cart.",

    image: "/skymart.jpg",

    built: [
      "Built a product listing interface",
      "Integrated product data through an API",
      "Added product search and filtering",
      "Implemented cart functionality with quantity controls",
      "Created reusable product and UI components",
      "Designed responsive layouts for different screen sizes",
    ],

    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],

    live: "https://sky-mart-final.vercel.app/sigin",
    github: "https://github.com/kesharwanishruti2/skyMartFinal",
  },

  
   {
    id: 2,
    title: "PRODUCTIVITY DASHBOARD",
    description:
      "An all-in-one productivity workspace for organizing tasks, goals, planning and daily activities.",

    image: "/PRODUCTIVITY.jpg",

    built: [
      "Built a Todo section for task management",
      "Added Planner and Goals sections",
      "Integrated Pomodoro for focused work sessions",
      "Added Date & Time information",
      "Integrated weather data through an API",
      "Added dynamic background visuals",
    ],

    tech: [ "JavaScript", "CSS", "API","HTML"],

    live: "https://assignment9-gules.vercel.app/",
    github: "https://github.com/kesharwanishruti2/assignment9",
  },
];

const Projects = () => {
   const projectsRef = useRef(null);

  useEffect(() => {
    const cards = projectsRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <div className="bg-[#F8F5F0] px-6 py-20 text-[#1C1C1C] sm:px-8 lg:px-12 lg:py-28">
      
      <div className="mx-auto max-w-7xl  ">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Projects I’ve built
          </h2>
        </div>

      
        <div  ref={projectsRef} className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;