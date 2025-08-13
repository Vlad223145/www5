import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cartItem, removeFromCart } = useCart();

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
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1A40] mb-8">
          Shopping Cart
        </h1>

        {!cartItem ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2 4m2-4v4a1 1 0 001 1h9a1 1 0 001-1v-4M7 13v-4a1 1 0 011-1h8a1 1 0 011 1v4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some products to get started</p>
            <a 
              href="/" 
              className="bg-[#1D1A40] text-white px-6 py-3 rounded-lg hover:bg-[#2D2A50] transition-colors"
            >
              Browse Products
            </a>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Cart Item */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-[#1D1A40] mb-2">
                        {cartItem.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {cartItem.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end">
                      <p className="text-lg font-bold text-[#1D1A40] mb-2">
                        $0.00
                      </p>
                      <button
                        onClick={removeFromCart}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1D1A40] mb-4">Order Summary</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal (1 item)</span>
                  <span className="text-gray-600">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-600">$0.00</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold text-[#1D1A40]">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>
              
              <a
                href="/checkout"
                className="w-full bg-[#1D1A40] text-white py-3 px-6 rounded-lg hover:bg-[#2D2A50] transition-colors font-semibold mt-6 block text-center"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
