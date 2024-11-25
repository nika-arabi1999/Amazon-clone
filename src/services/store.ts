import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "./dashboardApi";
import { create } from "zustand";

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

export const useZustandStore = create((set) => ({
  cart: getCart(),
  setCart: (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    set({ cart });
  },
  saved: getSaved(),
  setSaved : (saved) => {
    localStorage.setItem("saved", JSON.stringify(saved));
    set({ saved });
  },
}));

function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "null");
  console.log({ cart });
  if (!cart) {
    const initialCart = {
      id: "cart_35846",
      total_items: 0,
      subtotal: 0,
      line_items: [],
      currency: {
        code: "USD",
        symbol: "$",
      },
    };
    localStorage.setItem("cart", JSON.stringify(initialCart));
    return initialCart;
  } else {
    return cart;
  }
}

function getSaved() {
  const saved = JSON.parse(localStorage.getItem("saved") || "null");
  console.log({ saved });
  if (!saved) {
    const initialSaved = {
      id: "cart_35846",
      total_items: 0,
      subtotal: 0,
      line_items: [],
      currency: {
        code: "USD",
        symbol: "$",
      },
    };
    localStorage.setItem("saved", JSON.stringify(initialSaved));
    return initialSaved;
  } else {
    return saved;
  }
}
