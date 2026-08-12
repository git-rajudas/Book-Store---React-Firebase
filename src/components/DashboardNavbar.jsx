import { Search, CircleUserRound } from 'lucide-react';

function DashboardNavbar() {
  return (
    <div className="flex justify-between  fixed z-50 w-[85%] border-l border-[#F6F6F6] ">
      <div className="p-5  text-gray-600 flex justify-end items-center w-full gap-10 ">
        <div className='flex rounded-xl border-2 border-[#c9c9c9] px-2 py-1 justify-items-start items-center gap-2 w-[30%]'><Search /><input type="text"  placeholder='Search' className='border-none outline-none bg-center'/></div>

        <div className='p-2 flex justify-between items-center gap-2 cursor-pointer'><CircleUserRound /> <span className='inline-flex'>Raju</span></div>

      </div>
    </div>
  )
}

export default DashboardNavbar
