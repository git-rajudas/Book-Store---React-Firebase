function DashboardHome() {
  return (
    <div className="w-full h-full ">
      <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

          <p className="text-sm text-gray-500">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total Sales</p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              $12,450
            </h2>

            <p className="mt-2 text-xs font-medium text-green-600">
              +12.5% from last month
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Orders</p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">245</h2>

            <p className="mt-2 text-xs font-medium text-green-600">
              +8.2% from last month
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Products</p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">128</h2>

            <p className="mt-2 text-xs font-medium text-green-600">
              +4.5% from last month
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Customers</p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">1,240</h2>

            <p className="mt-2 text-xs font-medium text-green-600">
              +10.2% from last month
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Sales Chart */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-900">Sales Overview</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your sales performance
                </p>
              </div>

              <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>

            {/* Chart goes here */}
            <div className="mt-6 flex h-64 items-center justify-center rounded-lg bg-gray-50">
              <span className="text-sm text-gray-400">Sales Chart</span>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Recent Orders</h2>

              <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
                View all
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">#1005</p>

                  <p className="text-xs text-gray-500">Jane DSA</p>
                </div>

                <span className="text-sm font-medium">$50.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">#1004</p>

                  <p className="text-xs text-gray-500">John Smith</p>
                </div>

                <span className="text-sm font-medium">$35.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">#1003</p>

                  <p className="text-xs text-gray-500">Alex</p>
                </div>

                <span className="text-sm font-medium">$20.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
