export default function GallerySection() {
  return (
    <section className="flex flex-col items-start justify-start max-w-[1440px] w-full px-20 pt-0 pb-24 relative gap-6">
      
      {/* First Row */}
      <main className="flex items-end justify-start rounded-[48px] w-full h-min relative gap-6 z-2">
        
        {/* Large Left Image */}
        <div className="flex items-center justify-center rounded-2xl flex-grow-[2] h-[462px] overflow-hidden relative gap-2.5">
          <div className="contents">
            <div className="absolute left-0 top-[-10%] h-[120%] w-full will-change-transform z-1 transform translate-y-[38.8383px]">
              <div className="absolute bottom-0 left-0 right-0 top-0">
                <img 
                  decoding="async" 
                  loading="lazy" 
                  alt="" 
                  src="https://framerusercontent.com/images/uC0PKvJbheUO4woZEwZ18YXpQ.jpg?scale-down-to=2048" 
                  className="h-full w-full object-cover overflow-clip"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Small Right Image */}
        <div className="flex items-center justify-center rounded-2xl flex-grow h-64 overflow-hidden relative gap-2.5">
          <div className="contents">
            <div className="absolute left-0 top-[-10%] h-[120%] w-full will-change-transform z-1 transform translate-y-[27.5086px]">
              <div className="absolute bottom-0 left-0 right-0 top-0">
                <img 
                  decoding="async" 
                  loading="lazy" 
                  alt="" 
                  src="https://framerusercontent.com/images/F8owk0sZXWggMOcNWSW7peBp8.jpg?scale-down-to=1024" 
                  className="h-full w-full object-cover overflow-clip"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Second Row */}
      <main className="flex items-end justify-start rounded-[48px] w-full h-min relative gap-6 z-2">
        
        {/* Three Equal Images */}
        <div className="flex items-center justify-center flex-grow-[2] h-[360px] overflow-hidden relative gap-6">
          
          {/* Left Image */}
          <div className="flex items-center justify-center rounded-2xl flex-grow h-[360px] overflow-hidden relative gap-2.5">
            <div className="contents">
              <div className="absolute left-0 top-[-10%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[14.0289px]">
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  <img 
                    decoding="async" 
                    loading="lazy" 
                    alt="" 
                    src="https://framerusercontent.com/images/CzPx5RHtdFz8DtzKdaQt0FuDng.jpg?scale-down-to=1024" 
                    className="h-full w-full object-cover overflow-clip"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center rounded-2xl flex-grow h-[360px] overflow-hidden relative gap-2.5">
            <div className="contents">
              <div className="absolute left-0 top-[-10%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[14.0289px]">
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  <img 
                    decoding="async" 
                    loading="lazy" 
                    alt="" 
                    src="https://framerusercontent.com/images/435MwbU37metpDh4uygrXMPMwA.jpg?scale-down-to=1024" 
                    className="h-full w-full object-cover overflow-clip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center rounded-2xl flex-grow h-[360px] overflow-hidden relative gap-2.5">
          <div className="contents">
            <div className="absolute left-0 top-[-10%] h-[120%] w-full overflow-hidden will-change-transform z-1 transform translate-y-[14.0289px]">
              <div className="absolute bottom-0 left-0 right-0 top-0">
                <img 
                  decoding="async" 
                  loading="lazy" 
                  alt="" 
                  src="https://framerusercontent.com/images/AMryXm59J1Ova52TRifNC9ajXY.jpg?scale-down-to=1024" 
                  className="h-full w-full object-cover overflow-clip"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
