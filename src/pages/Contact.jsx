import React, { useEffect, useRef } from 'react'
import ContactCard from '../Card/ContactCard';
import { Mail } from 'lucide-react';
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import gsap from "gsap"
const contactData = [
  {
    id: 1,
    icon: <Mail/>,
    label: "EMAIL",
    value: "kesharwanishruti23@gmail.com",
    href: "mailto:kesharwanishruti23@gmail.com",
  },
  {
    id: 2,
    icon: <RiGithubFill size={24} />,
    label: "GITHUB",
    value: "github.com/kesharwanishruti2",
    href: "https://github.com/kesharwanishruti2",
  },
  {
    id: 3,
    icon:<RiLinkedinFill size={24} />,
    label: "LINKEDIN",
    value: "linkedin.com/in/shruti-kesharwani",
    href: "https://www.linkedin.com/in/shruti-kesharwani-546008372/",
  },
];
const Contact = () => {
 const contactRef = useRef(null);

useEffect(() => {
  const items = contactRef.current.querySelectorAll(".contact-item");

  gsap.fromTo(
    items,
    {
      opacity: 0,
      y: 40,
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
       <div
  
  className="min-h-screen bg-[#F8F5F0] px-6 py-20 text-[#1C1C1C] sm:px-8 lg:px-12 lg:py-28"
>
  <div  ref={contactRef} className=" mx-auto max-w-7xl">

    <p className="contact-item mb-4 text-sm font-medium tracking-[0.2em] text-[#B58B63]">
      04. GET IN TOUCH
    </p>

    <h2 className="contact-item max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
      Let's Build Something Together
    </h2>

    <p className="contact-item mt-6 max-w-xl text-base leading-7 text-[#6B6B6B] sm:text-lg">
      Have a project in mind or want to connect?
      I'd love to hear from you.
    </p>

    <div className=" contact-item mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contactData.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>

  </div>
</div>
  )
}

export default Contact
