
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import FarmStories from "./components/FarmStories.jsx";
import SeasonalBasket from "./components/SeasonalBasket.jsx";
import OrganicGuide from "./components/OrganicGuide.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";

export const CartContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

export default function App() {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== id);
      }

      return current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const cartValue = useMemo(
    () => ({
      items,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart
    }),
    [items, addToCart, updateQuantity, removeFromCart, clearCart]
  );

  return (
    <CartContext.Provider value={cartValue}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/farm-stories" element={<FarmStories />} />
        <Route path="/seasonal-basket" element={<SeasonalBasket />} />
        <Route path="/organic-guide" element={<OrganicGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartContext.Provider>
  );
}
