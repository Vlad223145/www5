import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import GlobalCart from "../components/GlobalCart";

export default function Checkout() {
  const { cartItem } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    country: "Poland",
    address: "",
    paymentMethod: "card",
    saveInfo: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order submitted:", formData);
    alert(
      "Order placed successfully! You will receive a confirmation email shortly.",
    );
  };

  if (!cartItem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            No Items in Cart
          </h1>
          <p className="text-gray-600 mb-8">
            Add some products to your cart before checking out.
          </p>
          <a
            href="/"
            className="bg-[#1D1A40] text-white px-6 py-3 rounded-lg hover:bg-[#2D2A50] transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Global Cart Component */}
      <GlobalCart />

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#1D1A40] font-caveat"
              >
                LatteArt
              </a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="/cart"
                className="text-sm sm:text-base text-gray-600 hover:text-[#1D1A40] transition-colors"
              >
                Back to Cart
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Shipping information
                </h2>

                {/* Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Shipping Address */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">
                    Shipping address
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-white"
                      >
                        <option value="Poland">Poland</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mb-6">
                  <span className="underline cursor-pointer">Enter address manually</span>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Payment method
                </h2>

                <div className="space-y-4">
                  {/* Card Payment */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3 flex items-center">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="font-medium">Card</span>
                      </div>
                      <div className="ml-auto flex space-x-1">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzAwNTFBNSIvPgo8cGF0aCBkPSJNMTEuNzc2IDEyLjU0SDEwLjE3MkwxMS4yODggOC4yNjhIMTIuODkyTDExLjc3NiAxMi41NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04Ljk0NCA4LjI2OEg3LjU1NkM3LjQyNCA4LjI2OCA3LjMxNiA4LjM1MiA3LjI5MiA4LjQ3Mkw2LjU4NCAxMi4zMjhDNi41NzIgMTIuNDA0IDYuNjI4IDEyLjQ3MiANi43MDggMTIuNDcySDE3LjAwNEM3LjIzMiAxMi40MTIgNy40NDggMTIuMjkyIDcuNTMyIDEyLjA5Nkw4LjQ5MiA4LjM4QzguNTI4IDguMzEyIDguNzMyIDguMjY4IDguOTQ0IDguMjY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+" alt="Visa" className="h-5" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjRkY1RjAwIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMTAiIHI9IjYiIGZpbGw9IiNGRjVGMDAiLz4KPHN0eWxlPi5zdDAme2ZpbGw6I0ZGNUYwMDt9PC9zdHlsZT4KPC9zdmc+" alt="Mastercard" className="h-5" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzAwNjZBMCIvPgo8cGF0aCBkPSJNNi42IDEyLjRINS44TDQuOCA4LjRINS42TDYuMiAxMS42TDcuNCA4LjRIOC4yTDYuNiAxMi40WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+" alt="American Express" className="h-5" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzAwMzA4NyIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEwIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEwIiByPSIyIiBmaWxsPSIjMDAzMDg3Ii8+Cjwvc3ZnPg==" alt="Diners" className="h-5" />
                      </div>
                    </div>
                  </label>

                  {/* Przelewy24 Payment */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="przelewy24"
                      checked={formData.paymentMethod === "przelewy24"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7V10C2 16 12 22 12 22S22 16 22 10V7L12 2Z"/>
                      </svg>
                      <span className="font-medium">Przelewy24</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Save Information Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <div className="ml-3">
                  <label htmlFor="saveInfo" className="text-sm font-medium text-gray-900 cursor-pointer">
                    Save my information for faster checkout
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Pay faster on Powdur and everywhere Link is accepted.
                  </p>
                </div>
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Pay
              </button>

              {/* Footer Links */}
              <div className="text-center text-xs text-gray-500 space-y-2">
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7V10C2 16 12 22 12 22S22 16 22 10V7L12 2Z"/>
                  </svg>
                  <span className="underline cursor-pointer">Free returns and exchanges</span>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <span>Powered by</span>
                  <strong>stripe</strong>
                  <span>|</span>
                  <span className="underline cursor-pointer">Legal</span>
                  <span className="underline cursor-pointer">Returns</span>
                  <span className="underline cursor-pointer">Contact</span>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-fit">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{cartItem.name}</h3>
                <p className="text-sm text-gray-600">{cartItem.description}</p>
                <p className="text-sm font-medium text-gray-900 mt-1">$0.00</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-600">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-600">FREE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-600">$0.00</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Free shipping included
                  </p>
                  <p className="text-sm text-green-700">
                    Your order qualifies for complimentary shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
