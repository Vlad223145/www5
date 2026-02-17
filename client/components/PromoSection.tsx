export default function PromoSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1D1A40] leading-tight mb-8 tracking-tight">
            Try Our Products
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">
              Absolutely Free
            </span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1D1A40] leading-relaxed">
              Experience premium coffee quality with complimentary shipping
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#70758C] leading-relaxed max-w-3xl mx-auto">
              Select your preferred product and proceed to gift checkout to start your complimentary coffee journey
            </p>
          </div>
          
          <div className="bg-[#1D1A40] text-white py-6 px-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-bold mb-2">
              FREE SHIPPING INCLUDED
            </p>
            <p className="text-sm sm:text-base font-medium opacity-90">
              No hidden fees • No commitments • Premium quality guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
