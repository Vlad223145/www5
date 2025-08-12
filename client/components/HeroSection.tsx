export default function HeroSection() {
  return (
    <main className="flex flex-col items-center justify-start relative w-full">
      <section className="flex flex-col items-center justify-start relative w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-1">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#121212] will-change-transform">
              <div className="absolute bottom-0 left-0 right-0 top-0"></div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 flex items-center justify-center h-[1305px] w-full overflow-hidden z-1 will-change-transform bg-black relative">

          {/* Video Background - Full Width */}
          <div className="absolute left-0 top-0 h-full w-full z-1">
            <video
              src="https://framerusercontent.com/assets/6JUyfwxvOddcXNeDxRlAN4U.mp4"
              loop
              preload="auto"
              muted
              playsInline
              autoPlay
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative flex items-center justify-center flex-grow flex-shrink-0 h-full w-full gap-8 z-2">
            <div className="absolute bottom-0 left-0 flex items-center justify-center h-[1305px] w-full overflow-hidden z-2 gap-2.5">
              <div className="relative flex items-center justify-center flex-grow flex-shrink-0 h-full w-full overflow-hidden gap-2.5">

                {/* Text Animation */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-min overflow-hidden z-6 gap-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="flex flex-col items-center justify-center gap-2.5 h-min overflow-hidden relative w-full">
                      <div className="relative flex flex-col justify-start opacity-100 text-nowrap select-none">
                        <h1 className="text-[#FBFBFB] font-general-sans text-[80px] font-medium leading-[80px] text-left select-none whitespace-pre">
                          LatteArt
                        </h1>
                      </div>
                      <div className="absolute left-0 bottom-[-100px] flex flex-col justify-start text-nowrap select-none z-1">
                        <h1 className="text-[#FBFBFB] font-general-sans text-[80px] font-medium leading-[80px] text-left select-none whitespace-pre">
                          LatteArt
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="flex flex-col items-center justify-center gap-2.5 h-min overflow-hidden relative w-full">
                      <div className="relative flex flex-col justify-start opacity-100 text-nowrap select-none">
                        <h1 className="text-[#FBFBFB] font-general-sans text-[80px] font-medium leading-[80px] text-left select-none whitespace-pre">
                          Coffee
                        </h1>
                      </div>
                      <div className="absolute left-[49%] bottom-[100px] flex flex-col justify-start text-nowrap select-none z-1 transform">
                        <h1 className="text-[#FBFBFB] font-general-sans text-[80px] font-medium leading-[80px] text-left select-none whitespace-pre">
                          Coffee
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 h-16 w-16 opacity-100 will-change-transform z-5">
                  <div className="h-full w-full">
                    <div className="inline h-[500px] w-[500px] overflow-hidden transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid slice" className="inline h-[500px] w-[500px] overflow-hidden transform">
                        <defs>
                          <clipPath id="__lottie_element_2">
                            <rect width="500" height="500" x="0" y="0"></rect>
                          </clipPath>
                          <clipPath id="__lottie_element_4">
                            <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#__lottie_element_2)">
                          <g clipPath="url(#__lottie_element_4)" transform="matrix(-1,0,0,-1,499,500)" opacity="1">
                            <g transform="matrix(1,0,0,1,180.92300415039062,199.76686096191406)" opacity="0.48141309718691944">
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(245,245,245)" strokeOpacity="1" strokeWidth="18" d=" M0,53.07699966430664 C0,53.07699966430664 65.38400268554688,0 65.38400268554688,0 C65.38400268554688,0 100.6969985961914,30.08099937438965 100.6969985961914,30.08099937438965 C100.6969985961914,30.08099937438965 127.69200134277344,53.07699966430664 127.69200134277344,53.07699966430664"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Overlay Gradients */}
                <div className="absolute bottom-0 left-0 h-[1305px] w-full overflow-hidden will-change-transform z-2 transform opacity-100" 
                     style={{backgroundImage: "linear-gradient(rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.98) 100%, rgb(0, 0, 0) 100%)"}}>
                </div>
                <div className="absolute bottom-0 left-0 h-[1305px] w-full overflow-hidden will-change-transform z-2 transform opacity-100"
                     style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(30, 30, 30, 0.7) 100%, rgb(30, 30, 30) 100%)"}}>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="absolute right-0 top-0 flex items-end justify-end h-[1305px] w-full max-w-[1440px] overflow-hidden z-3 gap-2.5">
            <div className="flex flex-col items-center justify-center h-full w-1/2 overflow-hidden pt-64 pb-6 pr-20 gap-[62px]">
              <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                <h4 className="text-[#F5F5F5] font-general-sans text-2xl font-medium leading-[33.6px] overflow-wrap-anywhere whitespace-pre-wrap">
                  Indulge in pure coffee perfection, where every cup tells
                  a story of flavor and joy.
                </h4>
              </div>

              <div className="flex items-center justify-start h-min overflow-hidden relative w-full gap-8">
                <div className="relative h-[52px] flex-shrink-0">
                  <a 
                    target="_blank" 
                    rel="noopener" 
                    href="https://charwa.lemonsqueezy.com/buy/22cf382d-4ff1-4368-8102-22f175fdb07e" 
                    className="cursor-pointer flex items-center justify-start h-full overflow-hidden relative w-min gap-3 pb-[15px] pr-2 pt-[15px]"
                  >
                    <div className="cursor-pointer flex flex-col justify-start relative text-nowrap z-3">
                      <p className="cursor-pointer text-[#F5F5F5] font-general-sans text-lg font-medium leading-[21.6px] whitespace-pre">
                        GET TEMPLATE
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
