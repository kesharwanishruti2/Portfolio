import React from 'react'

const ContactCard = ({contact}) => {
  return (
  <div>
  <a
    href={contact.href}
    target={contact.type === "external" ? "_blank" : undefined}
    rel={contact.type === "external" ? "noreferrer" : undefined}
    className="group flex items-center justify-between border border-[#1C1C1C]/15 bg-[#F8F5F0] p-6 transition-colors hover:border-[#B58B63]"
  >
    <div className="flex items-center gap-4">

      <div className="text-2xl text-[#B58B63]">
        {contact.icon}
      </div>

      <div>
        <p className="text-xs font-medium tracking-[0.15em] text-[#6B6B6B]">
          {contact.label}
        </p>

        <p className="mt-1 text-sm font-medium text-[#1C1C1C]">
          {contact.value}
        </p>
      </div>

    </div>

    <span className="text-lg text-[#1C1C1C] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
      ↗
    </span>
  </a>
</div>
  )
}

export default ContactCard
