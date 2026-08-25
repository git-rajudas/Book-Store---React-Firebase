import {
  CalendarDays,
  Download,
  ShoppingBag,
  RotateCcw,
  PackageCheck,
  Truck,
  ChevronDown,
  MoreHorizontal,
  Eye,
} from "lucide-react";
import { Link } from "react-router";
import { useSeller } from "../context/SellerContext";

function Orders() {
  const { ListedProduct, sellerOrders } = useSeller();

  return (
    <div className="w-full min-h-full pb-10">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-7">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Orders
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track, manage and fulfill your customer orders.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Date */}
          <button
            className="
              inline-flex items-center gap-2
              rounded-xl border border-gray-200
              bg-white px-4 py-2.5
              text-sm font-medium text-gray-700
              shadow-sm
              hover:bg-gray-50
              transition
            "
          >
            <CalendarDays size={17} className="text-gray-500" />

            <span>09 Aug 2026</span>

            <span className="text-gray-300">—</span>

            <span>09 Aug 2026</span>

            <ChevronDown size={15} className="ml-1 text-gray-400" />
          </button>

          {/* Export */}
          <button
            className="
              inline-flex items-center gap-2
              rounded-xl
              bg-gray-900
              px-4 py-2.5
              text-sm font-medium text-white
              shadow-sm
              hover:bg-gray-800
              transition
            "
          >
            <Download size={17} />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 mb-7">
        {/* Total Orders */}
        <div
          className="
            rounded-2xl border border-gray-200
            bg-white p-5
            shadow-sm
            hover:shadow-md
            transition-shadow
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                {sellerOrders?.length || 0}
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
              <ShoppingBag size={19} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-green-50 px-2 py-1 font-medium text-green-600">
              +12%
            </span>

            <span className="text-gray-400">From last month</span>
          </div>
        </div>

        {/* Orders Over Time */}
        <div
          className="
            rounded-2xl border border-gray-200
            bg-white p-5
            shadow-sm
            hover:shadow-md
            transition-shadow
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Orders Over Time
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                $2,000
              </h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShoppingBag size={19} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-green-50 px-2 py-1 font-medium text-green-600">
              +12%
            </span>

            <span className="text-gray-400">From last month</span>
          </div>
        </div>

        {/* Returns */}
        <div
          className="
            rounded-2xl border border-gray-200
            bg-white p-5
            shadow-sm
            hover:shadow-md
            transition-shadow
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Returns</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">0</h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <RotateCcw size={19} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-green-50 px-2 py-1 font-medium text-green-600">
              +12%
            </span>

            <span className="text-gray-400">From last month</span>
          </div>
        </div>

        {/* Fulfilled */}
        <div
          className="
            rounded-2xl border border-gray-200
            bg-white p-5
            shadow-sm
            hover:shadow-md
            transition-shadow
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Fulfilled Orders
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">100</h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <PackageCheck size={19} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-green-50 px-2 py-1 font-medium text-green-600">
              +12%
            </span>

            <span className="text-gray-400">From last month</span>
          </div>
        </div>

        {/* Delivered */}
        <div
          className="
            rounded-2xl border border-gray-200
            bg-white p-5
            shadow-sm
            hover:shadow-md
            transition-shadow
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Delivered Orders
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">100</h2>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Truck size={19} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-green-50 px-2 py-1 font-medium text-green-600">
              +12%
            </span>

            <span className="text-gray-400">From last month</span>
          </div>
        </div>
      </div>

      {/* ================= ORDER SECTION ================= */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Tabs */}
        <div className="flex flex-col gap-4 border-b border-gray-200 px-5 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1">
            <button
              className="
                rounded-lg
                bg-gray-900
                px-4 py-2
                text-sm font-medium text-white
              "
            >
              All
            </button>

            <button
              className="
                rounded-lg
                px-4 py-2
                text-sm font-medium text-gray-500
                hover:bg-gray-50 hover:text-gray-900
                transition
              "
            >
              Fulfilled
            </button>

            <button
              className="
                rounded-lg
                px-4 py-2
                text-sm font-medium text-gray-500
                hover:bg-gray-50 hover:text-gray-900
                transition
              "
            >
              Pending
            </button>
          </div>

          <div className="pb-3 text-sm text-gray-500">
            {sellerOrders?.length || 0} orders
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/70">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Order
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Total
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Payment
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Fulfillment
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Items
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {sellerOrders?.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-5 py-16 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                        <ShoppingBag size={24} className="text-gray-400" />
                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-gray-900">
                        No orders found
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Orders will appear here once customers make purchases.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                sellerOrders.map((order) => {
                  const orderTotal = order.items
                    ? order.items.reduce((sum, item) => sum + item.price, 0) +
                      50
                    : Number(order?.price) + 50;

                  const itemCount = order.items
                    ? order.items.reduce((sum, item) => sum + item.quantity, 0)
                    : order.quantity;

                  const orderId = order?.id?.slice(0, 5);

                  return (
                    <tr
                      key={order?.id}
                      className="
                        group
                        hover:bg-gray-50/70
                        transition-colors
                      "
                    >
                      {/* Order */}
                      <td className="px-5 py-4">
                        <Link
                          to={`/seller/order/${orderId}`}
                          className="
                            font-semibold
                            text-yellow-600
                            hover:text-yellow-700
                            hover:underline
                          "
                        >
                          #{orderId}
                        </Link>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="text-gray-700">
                          {order?.createdAt?.toDate().toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </div>
                      </td>

                      {/* Customer */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-full
                              bg-gray-100
                              text-xs font-semibold
                              text-gray-600
                            "
                          >
                            {order?.buyerName?.charAt(0)?.toUpperCase()}
                          </div>

                          <div>
                            <p className="font-medium text-gray-900">
                              {order?.buyerName}
                            </p>

                            <p className="text-xs text-gray-400">Customer</p>
                          </div>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-900">
                          ₹{Number(orderTotal).toFixed(2)}
                        </span>
                      </td>

                      {/* Payment */}
                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex items-center
                            rounded-full
                            px-2.5 py-1
                            text-xs font-medium
                            ${
                              order?.paymentStatus === "Paid"
                                ? "bg-green-50 text-green-700"
                                : "bg-yellow-50 text-yellow-700"
                            }
                          `}
                        >
                          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                          {order?.paymentStatus || "Pending"}
                        </span>
                      </td>

                      {/* Fulfillment */}
                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex items-center
                            rounded-full
                            px-2.5 py-1
                            text-xs font-medium
                            ${
                              order?.fulfillmentStatus === "Fulfilled"
                                ? "bg-green-50 text-green-700"
                                : "bg-orange-50 text-orange-700"
                            }
                          `}
                        >
                          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                          {order?.fulfillmentStatus || "Unfulfilled"}
                        </span>
                      </td>

                      {/* Items */}
                      <td className="px-5 py-4">
                        <span className="text-gray-600">
                          {itemCount} {itemCount === 1 ? "item" : "items"}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            to={`/seller/order/${orderId}`}
                            className="
                              inline-flex items-center gap-2
                              rounded-lg
                              border border-gray-200
                              bg-white
                              px-3 py-2
                              text-xs font-medium
                              text-gray-700
                              opacity-0
                              group-hover:opacity-100
                              hover:bg-gray-50
                              transition
                            "
                          >
                            <Eye size={14} />
                            View
                          </Link>

                          <button
                            className="
                              rounded-lg
                              p-2
                              text-gray-400
                              hover:bg-gray-100
                              hover:text-gray-700
                              transition
                            "
                          >
                            <MoreHorizontal size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ================= FOOTER ================= */}
        {sellerOrders?.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {sellerOrders.length}
              </span>{" "}
              orders
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled
                className="
                  rounded-lg
                  border border-gray-200
                  px-3 py-2
                  text-sm text-gray-400
                  cursor-not-allowed
                "
              >
                Previous
              </button>

              <button
                className="
                  rounded-lg
                  bg-gray-900
                  px-3 py-2
                  text-sm font-medium text-white
                "
              >
                1
              </button>

              <button
                className="
                  rounded-lg
                  border border-gray-200
                  px-3 py-2
                  text-sm text-gray-700
                  hover:bg-gray-50
                "
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
