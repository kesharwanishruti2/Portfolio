import React from 'react'

const Loader = () => {
  return (
   <div className="flex min-h-screen items-center justify-center bg-[#F8F5F0]">
      <div className="flex gap-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#1C1C1C]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#1C1C1C] [animation-delay:0.15s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#1C1C1C] [animation-delay:0.3s]"></div>
      </div>
</div>
  );
  
}

export default Loader
