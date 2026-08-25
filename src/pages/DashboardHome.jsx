import {
  ArrowUpRight,
  ShoppingBag,
  Package,
  Users,
  IndianRupee,
  MoreHorizontal,
  TrendingUp,
  Clock3,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

function DashboardHome() {

  const PackageSearchIcon = () => {
  return (
    <div className="relative">
      <Package size={18} />
    </div>
  );
};

  return (
        <div className="w-full min-h-screen bg-[#f5f5f5] text-[#171717]">

      <div className="w-full space-y-5">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-1 text-xs font-medium text-gray-400">
              Overview
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>


          <button
            className="
              inline-flex
              h-10
              w-fit
              items-center
              gap-2
              rounded-xl
              bg-[#FFD22F]
              px-4
              text-sm
              font-medium
              text-gray-900
              shadow-sm
              transition
              hover:bg-yellow-400
            "
          >
            <TrendingUp size={16} />
            View Analytics
          </button>

        </div>


        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* TOTAL SALES */}
          <div
            className="
              group
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.3)]
            "
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-medium text-gray-400">
                  Total Sales
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                  ₹12,450
                </h2>
              </div>


              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-50
                  text-yellow-600
                  transition
                  group-hover:bg-[#FFD22F]
                  group-hover:text-gray-900
                "
              >
                <IndianRupee size={18} />
              </div>

            </div>


            <div className="mt-4 flex items-center gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-50
                  px-2
                  py-1
                  text-[11px]
                  font-semibold
                  text-green-700
                "
              >
                <ArrowUpRight size={12} />
                12.5%
              </span>

              <span className="text-[11px] text-gray-400">
                from last month
              </span>

            </div>

          </div>


          {/* ORDERS */}
          <div
            className="
              group
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.3)]
            "
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-medium text-gray-400">
                  Orders
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                  245
                </h2>
              </div>


              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-50
                  text-yellow-600
                  transition
                  group-hover:bg-[#FFD22F]
                  group-hover:text-gray-900
                "
              >
                <ShoppingBag size={18} />
              </div>

            </div>


            <div className="mt-4 flex items-center gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-50
                  px-2
                  py-1
                  text-[11px]
                  font-semibold
                  text-green-700
                "
              >
                <ArrowUpRight size={12} />
                8.2%
              </span>

              <span className="text-[11px] text-gray-400">
                from last month
              </span>

            </div>

          </div>


          {/* PRODUCTS */}
          <div
            className="
              group
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.3)]
            "
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-medium text-gray-400">
                  Products
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                  128
                </h2>
              </div>


              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-50
                  text-yellow-600
                  transition
                  group-hover:bg-[#FFD22F]
                  group-hover:text-gray-900
                "
              >
                <Package size={18} />
              </div>

            </div>


            <div className="mt-4 flex items-center gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-50
                  px-2
                  py-1
                  text-[11px]
                  font-semibold
                  text-green-700
                "
              >
                <ArrowUpRight size={12} />
                4.5%
              </span>

              <span className="text-[11px] text-gray-400">
                from last month
              </span>

            </div>

          </div>


          {/* CUSTOMERS */}
          <div
            className="
              group
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
              transition
              hover:-translate-y-0.5
              hover:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.3)]
            "
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-medium text-gray-400">
                  Customers
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                  1,240
                </h2>
              </div>


              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-50
                  text-yellow-600
                  transition
                  group-hover:bg-[#FFD22F]
                  group-hover:text-gray-900
                "
              >
                <Users size={18} />
              </div>

            </div>


            <div className="mt-4 flex items-center gap-2">

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-green-50
                  px-2
                  py-1
                  text-[11px]
                  font-semibold
                  text-green-700
                "
              >
                <ArrowUpRight size={12} />
                10.2%
              </span>

              <span className="text-[11px] text-gray-400">
                from last month
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">


          {/* =================================================
              SALES OVERVIEW
          ================================================== */}

          <section
            className="
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              sm:p-6
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
            "
          >

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <h2 className="text-sm font-semibold text-gray-900">
                    Sales Overview
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-green-50
                      px-2
                      py-1
                      text-[10px]
                      font-semibold
                      text-green-700
                    "
                  >
                    +12.5%
                  </span>

                </div>

                <p className="mt-1 text-xs text-gray-400">
                  Revenue performance over the selected period
                </p>

              </div>


              <div className="relative">

                <select
                  className="
                    h-9
                    appearance-none
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    py-0
                    pl-3
                    pr-8
                    text-xs
                    text-gray-600
                    outline-none
                    transition
                    focus:border-yellow-400
                    focus:ring-4
                    focus:ring-yellow-50
                  "
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>

                <ChevronDown
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    right-2.5
                    top-3
                    text-gray-400
                  "
                />

              </div>

            </div>


            {/* Total */}
            <div className="mt-6">

              <p className="text-xs text-gray-400">
                Total revenue
              </p>

              <div className="mt-1 flex items-end gap-2">

                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
                  ₹12,450
                </h3>

                <span className="mb-1 text-xs font-medium text-green-600">
                  +12.5%
                </span>

              </div>

            </div>


            {/* Chart */}
            <div className="mt-6 h-[280px] w-full">

              <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-50 p-4">

                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between px-4 py-5">

                  <div className="border-t border-dashed border-gray-200" />
                  <div className="border-t border-dashed border-gray-200" />
                  <div className="border-t border-dashed border-gray-200" />
                  <div className="border-t border-dashed border-gray-200" />
                  <div className="border-t border-dashed border-gray-200" />

                </div>


                {/* Fake chart */}
                <div className="absolute inset-x-5 bottom-8 top-6">

                  <svg
                    viewBox="0 0 800 240"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >

                    <defs>

                      <linearGradient
                        id="salesGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#FFD22F"
                          stopOpacity="0.35"
                        />

                        <stop
                          offset="100%"
                          stopColor="#FFD22F"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>


                    {/* Area */}
                    <path
                      d="
                        M0 190
                        C70 180 90 145 150 155
                        C210 165 235 110 290 120
                        C350 130 380 80 430 95
                        C485 110 510 75 565 85
                        C620 95 650 45 700 65
                        C750 80 770 35 800 45
                        L800 240
                        L0 240
                        Z
                      "
                      fill="url(#salesGradient)"
                    />


                    {/* Line */}
                    <path
                      d="
                        M0 190
                        C70 180 90 145 150 155
                        C210 165 235 110 290 120
                        C350 130 380 80 430 95
                        C485 110 510 75 565 85
                        C620 95 650 45 700 65
                        C750 80 770 35 800 45
                      "
                      fill="none"
                      stroke="#EAB308"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>


                {/* Labels */}
                <div
                  className="
                    absolute
                    bottom-2
                    left-5
                    right-5
                    flex
                    justify-between
                    text-[10px]
                    text-gray-400
                  "
                >
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              RECENT ORDERS
          ================================================== */}

          <section
            className="
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              sm:p-6
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
            "
          >

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-sm font-semibold text-gray-900">
                  Recent Orders
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Latest customer purchases
                </p>

              </div>


              <button
                className="
                  rounded-lg
                  px-2
                  py-1.5
                  text-xs
                  font-medium
                  text-gray-400
                  transition
                  hover:bg-gray-50
                  hover:text-gray-900
                "
              >
                View all
              </button>

            </div>


            {/* Orders */}
            <div className="mt-5 divide-y divide-gray-100">

              {/* ORDER 1 */}
              <div className="flex items-center justify-between py-4 first:pt-0">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-yellow-50
                      text-yellow-600
                    "
                  >
                    <ShoppingBag size={16} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-gray-900">
                      #1005
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Jane DSA
                    </p>

                  </div>

                </div>


                <div className="text-right">

                  <p className="text-xs font-semibold text-gray-900">
                    ₹50.00
                  </p>

                  <span
                    className="
                      mt-1
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-green-600
                    "
                  >
                    <CheckCircle2 size={11} />
                    Paid
                  </span>

                </div>

              </div>


              {/* ORDER 2 */}
              <div className="flex items-center justify-between py-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-gray-50
                      text-gray-500
                    "
                  >
                    <ShoppingBag size={16} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-gray-900">
                      #1004
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      John Smith
                    </p>

                  </div>

                </div>


                <div className="text-right">

                  <p className="text-xs font-semibold text-gray-900">
                    ₹35.00
                  </p>

                  <span
                    className="
                      mt-1
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-orange-500
                    "
                  >
                    <Clock3 size={11} />
                    Pending
                  </span>

                </div>

              </div>


              {/* ORDER 3 */}
              <div className="flex items-center justify-between py-4 last:pb-0">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-gray-50
                      text-gray-500
                    "
                  >
                    <ShoppingBag size={16} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-gray-900">
                      #1003
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Alex
                    </p>

                  </div>

                </div>


                <div className="text-right">

                  <p className="text-xs font-semibold text-gray-900">
                    ₹20.00
                  </p>

                  <span
                    className="
                      mt-1
                      inline-flex
                      items-center
                      gap-1
                      text-[10px]
                      font-medium
                      text-green-600
                    "
                  >
                    <CheckCircle2 size={11} />
                    Paid
                  </span>

                </div>

              </div>

            </div>


            {/* Bottom */}
            <button
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                py-2.5
                text-xs
                font-medium
                text-gray-600
                transition
                hover:border-gray-300
                hover:bg-gray-50
                hover:text-gray-900
              "
            >
              View all orders
            </button>

          </section>

        </div>


        {/* =====================================================
            BOTTOM SECTION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* TOP PRODUCTS */}
          <section
            className="
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
            "
          >

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Top Products
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Best selling books
                </p>
              </div>

              <button className="text-gray-400 hover:text-gray-900">
                <MoreHorizontal size={18} />
              </button>

            </div>


            <div className="mt-5 space-y-4">

              {[
                ["The Great Gatsby", "45 sales", "₹2,250"],
                ["Atomic Habits", "38 sales", "₹1,900"],
                ["Clean Code", "32 sales", "₹1,600"],
              ].map((product, index) => (

                <div
                  key={product[0]}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-yellow-50
                        text-xs
                        font-semibold
                        text-yellow-700
                      "
                    >
                      {index + 1}
                    </div>

                    <div>

                      <p className="max-w-[150px] truncate text-xs font-semibold text-gray-800">
                        {product[0]}
                      </p>

                      <p className="mt-0.5 text-[10px] text-gray-400">
                        {product[1]}
                      </p>

                    </div>

                  </div>

                  <span className="text-xs font-semibold text-gray-900">
                    {product[2]}
                  </span>

                </div>

              ))}

            </div>

          </section>


          {/* INVENTORY */}
          <section
            className="
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-sm font-semibold text-gray-900">
                  Inventory
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Current stock status
                </p>

              </div>

              <Package
                size={18}
                className="text-gray-400"
              />

            </div>


            <div className="mt-5">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-2xl font-semibold text-gray-900">
                    128
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Total products
                  </p>

                </div>

                <span className="text-xs font-medium text-orange-500">
                  12 low stock
                </span>

              </div>


              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">

                <div
                  className="
                    h-full
                    w-[78%]
                    rounded-full
                    bg-[#FFD22F]
                  "
                />

              </div>


              <div className="mt-3 flex justify-between text-[10px] text-gray-400">

                <span>
                  78% healthy stock
                </span>

                <span>
                  22% attention
                </span>

              </div>

            </div>

          </section>


          {/* QUICK ACTIONS */}
          <section
            className="
              rounded-[17px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]
            "
          >

            <div>

              <h2 className="text-sm font-semibold text-gray-900">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Manage your store quickly
              </p>

            </div>


            <div className="mt-5 grid grid-cols-2 gap-3">

              <button
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  text-xs
                  font-medium
                  text-gray-700
                  transition
                  hover:border-yellow-300
                  hover:bg-yellow-50
                "
              >

                <PackageSearchIcon />

                Add Product

              </button>


              <button
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  text-xs
                  font-medium
                  text-gray-700
                  transition
                  hover:border-yellow-300
                  hover:bg-yellow-50
                "
              >

                <ShoppingBag size={18} />

                Orders

              </button>


              <button
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  text-xs
                  font-medium
                  text-gray-700
                  transition
                  hover:border-yellow-300
                  hover:bg-yellow-50
                "
              >

                <Users size={18} />

                Customers

              </button>


              <button
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  text-xs
                  font-medium
                  text-gray-700
                  transition
                  hover:border-yellow-300
                  hover:bg-yellow-50
                "
              >

                <IndianRupee size={18} />

                Payments

              </button>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;
