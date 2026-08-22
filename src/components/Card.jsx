import { RiShoppingBag3Line } from "@remixicon/react"
import { Link, NavLink } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext";
function Card({ product }) {
  const { loading } = useAuth();
  const { addItem } = useCart();
  if (loading) return (
    <div className="w-full h-full flex justify-center items-center">Loading....</div>
  )

  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <NavLink
        to={`/book/${product.id}`}
        className="block aspect-[4/5] overflow-hidden bg-gray-100"
      >
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </NavLink>


      <div className="p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-yellow-500">
          Books
        </p>

        <NavLink
          to={`/book/${product.id}`}
          className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors hover:text-yellow-500"
        >
          {product.name}
        </NavLink>

        <p className="mt-2 text-xl font-bold text-gray-900">
          ₹{product.price}
        </p>


        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => addItem(product)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-gray-900 transition-all hover:bg-yellow-500 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <RiShoppingBag3Line />
          </button>

          <Link
            to={`/book/${product.id}`}
            className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-900 px-4 text-sm font-semibold text-white transition-all hover:bg-yellow-400 hover:text-gray-900 active:scale-[0.98]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
