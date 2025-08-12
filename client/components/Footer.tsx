export default function Footer() {
  return (
    <div className="w-full relative flex-shrink-0">
      <div className="contents">
        <footer className="flex flex-col items-center justify-start bg-[#121212] w-full pt-[120px] pb-12 relative gap-16">
          
          {/* Main Footer Content */}
          <div className="flex flex-col items-start justify-start max-w-[1440px] w-full px-20 relative gap-12">
            
            {/* Top Section */}
            <div className="flex items-start justify-between w-full h-min relative">
              
              {/* Left Column - Logo and Copyright */}
              <div className="flex flex-col items-start justify-start w-[400px] relative gap-4">
                <div className="flex items-center justify-center h-min w-full relative z-2">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <p className="text-[#F5F5F5] font-caveat text-[34px] font-semibold tracking-[0.68px] leading-[40.8px] whitespace-pre">
                      LatteArt
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-1.5">
                  <div className="flex flex-col justify-start overflow-wrap-anywhere relative w-full whitespace-pre-wrap">
                    <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[19.6px] overflow-wrap-anywhere whitespace-pre-wrap">
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
              <div className="flex items-center justify-between flex-grow h-min relative">
                
                {/* NYC */}
                <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-4">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <h3 className="text-[#F5F5F5] font-general-sans text-[32px] font-medium leading-[44.8px] text-nowrap whitespace-pre">
                      NYC
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-1">
                    <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                      <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                        <a target="_blank" rel="noopener" href="tel:19292341222" className="cursor-pointer inline text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                          (929) 234 12 22
                        </a>
                      </p>
                    </div>
                    
                    <div className="relative h-[26px] flex-shrink-0">
                      <a target="_blank" rel="noopener" href="https://www.google.com/maps" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                        <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                          <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                            <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-6 text-nowrap whitespace-pre">
                              Location
                            </p>
                          </div>
                        </div>
                        <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* PA */}
                <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-4">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <h3 className="text-[#F5F5F5] font-general-sans text-[32px] font-medium leading-[44.8px] text-nowrap whitespace-pre">
                      PA
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-1">
                    <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                      <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                        <a target="_blank" rel="noopener" href="tel:19292221212" className="cursor-pointer inline text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                          (929) 222 12 12
                        </a>
                      </p>
                    </div>
                    
                    <div className="relative h-[26px] flex-shrink-0">
                      <a target="_blank" rel="noopener" href="https://www.google.com/maps" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                        <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                          <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                            <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-6 text-nowrap whitespace-pre">
                              Location
                            </p>
                          </div>
                        </div>
                        <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* NJ */}
                <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-4">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <h3 className="text-[#F5F5F5] font-general-sans text-[32px] font-medium leading-[44.8px] text-nowrap whitespace-pre">
                      NJ
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-1">
                    <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                      <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                        <a target="_blank" rel="noopener" href="tel:19192323333" className="cursor-pointer inline text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                          (919) 232 33 33
                        </a>
                      </p>
                    </div>
                    
                    <div className="relative h-[26px] flex-shrink-0">
                      <a target="_blank" rel="noopener" href="https://www.google.com/maps" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                        <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                          <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                            <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-6 text-nowrap whitespace-pre">
                              Location
                            </p>
                          </div>
                        </div>
                        <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* OH */}
                <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-4">
                  <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                    <h3 className="text-[#F5F5F5] font-general-sans text-[32px] font-medium leading-[44.8px] text-nowrap whitespace-pre">
                      OH
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-start justify-center h-min overflow-hidden relative w-full gap-1">
                    <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                      <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                        <a target="_blank" rel="noopener" href="tel: 19294444467" className="cursor-pointer inline text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-[22.4px] text-nowrap whitespace-pre">
                          (929) 444 44 67
                        </a>
                      </p>
                    </div>
                    
                    <div className="relative h-[26px] flex-shrink-0">
                      <a target="_blank" rel="noopener" href="https://www.google.com/maps" className="cursor-pointer flex items-start justify-center h-full overflow-hidden relative w-min">
                        <div className="cursor-pointer flex flex-col items-center justify-start h-min overflow-hidden relative w-full">
                          <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference text-nowrap whitespace-pre">
                            <p className="cursor-pointer text-[rgba(245,245,245,0.7)] font-general-sans text-base leading-6 text-nowrap whitespace-pre">
                              Location
                            </p>
                          </div>
                        </div>
                        <div className="bg-white cursor-pointer absolute bottom-0 left-[-2px] h-px w-full z-1"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-start justify-start max-w-[1440px] w-full px-20 relative gap-8">
            <div className="flex items-end justify-between w-full h-min pt-8 relative">
              
              {/* Privacy Policy */}
              <div className="flex items-start justify-center h-min overflow-hidden relative w-full gap-0.5">
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
                <div className="flex flex-col justify-start relative text-nowrap whitespace-pre">
                  <p className="text-[rgba(245,245,245,0.7)] font-general-sans text-sm leading-[19.6px] text-nowrap whitespace-pre">
                    Follow us:
                  </p>
                </div>
                
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
