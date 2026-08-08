import { RiSearch2Line, RiAccountCircleLine } from '@remixicon/react'

function DashboardNavbar() {
  return (
    <div className="flex justify-between bg-yellow-100 fixed z-50 w-[85%] border-l border-yellow-400 ">
      <div className="p-5  text-gray-600 flex justify-between items-center w-full">
        <div className='ml-3 text-xl p-2'>Welcome, Raju</div>
        <div className="flex justify-between items-center gap-5">
            <div className='flex rounded-xl border-2 border-yellow-400 px-2 py-1 justify-items-start items-center gap-2'><RiSearch2Line /><input type="text"  placeholder='Search' className='border-none outline-none bg-center'/></div>
            <div className='p-2'><RiAccountCircleLine /></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
