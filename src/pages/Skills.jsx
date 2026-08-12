import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from 'gsap'
const skillsData = [
  {
    id: "01",
    title: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "STATE & DATA",
    skills: ["Redux Toolkit", "React Query", "REST APIs"],
  },
  {
    id: "03",
    title: "TOOLS",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {

  const [isOpen , setIsOpen] = useState(null);
  useEffect(()=>{
    gsap.from(".skills-item",{
      y:40,
      opacity:0,
      duration:0.8,
      stagger:0.15,
      ease:"power3.out"
    })
  },[])

  const handle = (val) => {
    setIsOpen(isOpen === val ? null : val);
  };

  return (
    <div className="h-screen bg-[#F8F5F0] px-6 py-20 text-[#1C1C1C] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">


        <div className="mb-12">
          <p className="text-sm tracking-[0.2em] uppercase">
            02 / Skills
          </p>
        </div>

      
        <div className="border-t border-black/20">
          {skillsData.map((item, val) => {
            const open = isOpen === val;

            return (
              <div key={item.id} className=" skills-item border-b border-black/20" >
                
                <button  onClick={() => handle(val)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-black/40">
                      {item.id}
                    </span>

                    <h3 className="text-lg font-medium tracking-wide sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  {open ? (
                    <Minus size={20} strokeWidth={1.5} />
                  ) : (
                    <Plus size={20} strokeWidth={1.5} />
                  )}
                </button>

                {open && (
                  <div className="grid grid-cols-2 gap-y-4 pb-7 pl-12 sm:grid-cols-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-black/60 sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;