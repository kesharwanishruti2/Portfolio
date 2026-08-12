import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import gsap from 'gsap'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
  gsap.from(".navbar-logo", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".navbar-links a", {
    y: -15,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  });
}, []);





    
    return (
    <nav className="bg-[#EFE9E1] text-[#1C1C1C]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        < NavLink to='/'
          className=" navbar-logo font-semibold tracking-tight"
        >
          SHRUTI KESHARWANI
        </NavLink>

        <div className="navbar-links hidden items-center gap-8 md:flex">
   <NavLink to="/"    className={({ isActive }) =>  `relative inline-block pb-1
  after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:bg-[#1C1C1C] after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`
  }  >HOME</NavLink>
          <NavLink to="/about"   className={({ isActive }) =>
    `relative inline-block pb-1
    after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:bg-[#1C1C1C] after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`
  } >ABOUT</NavLink>
         <NavLink to="/skills"  className={({ isActive }) =>
    `relative inline-block pb-1
    after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:bg-[#1C1C1C] after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`
  }>SKILLS</NavLink>
         <NavLink to="/projects"   className={({ isActive }) =>
    `relative inline-block pb-1
    after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:bg-[#1C1C1C] after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`
  }>WORK</NavLink>
  
          <NavLink to='/contact'   className={({ isActive }) =>
    `relative inline-block pb-1
    after:absolute after:bottom-0 after:left-0 after:h-[1px]
    after:bg-[#1C1C1C] after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`
  }
         
          > CONTACT <span>↗</span>
          </NavLink>
        </div>
      <button className="md:hidden"
       onClick={()=>{
        setIsOpen(!isOpen)
      }}
       >    {isOpen ? "✕" :<Menu /> }</button>
       {isOpen &&(
        <div  className="absolute top-20 left-0 w-full bg-[#F8F5F0] flex flex-col items-center gap-6 py-8 md:hidden">
             <NavLink to="/about">ABOUT</NavLink>
         <NavLink to="/skills">Skills</NavLink>
         <NavLink to="/projects">WORK</NavLink>
          <NavLink to="/journey">Journey</NavLink>
          <NavLink to='/contact'
           className="flex items-center gap-1"
          > CONTACT <span>↗</span>
          </NavLink>
        </div>
       )}
      </div>
    </nav>
  );
};


export default Navbar
