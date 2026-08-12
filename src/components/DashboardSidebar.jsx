import {
  LibraryBig,
  LayoutDashboard,
  Package,
  Banknote,
  ArrowLeftToLine,
  Settings,
  PackageSearch
} from 'lucide-react';
import { Link } from "react-router";

function DashboardSidebar() {
  return (
    <div className="flex flex-col h-min-screen justify-between py-4 px-1 text-gray-700 left-0 top-0 w-[15%]  ">
      <div className="flex flex-col ">
        <div className="w-full flex justify-center items-center p-2">
          <div className="bg-yellow-400 flex p-3 rounded-full text-shadow-gray-600">
            <LibraryBig size={25} />
          </div>
          <span className="ml-3 text-xl">Book Store</span>
        </div>

        <div className="mt-5 flex flex-col gap-1">
          <Link to={'/dashboard'} className="flex justify-start items-center gap-2 px-4 py-3   bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <LayoutDashboard />
            </div>
            <div>Dashboard</div>
          </Link>

          <Link to={'/seller/products'} className="flex justify-start items-center gap-2 px-4 py-3 bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <PackageSearch />
            </div>
            <div>Product</div>
          </Link>


          <Link to={'/seller/orders'} className="flex justify-start items-center gap-2 px-4 py-3 bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <Package />
            </div>
            <div>Orders</div>
          </Link>
          <Link to={'/seller/payments'} className="flex justify-start items-center gap-2 px-4 py-3 bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <Banknote />
            </div>
            <div>Payments </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <Link to={'/'} className="flex justify-start items-center gap-2 px-4 py-3 bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <ArrowLeftToLine />
            </div>
          <div>Home Page </div>
        </Link>
        


        <Link to={'seller/setting'} className="flex justify-start items-center gap-2 px-4 py-3 bg-[#F6F6F6] mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <Settings />
            </div>
          <div>Setting</div>
        </Link>

      </div>
    </div>
  );
}

export default DashboardSidebar;
