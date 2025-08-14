export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Kozmo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image:
        "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      href: "/product/kozmo",
    },
    {
      id: 2,
      name: "Lunar",
      description: "Ground coffee, light roast",
      price: "$24.99",
      image:
        "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      href: "/product/lunar",
    },
    {
      id: 3,
      name: "The One®",
      description: "Ground coffee, medium roast",
      price: "$14.99",
      image:
        "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      href: "/product/the-one",
    },
    {
      id: 4,
      name: "Arkan",
      description: "Ground coffee, light roast",
      price: "$19.99",
      image:
        "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      href: "/product/arkan",
    },
    {
      id: 5,
      name: "Nairo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image:
        "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      href: "/product/nairo",
    },
    {
      id: 6,
      name: "Krishna",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image:
        "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      href: "/product/krishna",
    },
    {
      id: 7,
      name: "Kozmo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image:
        "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      href: "/product/kozmo-plus",
    },
    {
      id: 8,
      name: "Lunar Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image:
        "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      href: "/product/lunar-plus",
    },
    {
      id: 9,
      name: "The One® Plus",
      description: "Ground coffee, double medium roast",
      price: "$49.99",
      image:
        "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      href: "/product/the-one-plus",
    },
    {
      id: 10,
      name: "Arkan Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image:
        "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      href: "/product/arkan-plus",
    },
    {
      id: 11,
      name: "Nairo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image:
        "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      href: "/product/nairo-plus",
    },
    {
      id: 12,
      name: "Krishna Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image:
        "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      href: "/product/krishna-plus",
    },
  ];

  return (
    <section
      id="products"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto scroll-mt-16"
    >
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#1D1A40] mb-4">
          Our Products
        </h2>
      </div>

      <div className="bg-[#EAEDF6] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <a
              href={product.href}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full transition-transform hover:scale-105 will-change-transform"
            >
              <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 sm:p-6 min-w-[200px]">
                <div className="flex flex-col items-center justify-center flex-grow gap-1">
                  <div className="flex flex-col justify-start overflow-wrap-anywhere w-full">
                    <p className="text-[#1D1A40] font-inter text-sm sm:text-base font-bold leading-5 sm:leading-6 text-left overflow-wrap-anywhere whitespace-pre-wrap break-words">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start overflow-wrap-anywhere w-full">
                    <p className="text-[#70758C] font-inter text-xs sm:text-sm leading-5 sm:leading-6 text-left overflow-wrap-anywhere whitespace-pre-wrap break-words">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
