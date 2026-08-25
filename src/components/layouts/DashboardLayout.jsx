import { Outlet } from "react-router"
import DashboardSidebar from "../DashboardSidebar"
import DashboardNavbar from "../DashboardNavbar"

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#171717]">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Area */}
      <div className="lg:ml-[260px]">

        {/* Navbar */}
        <DashboardNavbar />

        {/* Content */}
        <main className="min-h-screen pt-[76px]">
          <div className="px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  )
}

export default DashboardLayout
