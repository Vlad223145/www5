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

        </div>
      </section>
    </main>
  );
}
