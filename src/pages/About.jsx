import React, { useEffect } from "react";
import gsap from 'gsap'

const About = () => {

  useEffect(()=>{
      const t1 = gsap.timeline();

      t1.from(".about-label",{
        
        y:20,
        opacity: 0,
        duration : 0.8
      
      }).from(".about-title",{
     y:40,
     opacity:0,
     duration:0.8
      }).from(".about-content",{
         y: 25,
      opacity: 0,
      duration: 0.6,
      }) .from(".about-image", {
      x: 30,
      opacity: 0,
      duration: 0.7,
    }, "-=0.5");

  })
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1C1C1C]">

      
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <p className="about-label mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#B58B63]">
          01 / About Me
        </p>

      
        <h1 className="about-title max-w-5xl text-5xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
          I'm Shruti.
          <br />
          I build things for the web.
        </h1>
        
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">

      
          <div className="about-image">
            <div className="relative mx-auto w-full h-[490px] max-w-md overflow-hidden bg-[#EFE7DD] lg:mx-0">
              <img
                src="/2ndjpg.jpeg"
                alt="Shruti Kesharwani"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
       
         <div className="about-content flex flex-col justify-center">

        <p className="text-xl leading-8 text-[#1C1C1C] sm:text-2xl">
          I'm a BSc IT student with a strong interest in web development
          and building modern web applications.
        </p>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#6B6B6B] sm:text-lg sm:leading-8">
          I work with technologies like React, JavaScript, Tailwind CSS,
          Node.js, and REST APIs to build responsive and functional
          applications.
        </p>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#6B6B6B] sm:text-lg sm:leading-8">
          I enjoy turning ideas into practical projects and continuously
          improving my skills by building and experimenting with different
          technologies.
        </p>

      </div>

        </div>
      </div>


    


    </div>
  );
};

export default About;