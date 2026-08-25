import {
  LibraryBig,
  LayoutDashboard,
  PackageSearch,
  Package,
  Banknote,
  ArrowLeftToLine,
  Settings,
  ChevronRight,
} from "lucide-react";

import { NavLink, Link } from 'react-router';

const DashboardSidebar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      path: "/seller/products",
      icon: PackageSearch,
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: Package,
    },
    {
      name: "Payments",
      path: "/seller/payments",
      icon: Banknote,
    },
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        hidden
        h-screen
        w-[260px]
        flex-col
        border-r
        border-gray-200
        bg-white
        lg:flex
      "
    >

      {/* =========================
          LOGO
      ========================== */}
      <div className="flex h-[76px] items-center border-b border-gray-100 px-6">

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#FFD22F]
              text-gray-900
            "
          >
            <LibraryBig size={21} />
          </div>

          <div className="flex flex-col">

            <span className="text-[15px] font-bold text-gray-900">
              Book Store
            </span>

            <span className="text-[11px] text-gray-400">
              Seller Dashboard
            </span>

          </div>

        </Link>

      </div>


      {/* =========================
          NAVIGATION
      ========================== */}
      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6">

        <div>

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            Main Menu
          </p>

          <nav className="flex flex-col gap-1.5">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) => `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-[#FFD22F] text-gray-900 shadow-sm"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >

                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">

                        <div
                          className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            transition-colors
                            ${
                              isActive
                                ? "bg-white/60 text-gray-900"
                                : "bg-gray-100 text-gray-500 group-hover:bg-white"
                            }
                          `}
                        >
                          <Icon size={17} />
                        </div>

                        <span>
                          {item.name}
                        </span>

                      </div>

                      {isActive && (
                        <ChevronRight
                          size={15}
                          className="text-gray-700"
                        />
                      )}
                    </>
                  )}

                </NavLink>
              );
            })}

          </nav>

        </div>


        {/* =========================
            BOTTOM MENU
        ========================== */}
        <div className="mt-8">

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            General
          </p>

          <div className="flex flex-col gap-1.5">

            {/* Home */}
            <Link
              to="/"
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                text-gray-500
                transition-all
                hover:bg-gray-50
                hover:text-gray-900
              "
            >

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-100
                  text-gray-500
                  group-hover:bg-white
                "
              >
                <ArrowLeftToLine size={17} />
              </div>

              <span>
                Home Page
              </span>

            </Link>


            {/* Settings */}
            <NavLink
              to="/seller/setting"
              className={({ isActive }) => `
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                transition-all
                ${
                  isActive
                    ? "bg-[#FFD22F] text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >

              {({ isActive }) => (
                <>
                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      ${
                        isActive
                          ? "bg-white/60 text-gray-900"
                          : "bg-gray-100 text-gray-500 group-hover:bg-white"
                      }
                    `}
                  >
                    <Settings size={17} />
                  </div>

                  <span>
                    Settings
                  </span>
                </>
              )}

            </NavLink>

          </div>

        </div>

      </div>


      {/* =========================
          SELLER PROFILE
      ========================== */}
      <div className="border-t border-gray-100 p-4">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-gray-50
            p-3
          "
        >

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#FFD22F]
              text-sm
              font-semibold
              text-gray-900
            "
          >
            R
          </div>

          <div className="min-w-0">

            <p className="truncate text-xs font-semibold text-gray-900">
              Raju
            </p>

            <p className="truncate text-[10px] text-gray-400">
              Seller account
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default DashboardSidebar;