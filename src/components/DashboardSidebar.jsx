import {
  RiBookShelfLine,
  RiDashboardLine,
  RiBox1Line,
  RiWallet3Line,
  RiSettings4Line,
  RiArrowLeftLongLine,
} from "@remixicon/react";
import { Link } from "react-router";

function DashboardSidebar() {
  return (
    <div className="flex flex-col h-min-screen justify-between py-4 px-1 text-gray-700 bg-yellow-100 left-0 top-0 w-[15%]  ">
      <div className="flex flex-col ">
        <div className="w-full flex justify-center items-center p-2">
          <div className="bg-yellow-400 flex p-2 rounded-full text-shadow-gray-600">
            <RiBookShelfLine size={25} />
          </div>
          <span className="ml-3 text-xl">Book Store</span>
        </div>

        <div className="mt-5 flex flex-col gap-1">
          <Link to={'/'} className="flex justify-start items-center gap-2 px-4 py-3   bg-yellow-400 mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <RiDashboardLine /> 
            </div>
            <div>Dashboard</div>
          </Link>
          <Link to={'/seller/orders'} className="flex justify-start items-center gap-2 px-4 py-3 bg-yellow-400 mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <RiBox1Line /> 
            </div>
            <div>Orders</div>
          </Link>
          <Link to={'/seller/payment'} className="flex justify-start items-center gap-2 px-4 py-3 bg-yellow-400 mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <RiWallet3Line />
            </div>
            <div>Payments </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <Link to={'/'} className="flex justify-start items-center gap-2 px-4 py-3 bg-yellow-400 mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <RiArrowLeftLongLine />
            </div>
          <div>Home Page </div>
        </Link>
        


        <Link to={'seller/setting'} className="flex justify-start items-center gap-2 px-4 py-3 bg-yellow-400 mx-2 my-2 rounded-xl cursor-pointer hover:shadow-xl ">
            <div>
                <RiSettings4Line />
            </div>
          <div>Setting</div>
        </Link>

      </div>
    </div>
  );
}

export default DashboardSidebar;
