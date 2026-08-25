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
import Layout from "./Layout"
import OrderSuccess from "./components/OrderSuccess"
import DashboardLayout from "./components/layouts/DashboardLayout"
import DashboardHome from "./pages/DashboardHome"
import Orders from "./pages/Orders"
// import Products from "./pages/Products"
// import Paymets from "./pages/Paymets"
import Setting from "./pages/Setting"
import OrderManage from "./pages/OrderManage"


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/book/addbook" element={<ProtectedRoute> <AddBook /> </ProtectedRoute>}/>
        <Route path="/book/:id" element={<ProtectedRoute> <Bookpage /> </ProtectedRoute>}/>
        <Route path="/my-account" element={<ProtectedRoute><UserProfile /> </ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>}/>
        <Route path="/checkout/:ItemId" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>}/>
        <Route path="/order-success/:orderId" element={<ProtectedRoute><OrderSuccess /> </ProtectedRoute>}/>
      </Route>
      <Route element={<DashboardLayout/>}>
        <Route path="/dashboard" element={<DashboardHome/>} />
        {/* <Route path="/seller/products" element={<Products />} /> */}
        <Route path="/seller/orders" element={<Orders />} />
        <Route path="/seller/order/:orderId" element={<OrderManage />} />
        {/* <Route path="/seller/payments" element={<Paymets/>} /> */}
        <Route path="/seller/setting" element={<Setting/>} />
      </Route>
      <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><SignUp /> </PublicRoute>}/>
    </Routes>
  )
}

export default App
