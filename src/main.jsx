import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { SellerContextProvider } from "./context/SellerContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <AuthContextProvider>
        <SellerContextProvider>
          <UserContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </UserContextProvider>
        </SellerContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
