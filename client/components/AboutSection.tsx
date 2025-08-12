export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-start bg-white max-w-[1440px] w-full relative px-20 pt-0 pb-24 gap-16">
      <div className="flex flex-col items-end justify-start max-w-full w-full overflow-hidden relative gap-2.5">
        
        {/* Images Container */}
        <div className="flex items-center justify-center h-min overflow-hidden relative w-[682px] gap-2.5">
          <div className="relative flex-grow flex-shrink-0 h-[585px] w-px">
            
            {/* Background Image */}
            <div className="flex items-center justify-center rounded-2xl absolute bottom-0 right-0 h-[200px] w-[351px] overflow-hidden gap-2.5">
              <div className="contents">
                <div className="absolute left-[-0.126582%] top-[-10%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[163.75px]">
                  <div className="absolute bottom-0 left-0 right-0 top-0" />
                </div>
              </div>
            </div>

            {/* White Background Card */}
            <div className="bg-white rounded-[28px] absolute left-[-20px] top-[170px] h-[294px] w-[308px] overflow-hidden z-2">
              <div className="flex items-center justify-center rounded-2xl absolute left-1/2 top-1/2 transform -translate-x-[134px] -translate-y-[128px] h-64 w-[268px] overflow-hidden gap-2.5">
                <div className="contents">
                  <div className="rounded-3xl absolute left-0 top-[-9.96094%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[173.825px]">
                    <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Large Image */}
            <div className="flex items-center justify-center rounded-2xl absolute right-0 top-0 h-[365px] w-[550px] overflow-hidden gap-2.5">
              <div className="contents">
                <div className="rounded-3xl absolute left-0 top-[-9.87952%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[183.802px]">
                  <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Heading */}
        <div className="flex flex-col items-start justify-start absolute left-0 top-[30px] w-[570px] z-1 gap-3">
          <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
            <h2 className="text-[#030712] font-general-sans text-5xl font-medium leading-[67.2px] overflow-wrap-anywhere whitespace-pre-wrap">
              The Art of Coffee
            </h2>
          </div>
        </div>


        {/* Bottom Text */}
        <div className="flex flex-col items-end justify-start absolute bottom-6 left-0 max-w-[820px] w-[812px] z-1">
          <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap" />
        </div>
      </div>
    </section>
  );
}
