"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem } from "@/data/products";

export interface CartItem {
  product: ProductItem;
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: ProductItem,
    selectedColor?: string,
    quantity?: number,
    selectedSize?: string
  ) => void;
  removeFromCart: (productId: string, selectedColor?: string, selectedSize?: string) => void;
  updateQuantity: (
    productId: string,
    selectedColor: string | undefined,
    newQty: number,
    selectedSize?: string
  ) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
  formattedTotal: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("acemen_cart");
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem("acemen_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems, isMounted]);

  const addToCart = (
    product: ProductItem,
    selectedColor?: string,
    quantity: number = 1,
    selectedSize?: string
  ) => {
    const color = selectedColor || product.colors[0]?.name || "Default";
    const size = selectedSize || (product.sizes ? product.sizes[2] || product.sizes[0] : undefined);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedColor?: string, selectedSize?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (!selectedColor || item.selectedColor === selectedColor) &&
            (!selectedSize || item.selectedSize === selectedSize)
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    selectedColor: string | undefined,
    newQty: number,
    selectedSize?: string
  ) => {
    if (newQty <= 0) {
      removeFromCart(productId, selectedColor, selectedSize);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          (!selectedColor || item.selectedColor === selectedColor) &&
          (!selectedSize || item.selectedSize === selectedSize)
        ) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const formattedTotal = `£${totalPrice.toLocaleString("en-GB")}`;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
        formattedTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
