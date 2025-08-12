export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Kozmo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      href: "/product/kozmo"
    },
    {
      id: 2,
      name: "Lunar",
      description: "Ground coffee, light roast",
      price: "$24.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      href: "/product/lunar"
    },
    {
      id: 3,
      name: "The One®",
      description: "Ground coffee, medium roast",
      price: "$14.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      href: "/product/the-one"
    },
    {
      id: 4,
      name: "Arkan",
      description: "Ground coffee, light roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      href: "/product/arkan"
    },
    {
      id: 5,
      name: "Nairo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      href: "/product/nairo"
    },
    {
      id: 6,
      name: "Krishna",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      href: "/product/krishna"
    },
    {
      id: 7,
      name: "Kozmo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      href: "/product/kozmo-plus"
    },
    {
      id: 8,
      name: "Lunar Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      href: "/product/lunar-plus"
    },
    {
      id: 9,
      name: "The One® Plus",
      description: "Ground coffee, double medium roast",
      price: "$49.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      href: "/product/the-one-plus"
    },
    {
      id: 10,
      name: "Arkan Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      href: "/product/arkan-plus"
    },
    {
      id: 11,
      name: "Nairo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      href: "/product/nairo-plus"
    },
    {
      id: 12,
      name: "Krishna Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      href: "/product/krishna-plus"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-[1440px] mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-[#1D1A40] mb-4">
          Our Products
        </h2>
      </div>
      
      <div className="bg-[#EAEDF6] rounded-3xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <a
              href={product.href}
              className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-transform hover:scale-105 will-change-transform"
            >
              <div className="relative h-[400px] overflow-hidden">
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
              
              <div className="flex items-center justify-between p-6 min-w-[200px]">
                <div className="flex flex-col items-center justify-center flex-grow gap-1">
                  <div className="flex flex-col justify-start overflow-wrap-anywhere w-full">
                    <p className="text-[#1D1A40] font-inter text-base font-bold leading-6 text-left overflow-wrap-anywhere whitespace-pre-wrap break-words">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start overflow-wrap-anywhere w-full">
                    <p className="text-[#70758C] font-inter text-sm leading-6 text-left overflow-wrap-anywhere whitespace-pre-wrap break-words">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-[#EAEDF6] rounded-full p-3 flex items-center justify-center gap-3 min-w-fit">
                  <div className="flex flex-col justify-start text-nowrap whitespace-pre">
                    <p className="text-[#1D1A40] font-inter text-sm font-semibold leading-6 text-left text-nowrap whitespace-pre">
                      {product.price}
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
