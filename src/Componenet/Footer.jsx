import React from 'react'

const Footer = () => {
  return (
    
      <footer className="bg-[#F8F5F0] text-[#1C1C1C]">
      
      <div className='mx-auto  max-w-7xl  border-t border-[#1C1C1C]/15 px-6 py-8' >

        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between ' >


          <div >
            <h2  className="text-xl font-semibold tracking-tight">
              SHRUTI KESHARWANI
            </h2>

            <p className='mt-2 text-sm text-[#6B6B6B]'>
              FULL STACK DEVELOPER
            </p>
          </div>

          
          <div className='flex flex-col gap-4 md-items-end' >

            <div className='flex text-sm gap-7' >
              <a  href="https://github.com/kesharwanishruti2" target="_blank" rel="noreferrer"
                className="transition-colors hover:text-[#B58B63]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-kesharwani-546008372/"
            target="_blank"
                className="transition-colors hover:text-[#B58B63]"
              >
                LinkedIn ↗
              </a>

              <a
                  href="mailto:kesharwanishruti23@gmail.com"
                className="transition-colors hover:text-[#B58B63]"
              >
                Email ↗
              </a>
            </div>

            <p className="text-xs text-[#6B6B6B]">
              © 2026 SHRUTI KESHARWANI
            </p>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer
