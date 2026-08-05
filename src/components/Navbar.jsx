import { NavLink } from "react-router";
import {
  RiShoppingBag3Fill,
  RiStickyNoteAddFill,
  RiBookShelfLine,
  RiArrowDropDownLine,
  RiLogoutCircleRLine
} from "@remixicon/react";
import { signOutUser } from "../services/auth.services";
import { useAuth } from "../context/AuthContext";

import { useCart } from "../context/CartContext";
function Navbar() {
  const { totalQuantity } = useCart();
  const { user } = useAuth();


  const handleLogout = async () => {
    await signOutUser();
  };

  return (
    <div className="text-gray-600 body-font bg-amber-100 fixed left-0 right-0 z-50 w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to={"/"}
          className="flex title-font font-medium items-center justify-center text-gray-700 mb-4 md:mb-0 cursor-pointer "
        >
          <div className="bg-yellow-400 p-4 rounded-full text-shadow-gray-600">
            <RiBookShelfLine size={25} />
          </div>
          <span className="ml-3 text-xl">Book Store</span>
        </NavLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            className="mr-5 hover:text-yellow-600 cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to={"/store"}
            className="mr-5 hover:text-yellow-600 cursor-pointer"
          >
            Store
          </NavLink>
          <NavLink
            to={"/about"}
            className="mr-5 hover:text-yellow-600 cursor-pointer"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact"}
            className="mr-5 hover:text-yellow-600 cursor-pointer"
          >
            Contact Us
          </NavLink>
          {user ? (
            <div className="relative mr-5 flex items-center font-semibold group">
              <NavLink
                to={"/my-account"}
                className="hover:text-yellow-600 font-semibold cursor-pointer flex"
              >
                MyAccount
                <RiArrowDropDownLine size={24} />
              </NavLink>

              <div className="absolute pt-2 top-full left-10 hidden group-hover:block">
                <div className="bg-yellow-50 px-6 py-4 shadow-xl rounded-xl flex flex-col justify-between items-center gap-3">
                  <NavLink to={'/dashboard'} >Dashboard</NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-red-400 text-white px-3 py-1 rounded-xl whitespace-nowrap hover:bg-red-500 flex justify-center items-center gap-1 cursor-pointer" 
                  >
                  <span className="text-end">Logout</span> <RiLogoutCircleRLine size={15}/>
                </button>
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className="mr-5 hover:text-yellow-600 cursor-pointer"
            >
              Login
            </NavLink>
          )}
        </nav>

        <div className="flex justify-center items-center gap-5">
          <NavLink to="/book/addbook">
            <button className="inline-flex items-center justify-center gap-2 bg-yellow-400  hover:border-amber-200 py-2 px-4 focus:outline-none hover:bg-amber-300  rounded-xl text-base mt-4 md:mt-0 cursor-pointer  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              Add Book
              <RiStickyNoteAddFill />
            </button>
          </NavLink>
          <NavLink
            to={"/cart"}
            className="relative rounded-full  border-none bg-yellow-400 hover:bg-amber-200 px-2 py-2 flex gap-3 justify-center focus:outline-none items-center cursor-pointer shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          >
            <RiShoppingBag3Fill size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full min-w-5 h-5 flex justify-center items-center text-xs font-semibold">
              {totalQuantity}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
