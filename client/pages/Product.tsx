import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  const products = {
    "kozmo": {
      name: "Kozmo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      details: "Experience the perfect balance of rich flavor and smooth texture with our Kozmo blend. Expertly roasted to a medium profile that brings out the natural sweetness and complexity of our carefully selected beans."
    },
    "lunar": {
      name: "Lunar",
      description: "Ground coffee, light roast",
      price: "$24.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      details: "Light and bright, our Lunar blend captures the delicate nuances of single-origin beans with floral notes and crisp acidity that awakens your senses."
    },
    "the-one": {
      name: "The One®",
      description: "Ground coffee, medium roast",
      price: "$14.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      details: "Our signature blend that started it all. The One® delivers a consistent, satisfying cup with notes of chocolate and caramel that make every morning special."
    },
    "arkan": {
      name: "Arkan",
      description: "Ground coffee, light roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      details: "A light roast that celebrates the origin characteristics of our premium beans, offering bright acidity and tea-like qualities with subtle fruit undertones."
    },
    "nairo": {
      name: "Nairo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      details: "Named after the vibrant city, Nairo brings together beans from multiple regions to create a well-rounded cup with notes of nuts and dark chocolate."
    },
    "krishna": {
      name: "Krishna",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      details: "A spiritual journey in every cup, Krishna blend offers deep, contemplative flavors with hints of spice and earthiness that ground you in the moment."
    },
    "kozmo-plus": {
      name: "Kozmo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      details: "Double the intensity, double the satisfaction. Kozmo Plus takes our beloved original blend and amplifies it for those who crave a bolder coffee experience."
    },
    "lunar-plus": {
      name: "Lunar Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      details: "Enhanced brightness and complexity in our premium Lunar Plus blend. Perfect for pour-over enthusiasts who appreciate nuanced flavor profiles."
    },
    "the-one-plus": {
      name: "The One® Plus",
      description: "Ground coffee, double medium roast",
      price: "$49.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      details: "The evolution of our signature blend. The One® Plus offers an elevated experience with premium beans and extended aging for unparalleled depth."
    },
    "arkan-plus": {
      name: "Arkan Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      details: "Premium light roast experience with Arkan Plus. Enhanced clarity and brightness showcase the finest characteristics of our carefully sourced beans."
    },
    "nairo-plus": {
      name: "Nairo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      details: "Elevated complexity in our Nairo Plus blend. Rich, full-bodied flavor with enhanced notes that create a truly memorable coffee experience."
    },
    "krishna-plus": {
      name: "Krishna Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      details: "The ultimate expression of our Krishna blend. Deeper meditation, richer flavors, and an intensified journey through taste and aroma."
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="bg-[#1D1A40] text-white px-6 py-3 rounded-lg hover:bg-[#2D2A50] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-[#1D1A40] font-caveat">
                LatteArt
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/" 
                className="text-gray-600 hover:text-[#1D1A40] transition-colors"
              >
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#1D1A40] mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {product.description}
              </p>
              <p className="text-3xl font-bold text-[#1D1A40] mb-8">
                {product.price}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {product.details}
              </p>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-[#1D1A40] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#2D2A50] transition-colors">
                  Add to Cart
                </button>
                <button className="px-8 py-4 border-2 border-[#1D1A40] text-[#1D1A40] rounded-lg font-semibold hover:bg-[#1D1A40] hover:text-white transition-colors">
                  ♡
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#1D1A40] mb-3">Product Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Freshly ground coffee beans</li>
                  <li>• Ethically sourced and sustainably grown</li>
                  <li>• Perfect for espresso, drip, and pour-over</li>
                  <li>• Roasted in small batches for optimal freshness</li>
                  <li>• Available in multiple grind sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
