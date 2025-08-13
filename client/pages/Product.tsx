import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();

  const products = {
    "kozmo": {
      name: "Kozmo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      details: "Kozmo is our tribute to the cosmic dance of coffee perfection. Sourced from the volcanic soils of Guatemala at 1,400-1,600 meters above sea level, these Arabica beans develop their distinctive character in the cool mountain air. The medium roast brings out waves of milk chocolate sweetness, balanced with subtle notes of dried orange peel and a hint of cinnamon spice. Each sip delivers a velvety mouthfeel that coats your palate with warmth, while the clean finish leaves you with memories of toasted almonds and honey. This is the coffee that transforms ordinary mornings into extraordinary rituals, perfect for both espresso shots that sing with crema and pour-overs that bloom with aromatic complexity."
    },
    "lunar": {
      name: "Lunar",
      description: "Ground coffee, light roast",
      price: "$24.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      details: "Lunar captures the ethereal beauty of Ethiopian highlands, where coffee was first discovered thousands of years ago. Hand-picked at dawn from ancient heirloom varietals growing at 2,000 meters elevation, these beans undergo a meticulous light roast that preserves their natural vibrancy. The first sip greets you with bright bergamot and jasmine florals, evolving into layers of stone fruit - think ripe peach and apricot dancing on your tongue. The acidity is crisp yet gentle, like morning dew on mountain flowers, while subtle hints of lemon zest and green tea create a complexity that evolves with each temperature drop. This coffee doesn't just wake you up; it transports you to misty mountain terraces where every bean tells a story of terroir and tradition."
    },
    "the-one": {
      name: "The One®",
      description: "Ground coffee, medium roast",
      price: "$14.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      details: "The One® is our master blend, a harmonious marriage of Brazilian Santos, Colombian Huila, and Guatemalan Antigua beans. This isn't just coffee; it's a symphony in your cup. The Brazilian beans provide the foundation - a rich, nutty base with notes of dark chocolate and caramel that speaks to your soul. Colombian highlands contribute the brightness - a clean acidity with hints of red apple and brown sugar that lifts your spirits. The Guatemalan component adds depth - smoky undertones with whispers of cocoa and vanilla that ground the experience. Roasted to medium perfection, The One® delivers consistent excellence whether you're pulling espresso shots at 5 AM or brewing a leisurely afternoon cup. It's the coffee that never disappoints, the reliable companion that turns every coffee moment into a celebration of flavor."
    },
    "arkan": {
      name: "Arkan",
      description: "Ground coffee, light roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      details: "Arkan takes you on a journey to the misty mountains of Costa Rica's Tarrazú region, where volcanic soil and perfect climate create magic. These beans grow slowly at 1,800 meters, developing complex sugars and acids that light roasting transforms into pure poetry. The aroma alone transports you - imagine opening a jar filled with dried hibiscus, white grape, and Meyer lemon zest. The taste unfolds like a gentle sunrise: initial notes of green apple and pear give way to delicate white florals, followed by a subtle honey sweetness that lingers like a whispered promise. The body is light yet structured, with a tea-like elegance that makes each sip a meditation. Arkan is for those quiet moments when you want to truly taste your coffee, when every nuance matters and every flavor note deserves contemplation."
    },
    "nairo": {
      name: "Nairo",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      details: "Named after the vibrant heart of Kenya, Nairo embodies the bold spirit of African coffee culture. These beans come from small-holder farms around Mount Kenya, where red volcanic soil and equatorial sunshine create the perfect storm for exceptional coffee. The medium roast reveals the complex character that makes Kenyan coffee legendary - a wine-like acidity that's bright but never sharp, paired with full-bodied richness that satisfies completely. Taste buds come alive with waves of black currant and dark cherry, while undertones of dark chocolate and roasted cashew provide depth and warmth. The finish is long and memorable, with hints of brown sugar and dried fig that linger like an echo of African drums. Nairo is coffee with personality - bold enough for morning motivation, complex enough for afternoon contemplation, and satisfying enough to end any day on a high note."
    },
    "krishna": {
      name: "Krishna",
      description: "Ground coffee, medium roast",
      price: "$19.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      details: "Krishna is a spiritual journey in liquid form, inspired by the mystical coffee gardens of India's Western Ghats. These beans grow in the shade of ancient spice trees, absorbing the essence of cardamom, black pepper, and cinnamon that permeate the monsoon-kissed air. The medium roast awakens layers of complexity that unfold like a meditation: initial notes of dark chocolate and molasses give way to exotic spices - cardamom, nutmeg, and a whisper of black pepper that tingles on the palate. The body is full and embracing, like a warm hug from an old friend, while subtle earth tones ground the experience in ancient wisdom. Each cup carries the essence of its terroir - the rich red soil, the monsoon rains, the patient hands that picked each cherry at perfect ripeness. Krishna doesn't just caffeinate; it enlightens, offering a moment of mindfulness in every sip."
    },
    "kozmo-plus": {
      name: "Kozmo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/NXttOnsmf4ONyIuiMGkBzv7ECU.jpg",
      details: "Kozmo Plus is the universe expanding - everything you love about our original Kozmo, but intensified and elevated to cosmic proportions. We take premium Guatemalan beans from our highest-altitude farms (1,800+ meters) and employ a double-roasting technique that pushes the boundaries of flavor development. The first roast develops the sweetness and body, while the second roast deepens the complexity and adds layers of caramelization that ordinary roasting simply cannot achieve. The result is a coffee that defies gravity - rich dark chocolate and toffee notes are amplified to symphonic levels, while new flavors emerge: roasted hazelnut, burnt sugar, and a hint of dark cherry. The body is luxuriously thick, coating your mouth with waves of flavor that seem to go on forever. This is coffee for special occasions, for moments when you want to taste the extraordinary."
    },
    "lunar-plus": {
      name: "Lunar Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/nuTc250d2Y6Wnx4FdH82PqKsYA.jpg?scale-down-to=1024",
      details: "Lunar Plus represents the pinnacle of light roast artistry - a coffee that captures starlight in a cup. We source only the finest Ethiopian heirloom varietals from Yirgacheffe and Sidamo regions, beans so exceptional they're processed with obsessive attention to detail. The double light roasting process requires master-level skill: the first roast awakens the bean's potential, while the second roast enhances clarity and brightness without sacrificing the delicate floral notes that make Ethiopian coffee legendary. The result is transcendent - imagine sipping liquid flowers with notes of bergamot tea, white peach, and orange blossom honey. The acidity is crystalline, cutting through the complexity with laser precision, while subtle wine-like characteristics dance between sweet and tart. Each sip is like watching a sunrise from space - beautiful, complex, and utterly unforgettable."
    },
    "the-one-plus": {
      name: "The One® Plus",
      description: "Ground coffee, double medium roast",
      price: "$49.99",
      image: "https://framerusercontent.com/images/2mnN6p3fJB8lHlsdZ1TEjQv2ayU.jpg?scale-down-to=1024",
      details: "The One® Plus is our magnum opus, the ultimate expression of blending artistry. We select only the top 1% of beans from our partner farms - Brazilian pulped naturals aged for 12 months, Colombian beans from single estates above 2,000 meters, and rare Guatemalan varieties that grow only in volcanic microclimates. Our proprietary double-roasting process develops layers of flavor that single roasts simply cannot achieve. The first roast builds the foundation of chocolate and caramel, while the second roast adds complexity: roasted vanilla, dark cherry, burnt sugar, and whispers of bourbon barrel aging. The mouthfeel is luxurious - thick, creamy, and enveloping, with a finish that lingers for minutes, revealing new flavor notes with each breath. This isn't just coffee; it's a masterpiece of roasting science and blending art, worthy of the most discerning palates."
    },
    "arkan-plus": {
      name: "Arkan Plus",
      description: "Ground coffee, double light roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5c3PIy4m4YvRO0MIbc1NeBfMaXU.jpg?scale-down-to=1024",
      details: "Arkan Plus pushes the boundaries of what light roast coffee can be. We source micro-lot beans from Costa Rica's highest peaks, where temperatures drop to near-freezing at night and soar during the day, creating stress that concentrates flavors to extraordinary levels. Our double light roasting technique is a delicate dance - the first roast develops brightness and acidity, while the second roast enhances sweetness and body without compromising the delicate floral characteristics. The result is a revelation: imagine drinking liquid sunshine with notes of white grape, elderflower, and Meyer lemon zest. The acidity is bright but refined, like champagne bubbles on your tongue, while undertones of raw honey and green apple provide sweetness and depth. This is coffee for connoisseurs who appreciate subtlety, complexity, and the art of restraint in roasting."
    },
    "nairo-plus": {
      name: "Nairo Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/5SrlAPZTOT6JPRKJyGo6o4Zfxog.jpg?scale-down-to=1024",
      details: "Nairo Plus is African coffee power unleashed. We source only AA grade beans from Kenya's most prestigious growing regions - Nyeri, Kirinyaga, and Murang'a - where volcanic soil and perfect climate create beans of extraordinary density and flavor potential. Our double medium roasting process amplifies everything that makes Kenyan coffee special: the wine-like acidity becomes more complex, revealing layers of blackcurrant, dark cherry, and pomegranate. The body deepens to syrup-like richness, while new flavors emerge from the extended roasting - dark chocolate, roasted almond, and hints of tobacco leaf. The finish is incredibly long, with waves of flavor that evolve and change, leaving you with impressions of brown sugar, dried fruit, and spice. This is coffee that demands attention, respect, and slow appreciation - a true expression of African terroir at its finest."
    },
    "krishna-plus": {
      name: "Krishna Plus",
      description: "Ground coffee, double medium roast",
      price: "$34.99",
      image: "https://framerusercontent.com/images/gsSLneJqKhA2p3ZtJxf4rM1a4.jpg",
      details: "Krishna Plus is enlightenment in a cup, the ultimate spiritual coffee experience. We source beans from India's most sacred coffee regions - estates where ancient traditions meet modern processing techniques. These beans undergo monsoon aging, exposed to moisture-laden winds that transform their cellular structure and concentrate flavors in ways that time alone cannot achieve. Our double medium roasting process honors this transformation: the first roast develops the spice notes naturally absorbed from the surrounding cardamom and pepper trees, while the second roast deepens the mystical earthiness that defines monsooned coffee. The result is transcendent - waves of cardamom, cinnamon, and black pepper dance with notes of dark chocolate, molasses, and aged wood. The body is full and meditative, coating your palate with ancient wisdom, while the finish lingers like incense smoke, leaving impressions of vanilla, dried fruit, and spiritual satisfaction. This is coffee for life's most contemplative moments."
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
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl sm:text-2xl font-bold text-[#1D1A40] font-caveat">
                LatteArt
              </a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="/"
                className="text-sm sm:text-base text-gray-600 hover:text-[#1D1A40] transition-colors"
              >
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1A40] mb-3 sm:mb-4">
                {product.name}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
                {product.description}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-[#1D1A40] mb-6 sm:mb-8">
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
