import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        // Increase qty if product already in cart
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }

    case "REMOVE": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "REMOVE_ONE": {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        return state.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
        );
      }
      return state.filter((i) => i.id !== action.payload);
    }

    case "REMOVE_ALL": {
      return state.filter((i) => i.id !== action.payload);
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => dispatch({ type: "ADD", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });
  const removeOne = (id) => dispatch({ type: "REMOVE_ONE", payload: id });
  const removeAll = (id) => dispatch({ type: "REMOVE_ALL", payload: id });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeOne, removeAll }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);