import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";

export default function GlobalCart() {
  const { cartItem, removeFromCart } = useCart();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsPreviewOpen(false);
      }
    }

    if (isPreviewOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPreviewOpen]);

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      {/* Cart Icon */}
      <div className="relative">
        <div
          onClick={(e) => {
            e.preventDefault();
            setIsPreviewOpen(!isPreviewOpen);
          }}
          className="cursor-pointer flex items-center justify-center relative p-3 bg-black/20 backdrop-blur-sm hover:bg-black/30 rounded-full transition-all duration-300 shadow-lg"
        >
          <div className="text-2xl sm:text-3xl">
            🛒
          </div>
          {cartItem && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </span>
          )}
        </div>

        {/* Cart Preview Dropdown */}
        {isPreviewOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Shopping Cart</h3>
            </div>
            
            <div className="max-h-64 overflow-y-auto">
              {cartItem ? (
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{cartItem.name}</h4>
                      <p className="text-sm text-gray-600 truncate">{cartItem.description}</p>
                      <p className="text-lg font-bold text-green-600 mt-1">FREE</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart();
                      }}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {/* Cart Summary */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-lg font-bold text-green-600">$0.00</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <a
                        href="/cart"
                        className="block w-full bg-gray-100 text-gray-800 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        View Cart
                      </a>
                      <a
                        href="/checkout"
                        className="block w-full bg-[#1D1A40] text-white text-center py-2 px-4 rounded-lg hover:bg-[#1D1A40]/90 transition-colors font-medium"
                      >
                        Place Order
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-2">🛒</div>
                  <p className="text-gray-500">Your cart is empty</p>
                  <a
                    href="/"
                    className="inline-block mt-3 text-[#1D1A40] hover:underline"
                  >
                    Continue Shopping
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
