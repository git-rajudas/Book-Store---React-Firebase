
import {
  Search,
  CircleUserRound,
  Bell,
  Menu,
} from "lucide-react";

const DashboardNavbar = () => {
  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-30
        h-[76px]
        border-b
        border-gray-200
        bg-white/95
        backdrop-blur
        lg:left-[260px]
      "
    >

      <div
        className="
          flex
          h-full
          items-center
          justify-between
          gap-4
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =========================
            MOBILE MENU
        ========================== */}
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            text-gray-600
            hover:bg-gray-50
            lg:hidden
          "
        >
          <Menu size={19} />
        </button>


        {/* =========================
            SEARCH
        ========================== */}
        <div
          className="
            hidden
            h-10
            max-w-[420px]
            flex-1
            items-center
            gap-2
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            px-3
            focus-within:border-yellow-400
            focus-within:bg-white
            focus-within:ring-4
            focus-within:ring-yellow-50
            sm:flex
          "
        >

          <Search
            size={17}
            className="shrink-0 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products, orders..."
            className="
              w-full
              bg-transparent
              text-sm
              text-gray-700
              outline-none
              placeholder:text-gray-400
            "
          />

          <span
            className="
              hidden
              rounded-md
              border
              border-gray-200
              bg-white
              px-1.5
              py-0.5
              text-[10px]
              text-gray-400
              md:block
            "
          >
            ⌘ K
          </span>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">

          {/* Notification */}
          <button
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-500
              transition
              hover:bg-gray-50
              hover:text-gray-900
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute
                right-2
                top-2
                h-1.5
                w-1.5
                rounded-full
                bg-red-500
              "
            />
          </button>


          {/* Divider */}
          <div className="hidden h-7 w-px bg-gray-200 sm:block" />


          {/* User */}
          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              px-2
              py-1.5
              transition
              hover:bg-gray-50
            "
          >

            <div
              className="
                flex
                h-9
                w-9
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

            <div className="hidden text-left sm:block">

              <p className="text-xs font-semibold text-gray-900">
                Raju
              </p>

              <p className="text-[10px] text-gray-400">
                Seller
              </p>

            </div>

            <CircleUserRound
              size={16}
              className="hidden text-gray-400 md:block"
            />

          </button>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;