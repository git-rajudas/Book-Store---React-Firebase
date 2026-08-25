import {
  ArrowDownToLine,
  CheckCircle2,
  Clock3,
  CreditCard,
  Search,
  WalletCards,
} from "lucide-react";

function Payments() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Payments
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track and manage your payment transactions.
          </p>
        </div>

        <button
          className="
            inline-flex items-center justify-center gap-2
            rounded-xl border border-gray-200
            bg-white px-4 py-2.5
            text-sm font-medium text-gray-700
            transition hover:bg-gray-50
          "
        >
          <ArrowDownToLine size={17} />
          Export
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Revenue */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total revenue
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                ₹24,500
              </p>

              <p className="mt-2 text-xs font-medium text-green-600">
                +12.5% from last month
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
              <WalletCards size={20} />
            </div>
          </div>
        </div>

        {/* Successful */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Successful payments
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                482
              </p>

              <p className="mt-2 text-xs font-medium text-green-600">
                +8.2% from last month
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <CheckCircle2 size={20} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending payments
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                12
              </p>

              <p className="mt-2 text-xs font-medium text-gray-400">
                Awaiting confirmation
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Clock3 size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="
                  pointer-events-none
                  absolute left-3 top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search transactions, orders..."
                className="
                  w-full rounded-xl
                  border border-gray-200
                  bg-gray-50
                  py-2.5 pl-10 pr-4
                  text-sm text-gray-900
                  outline-none
                  placeholder:text-gray-400
                  transition
                  focus:border-gray-400
                  focus:bg-white
                "
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <button
                className="
                  rounded-xl bg-gray-900
                  px-4 py-2.5
                  text-sm font-medium text-white
                  transition hover:bg-gray-800
                "
              >
                All
              </button>

              <button
                className="
                  rounded-xl border border-gray-200
                  bg-white px-4 py-2.5
                  text-sm font-medium text-gray-600
                  transition hover:bg-gray-50 hover:text-gray-900
                "
              >
                Paid
              </button>

              <button
                className="
                  rounded-xl border border-gray-200
                  bg-white px-4 py-2.5
                  text-sm font-medium text-gray-600
                  transition hover:bg-gray-50 hover:text-gray-900
                "
              >
                Pending
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Transaction
                </th>

                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Order
                </th>

                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Customer
                </th>

                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Amount
                </th>

                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="px-5 py-3.5"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {/* Payment Row */}
              <tr className="group transition hover:bg-gray-50">
                {/* Transaction */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-lg bg-gray-100
                        text-gray-500
                      "
                    >
                      <CreditCard size={17} />
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        #TX1002
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Card payment
                      </p>
                    </div>
                  </div>
                </td>

                {/* Order */}
                <td className="px-5 py-4">
                  <span className="font-medium text-yellow-600">
                    #1002
                  </span>
                </td>

                {/* Customer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        bg-gray-100
                        text-xs font-semibold
                        text-gray-600
                      "
                    >
                      JD
                    </div>

                    <span className="text-gray-700">
                      Jane DSA
                    </span>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-5 py-4">
                  <span className="font-semibold text-gray-900">
                    ₹20.00
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      bg-green-50
                      px-2.5 py-1
                      text-xs font-medium
                      text-green-700
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Paid
                  </span>
                </td>

                {/* Date */}
                <td className="px-5 py-4 whitespace-nowrap text-gray-500">
                  <div>
                    <p className="text-sm text-gray-700">
                      09 Aug 2026
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      10:42 AM
                    </p>
                  </div>
                </td>

                {/* Action */}
                <td className="px-5 py-4 text-right">
                  <button
                    className="
                      rounded-lg px-3 py-1.5
                      text-xs font-medium
                      text-gray-500
                      opacity-0
                      transition
                      hover:bg-gray-100 hover:text-gray-900
                      group-hover:opacity-100
                    "
                  >
                    View
                  </button>
                </td>
              </tr>

              {/* Example Pending Row */}
              <tr className="group transition hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-lg bg-gray-100
                        text-gray-500
                      "
                    >
                      <CreditCard size={17} />
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        #TX1001
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Card payment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span className="font-medium text-yellow-600">
                    #1001
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        bg-gray-100
                        text-xs font-semibold
                        text-gray-600
                      "
                    >
                      JS
                    </div>

                    <span className="text-gray-700">
                      John Smith
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span className="font-semibold text-gray-900">
                    ₹35.00
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      bg-orange-50
                      px-2.5 py-1
                      text-xs font-medium
                      text-orange-700
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Pending
                  </span>
                </td>

                <td className="px-5 py-4 whitespace-nowrap text-gray-500">
                  <div>
                    <p className="text-sm text-gray-700">
                      08 Aug 2026
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      04:18 PM
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    className="
                      rounded-lg px-3 py-1.5
                      text-xs font-medium
                      text-gray-500
                      opacity-0
                      transition
                      hover:bg-gray-100 hover:text-gray-900
                      group-hover:opacity-100
                    "
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div
          className="
            flex flex-col gap-3
            border-t border-gray-200
            px-5 py-4
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p className="text-xs text-gray-500">
            Showing <span className="font-medium text-gray-700">1</span> to{" "}
            <span className="font-medium text-gray-700">10</span> of{" "}
            <span className="font-medium text-gray-700">482</span> payments
          </p>

          <div className="flex items-center gap-1">
            <button
              className="
                rounded-lg border border-gray-200
                px-3 py-1.5 text-xs
                text-gray-400
                disabled:cursor-not-allowed
              "
              disabled
            >
              Previous
            </button>

            <button
              className="
                rounded-lg bg-gray-900
                px-3 py-1.5
                text-xs font-medium text-white
              "
            >
              1
            </button>

            <button
              className="
                rounded-lg border border-gray-200
                px-3 py-1.5
                text-xs text-gray-600
                hover:bg-gray-50
              "
            >
              2
            </button>

            <button
              className="
                rounded-lg border border-gray-200
                px-3 py-1.5
                text-xs text-gray-600
                hover:bg-gray-50
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
