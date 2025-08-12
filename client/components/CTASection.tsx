export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-start bg-white w-full px-20 pt-0 pb-16 relative">
      
      {/* Background */}
      <div className="bg-[#121212] absolute bottom-0 left-0 h-[432px] w-full overflow-hidden z-1"></div>

      {/* Content Container */}
      <div className="flex flex-col items-start justify-start max-w-[1280px] w-full h-[562px] relative z-1 gap-8">
        
        {/* Main Content Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl h-full w-full overflow-hidden px-16 pt-[120px] pb-[120px] relative gap-8"
             style={{
               backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)",
               boxShadow: "rgba(16, 24, 40, 0.03) 0px 8px -4px, rgba(16, 24, 40, 0.08) 0px 20px 24px -4px"
             }}>
          
          {/* Background Image */}
          <div className="contents">
            <div className="absolute left-0 top-[-9.96094%] h-[120%] w-full z-1">
              <div className="absolute bottom-0 left-0 right-0 top-0">
                <img 
                  decoding="async" 
                  loading="lazy" 
                  alt="" 
                  src="https://framerusercontent.com/images/FQoCJa1vVdTz6Wn1bhDAwTGCg.jpg?scale-down-to=2048" 
                  className="h-full w-full object-cover overflow-clip"
                />
              </div>
              <div className="absolute left-0 top-0 h-full w-full overflow-hidden"
                   style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)"}}>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative h-[52px] flex-shrink-0">
            <div className="contents">
              <span className="cursor-pointer flex items-center justify-start h-full overflow-hidden pb-[15px] pr-2 pt-[15px] relative w-min gap-3">
                <div className="cursor-pointer flex flex-col justify-start relative text-nowrap z-3">
                  <p className="cursor-pointer text-[#F5F5F5] font-general-sans text-lg font-medium leading-[21.6px] whitespace-pre">
                    BOOK A TABLE
                  </p>
                </div>
                
                <div className="cursor-pointer flex flex-col items-center justify-center aspect-square bg-[#FAFAFA] rounded-full relative w-9 z-2 gap-2.5">
                  <div className="cursor-pointer aspect-square bg-[#FBFBFB] rounded-full left-1/2 top-1/2 overflow-hidden absolute w-1.5 z-1 transform -translate-x-1.5 -translate-y-1.5"></div>
                  <div className="cursor-pointer h-6 left-1/2 top-1/2 opacity-100 absolute w-6 z-1 transform -translate-x-3 -translate-y-3">
                    <div className="cursor-pointer contents">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(34, 34, 34)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer inline fill-none h-6 overflow-clip w-6">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
