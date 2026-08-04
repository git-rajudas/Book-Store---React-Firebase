import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { CartContextProvider } from './context/CartContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
