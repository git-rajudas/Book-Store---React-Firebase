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
   <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-amber-200/70 bg-amber-50/95 shadow-sm backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

    {/* Logo */}
    <NavLink
      to="/"
      className="flex shrink-0 items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-gray-900 shadow-sm transition-transform duration-200 hover:scale-105">
        <RiBookShelfLine size={24} />
      </div>

      <div className="hidden sm:block">
        <span className="block text-lg font-bold leading-tight text-gray-900">
          Book Store
        </span>

        <span className="text-[11px] font-medium uppercase tracking-widest text-gray-500">
          Read. Discover. Enjoy.
        </span>
      </div>
    </NavLink>

    {/* Navigation */}
    <nav className="hidden items-center gap-1 md:flex">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
            isActive
              ? "bg-yellow-400 text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-yellow-100 hover:text-gray-900"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/store"
        className={({ isActive }) =>
          `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
            isActive
              ? "bg-yellow-400 text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-yellow-100 hover:text-gray-900"
          }`
        }
      >
        Store
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
            isActive
              ? "bg-yellow-400 text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-yellow-100 hover:text-gray-900"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
            isActive
              ? "bg-yellow-400 text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-yellow-100 hover:text-gray-900"
          }`
        }
      >
        Contact
      </NavLink>

      {/* Account */}
      {user ? (
        <div className="group relative ml-1">

          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              `flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-yellow-400 text-gray-900"
                  : "text-gray-700 hover:bg-yellow-100"
              }`
            }
          >
            My Account
            <RiArrowDropDownLine
              size={21}
              className="transition-transform duration-200 group-hover:rotate-180"
            />
          </NavLink>

          {/* Dropdown */}
          <div className="invisible absolute right-0 top-full w-52 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">

              <NavLink
                to="/my-account"
                className="flex items-center rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-yellow-50 hover:text-gray-900"
              >
                My Account
              </NavLink>

              <NavLink
                to="/dashboard"
                className="flex items-center rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-yellow-50 hover:text-gray-900"
              >
                Dashboard
              </NavLink>

              <div className="my-1 border-t border-gray-100" />

              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                <span>Logout</span>
                <RiLogoutCircleRLine size={17} />
              </button>

            </div>
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `ml-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:bg-yellow-100"
            }`
          }
        >
          Login
        </NavLink>
      )}
    </nav>

    {/* Right Actions */}
    <div className="flex items-center gap-3">

      {/* Add Book */}
      <NavLink
        to="/book/addbook"
        className="hidden sm:block"
      >
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md active:scale-95"
        >
          <span>Add Book</span>
          <RiStickyNoteAddFill size={17} />
        </button>
      </NavLink>

      {/* Cart */}
      <NavLink
        to="/cart"
        className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm transition-all hover:bg-yellow-400 hover:text-gray-900 active:scale-95"
        aria-label="Shopping cart"
      >
        <RiShoppingBag3Fill
          size={21}
          className="transition-transform group-hover:scale-110"
        />

        {totalQuantity > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-amber-50 bg-red-500 px-1 text-[10px] font-bold text-white">
            {totalQuantity > 99 ? "99+" : totalQuantity}
          </span>
        )}
      </NavLink>

    </div>
  </div>

  {/* Mobile Navigation */}
  <div className="border-t border-amber-200/60 md:hidden">
    <nav className="mx-auto flex max-w-7xl items-center justify-center gap-1 overflow-x-auto px-4 py-2">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
            isActive
              ? "bg-yellow-400 text-gray-900"
              : "text-gray-600"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/store"
        className={({ isActive }) =>
          `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
            isActive
              ? "bg-yellow-400 text-gray-900"
              : "text-gray-600"
          }`
        }
      >
        Store
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
            isActive
              ? "bg-yellow-400 text-gray-900"
              : "text-gray-600"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
            isActive
              ? "bg-yellow-400 text-gray-900"
              : "text-gray-600"
          }`
        }
      >
        Contact
      </NavLink>

      {user ? (
        <NavLink
          to="/my-account"
          className={({ isActive }) =>
            `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
              isActive
                ? "bg-yellow-400 text-gray-900"
                : "text-gray-600"
            }`
          }
        >
          Account
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
              isActive
                ? "bg-yellow-400 text-gray-900"
                : "text-gray-600"
            }`
          }
        >
          Login
        </NavLink>
      )}

    </nav>
  </div>
</header>
  );
}

export default Navbar;
