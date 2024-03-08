import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalArticulos, setTotalArticulos] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    const cantidadArticulos = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPagar = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setTotalArticulos(cantidadArticulos);
    setPrecioTotal(totalPagar);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalArticulos,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
