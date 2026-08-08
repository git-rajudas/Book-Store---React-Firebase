import { Outlet } from "react-router"
import DashboardSidebar from "../DashboardSidebar"
import DashboardNavbar from "../DashboardNavbar"

function DashboardLayout() {
  return (
    <div className="h-screen flex w-full">
    <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardNavbar/>
      
          <main className="flex-1 mt-20">
          <Outlet/>
          </main>

      </div>
    </div>
  )
}

export default DashboardLayout
