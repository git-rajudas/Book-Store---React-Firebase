import { RiShoppingBag3Line } from "@remixicon/react"
import { Link, NavLink } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext";
function Card({product}) {
  const {user, loading} = useAuth();
  const { addItem } = useCart();
  if(loading)  return (
            <div className="w-full h-full flex justify-center items-center">Loading....</div>
        )

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 border-yellow-400 m-10 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <a className="block relative h-70 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imageURL}></img>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Books</h3>
          <NavLink to={`/book/${product.id}`} className="text-gray-900 title-font text-lg font-medium">{product.name}</NavLink>
          <p className="mt-1">₹{product.price}</p>
        </div>
        <div className="mt-4 flex justify-between items-center gap-5">
            <button onClick={()=>addItem(product)} className="rounded-full border-none bg-yellow-400 px-3 py-3 flex gap-3 justify-center items-center cursor-pointer"><RiShoppingBag3Line /></button>
            <Link  to={`/book/${product.id}`} className="rounded-xl border-none bg-yellow-400 px-6 py-3 cursor-pointer">Buy Now</Link>
        </div>
      </div>
  )
}

export default Card
