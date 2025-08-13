import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface CartContextType {
  cartItem: CartItem | null;
  addToCart: (item: CartItem) => { success: boolean; message?: string };
  removeFromCart: () => void;
  isInCart: (itemId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  const addToCart = (item: CartItem): { success: boolean; message?: string } => {
    if (cartItem) {
      return {
        success: false,
        message: "Sorry, you have already selected 1 product"
      };
    }
    
    setCartItem(item);
    return { success: true };
  };

  const removeFromCart = () => {
    setCartItem(null);
  };

  const isInCart = (itemId: number): boolean => {
    return cartItem?.id === itemId;
  };

  return (
    <CartContext.Provider value={{
      cartItem,
      addToCart,
      removeFromCart,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
