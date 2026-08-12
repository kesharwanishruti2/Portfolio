import React, { useEffect } from 'react'
import { NavLink } from 'react-router';
import Resume from "../pages/resume"
import gsap from 'gsap';
const Hero = () => {
  useEffect(() => {
  const tl = gsap.timeline();

  tl.from(".hero-name", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out",
  })
  .from(
    ".hero-buttons",
    {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".hero-image",
    {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  );
}, []);
  return (
<section

  className="min-h-[calc(100vh-80px)] bg-[#F8F5F0] text-[#1C1C1C]"
>
  <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">


    <div className="w-full">

      
      <p className="hero-intro mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#B58B63] sm:text-base">
        Hello, I'm
      </p>


      <h1 className="hero-name text-6xl font-normal leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
        Shruti
        <br />
        Kesharwani
      </h1>

    
      <div className="hero-content mt-10 max-w-3xl">
        <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
          I BUILD DIGITAL
          <br className="hidden sm:block" />
          EXPERIENCES.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B6B6B] sm:text-lg sm:leading-8">
          I turn ideas into digital experiences that are simple to
          understand, easy to use, and built to work.
        </p>
      </div>

    
      <div className="hero-buttons mt-9 flex flex-col gap-4 sm:flex-row">

        <NavLink
          to="/projects"
          className="inline-flex w-fit items-center justify-center bg-[#1C1C1C] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#F8F5F0] transition duration-300 hover:bg-[#B58B63]"
        >
          View My Work
        </NavLink>

        <NavLink
          to="/resume"
        
          className="inline-flex w-fit items-center justify-center border border-[#1C1C1C] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#1C1C1C] transition duration-300 hover:bg-[#E8DDD0]"
        >
          Resume ↗
        </NavLink>

      </div>

     
 <NavLink
  to="/about"
  className="group mt-16 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#6B6B6B] transition duration-300 hover:text-[#B58B63]"
>
  <span>Scroll to explore</span>

  <span className="text-lg transition-transform duration-300 group-hover:translate-y-1">
    ↓
  </span>
</NavLink>

    </div>

   
   <div className="hero-image flex justify-center lg:justify-end">
  <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-[#D8CFC4] bg-[#EFE7DD] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]">
    <img
      src="/final.jpeg"
      alt="Shruti Kesharwani"
      className="h-full w-full object-cover "
    />
  </div>
</div>
  </div>
</section>

  );
}

export default Hero
