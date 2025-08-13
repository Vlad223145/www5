export default function Footer() {
  return (
    <div className="w-full relative flex-shrink-0">
      <div className="contents">
        <footer className="flex flex-col items-center justify-start bg-[#121212] w-full pt-16 sm:pt-24 lg:pt-[120px] pb-8 sm:pb-12 relative gap-8 sm:gap-12 lg:gap-16">

          {/* Main Footer Content */}
          <div className="flex flex-col items-start justify-start max-w-[1440px] w-full px-4 sm:px-8 lg:px-20 relative gap-8 sm:gap-12">
            
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row items-start justify-between w-full h-min relative gap-8 lg:gap-0">

              {/* Left Column - Logo and Copyright */}
              <div className="flex flex-col items-start justify-start w-full lg:w-[400px] relative gap-4 lg:ml-[359px]">
                <div className="flex items-center justify-center lg:justify-start h-min w-full relative z-2">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <p className="text-[#F5F5F5] font-caveat text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[0.68px] leading-tight lg:leading-[40.8px] whitespace-pre">
                      LatteArt
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start lg:items-center justify-center h-min overflow-hidden relative w-full gap-1.5">
                  <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                    <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-xs sm:text-sm leading-[19.6px] overflow-wrap-anywhere whitespace-pre-wrap text-center lg:text-left lg:pl-[91px]">
                      © 2024 LatteArt. All rights reserved.
                    </p>
                  </div>
                  
                  <div className="flex items-start justify-center h-min overflow-hidden relative w-full gap-0.5">
                    <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                      <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[19.6px] text-nowrap whitespace-pre">
                        Designed and developed by{" "}
                      </p>
                    </div>
                    
                    <div className="relative h-[26px] flex-shrink-0">
                      <a target="_blank" rel="noopener" href="https://charwa.biz/" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                        <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                          <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                            <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[21px] text-nowrap whitespace-pre">
                              Charwa
                            </p>
                          </div>
                        </div>
                        <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-center justify-between flex-grow h-min relative" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-start justify-start max-w-[1440px] w-full px-4 sm:px-8 lg:px-20 relative gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full h-min pt-6 sm:pt-8 relative gap-4 sm:gap-0">

              {/* Privacy Policy */}
              <div className="flex items-start justify-center h-min overflow-hidden relative w-full sm:w-auto gap-0.5 lg:mr-[433px]">
                <div className="relative h-[26px] flex-shrink-0">
                  <a href="https://latteart.framer.website/privacy" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                    <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                      <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                        <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[21px] text-nowrap whitespace-pre">
                          Privacy Policy
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start justify-center h-min overflow-hidden relative w-full gap-9">
                <div className="flex flex-col justify-start relative text-nowrap whitespace-pre" />
                
                <div className="relative h-[26px] flex-shrink-0">
                  <a target="_blank" rel="noopener" href="https://www.instagram.com/" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                    <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                      <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                        <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[21px] text-nowrap whitespace-pre">
                          Instagram
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                  </a>
                </div>
                
                <div className="relative h-[26px] flex-shrink-0">
                  <a target="_blank" rel="noopener" href="https://www.facebook.com/" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                    <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                      <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                        <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[21px] text-nowrap whitespace-pre">
                          Facebook
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                  </a>
                </div>
                
                <div className="relative h-[26px] flex-shrink-0">
                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                    <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                      <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                        <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[21px] text-nowrap whitespace-pre">
                          Linkedin
                        </p>
                      </div>
                    </div>
                    <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
