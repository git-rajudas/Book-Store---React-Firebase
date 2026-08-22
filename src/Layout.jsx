import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

function Layout() {
  return (
    <div className="h-screen w-full">
      <Navbar/>
      <main className="pt-30 bg-gray-50">
        <Outlet/>
      </main>

    </div>
  )
}

export default Layout
