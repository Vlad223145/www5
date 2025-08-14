import GlobalCart from "../components/GlobalCart";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PromoSection from "../components/PromoSection";
import ProductsSection from "../components/ProductsSection";
import ProcessSection from "../components/ProcessSection";
import MenuSection from "../components/MenuSection";
import GallerySection from "../components/GallerySection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Index() {
  const { cartItem } = useCart();

  return (
    <div className="bg-white">
      <title className="hidden font-times text-base">
        Latteart — Cafe Website Template
      </title>

      <div className="bg-white">
        <div>
          <div className="flex flex-col items-center justify-start bg-white min-h-screen lg:min-h-[1305px] relative">
            {/* Logo */}
            <div className="absolute left-4 sm:left-8 lg:left-40 top-4 sm:top-6 lg:top-7 flex items-center z-10">
              <div className="flex flex-col justify-start relative">
                <p className="text-[#F5F5F5] font-caveat text-xl sm:text-2xl lg:text-[28px] font-bold tracking-[0.56px] leading-tight lg:leading-[33.6px] whitespace-pre">
                  LatteArt
                </p>
              </div>
            </div>

            {/* Fixed Shopping Cart Icon - Always Visible */}
            <div className="fixed top-4 right-4 z-[9999] flex items-center space-x-4">
              <a
                href="/cart"
                className="cursor-pointer flex items-center justify-center relative p-3 bg-black/20 backdrop-blur-sm hover:bg-black/30 rounded-full transition-all duration-300 shadow-lg"
              >
                <div className="text-3xl sm:text-4xl">
                  🛒
                </div>
                {cartItem && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">1</span>
                  </span>
                )}
              </a>
            </div>

            {/* Navigation Links */}
            <div className="absolute right-4 sm:right-8 lg:right-40 top-4 sm:top-6 lg:top-9 h-[26px] z-10 flex items-center space-x-4 sm:space-x-6">
              <span className="cursor-pointer flex items-center h-full overflow-hidden relative w-min">
                <div className="cursor-pointer flex flex-col items-center justify-start overflow-hidden relative w-full">
                  <div className="cursor-pointer flex flex-col justify-start relative mix-blend-difference">
                    <p className="cursor-pointer text-[#F5F5F5] font-general-sans text-sm sm:text-base leading-5 sm:leading-6 whitespace-pre">
                      Membership
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[-2px] bg-white h-px w-full z-1 cursor-pointer"></div>
              </span>
            </div>

            <HeroSection />
            <AboutSection />
            <PromoSection />
            <ProductsSection />
            <ProcessSection />
            <MenuSection />
            <GallerySection />
            <CTASection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
