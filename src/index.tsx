import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App";
import { ProductsProvider } from "./state/contexts/productContext";
import { CartProvider } from "./state/contexts/cartContext";
import { UiProvider } from "./state/contexts/UiContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <UiProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UiProvider>
  </React.StrictMode>
);
