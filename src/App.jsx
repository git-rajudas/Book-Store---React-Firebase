import { Route, Routes } from "react-router"
import ProtectedRoute from "./components/ProtectedRoute"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import './index.css'
import Home from "./pages/Home"
import AddBook from "./pages/AddBook"
import UserProfile from "./pages/UserProfile"
import Cart from "./pages/Cart"
import Bookpage from "./pages/Bookpage"
import PublicRoute from "./components/PublicRoute"
import CheckoutPage from "./pages/CheckoutPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={ 
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                  } />
      <Route path="/signup" element={<PublicRoute><SignUp /> </PublicRoute>}/>
      <Route path="/book/addbook" element={<ProtectedRoute> <AddBook /> </ProtectedRoute>}/>
      <Route path="/book/:id" element={<ProtectedRoute> <Bookpage /> </ProtectedRoute>}/>
      <Route path="/my-account" element={<ProtectedRoute><UserProfile /> </ProtectedRoute>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
      <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
