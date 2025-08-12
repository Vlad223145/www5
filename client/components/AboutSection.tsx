export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-start bg-white max-w-[1440px] w-full relative px-20 pt-0 pb-24 gap-16">
      <div className="flex flex-col items-end justify-start max-w-full w-full overflow-hidden relative gap-2.5">
        
        {/* Images Container */}
        <div className="flex items-center justify-center h-min overflow-hidden relative w-[682px] gap-2.5" />

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
