import { Info, Minus, MoveLeft, Pencil, Plus, Search, X } from "lucide-react"
import { Link } from "react-router"


function OrderManage() {
    return (
        <div className=" w-full min-h-screen text-xl">
            <div className="flex justify-start items-center gap-2 mb-7">
                <Link to={'/seller/orders'} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
                    <MoveLeft size={20} strokeWidth={2.8} />
                </Link>

                <h1 className="text-[24px] font-semibold tracking-tight">
                    #1102
                    <span className="font-normal text-gray-500">|</span>
                    Jane DSA
                </h1>
            </div>

            {/* grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_245px] not understand  */}

            <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_245px]">
                 <div className="flex flex-col gap-4">
                    <section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[13px] font-semibold">
                                Products
                            </h2>
                            <button className="text-xs text-gray-400 hover:text-gray-600">
                                Reserve Items
                            </button>
                        </div>
                        <div className="mt-2 flex h-9 items-center justify-between rounded-full border border-gray-200 px-3 text-xs text-gray-400">
                            <span>Search product</span>
                            <Search size={19} strokeWidth={1.8} />
                        </div>

                        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_90px_60px] text-xs">
                            <span>Product</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        <div className="grid min-h-[64px] grid-cols-[minmax(0,1fr)_90px_60px] items-center">

              {/* Product information */}
              <div className="flex items-center gap-2.5">
                <div className="h-[60px] w-[74px] shrink-0 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200"
                    alt="Beauty product"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[13px]">
                    Beauty All in one set + Room Fragr...
                  </p>

                  <p className="mt-1.5 text-xs text-gray-600">
                    Size: S
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-black bg-white"
                >
                  <Minus size={12} />
                </button>

                <span className="text-xs">12
                </span>

                <button
                  className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-black text-white"
                >
                  <Plus size={12} />
                </button>
              </div>

              {/* Price */}
              <span className="text-xs">
                $20,00
              </span>
            </div>

            {/* Tracking */}
            <div className="mt-3">
              <label className="mb-1.5 block text-xs">
                Tracking number
              </label>

              <input
                readOnly
                value="9012010129381029"
                className="h-[47px] w-full rounded-[10px] border border-gray-200 px-3 text-[13px] outline-none"
              />
            </div>

            {/* Carrier */}
            <div className="mt-3">
              <label className="mb-1.5 block text-xs">
                Shipping carrier
              </label>

              <input
                readOnly
                value="Indonesia Post"
                className="h-[47px] w-full rounded-[10px] border border-gray-200 px-3 text-[13px] outline-none"
              />
            </div>

            {/* Footer */}
            <div className="mt-3 flex justify-end">
              <button className="h-10 rounded-full border border-gray-200 bg-white px-5 text-xs hover:bg-gray-50">
                Edit fulfill items
              </button>
              </div>
                    </section>

<section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">

            <h2 className="text-[13px] font-semibold">
              Payment
            </h2>

            {/* Search */}
            <div className="mt-2 flex h-9 items-center justify-between rounded-full border border-gray-200 px-3 text-xs text-gray-400">
              <span>Search product</span>
              <Search size={19} strokeWidth={1.8} />
            </div>

            {/* Payment summary */}
            <div className="mt-1.5 rounded-[10px] border border-gray-200 px-3 py-2">

              <div className="flex justify-between py-1 text-xs">
                <span>Subtotal</span>
                <strong className="font-medium">
                  $120,000
                </strong>
              </div>

              <div className="flex justify-between py-1 text-xs">
                <span>Edit discount</span>
                <strong className="font-medium">
                  5%
                </strong>
              </div>

              <div className="flex justify-between py-1 text-xs">
                <span>Edit shipping</span>
                <strong className="font-medium">
                  Free
                </strong>
              </div>

              <div className="mt-1 flex justify-between border-t border-gray-200 pt-2 text-xs">
                <span>Total</span>
                <strong className="font-medium">
                  $150,000
                </strong>
              </div>

            </div>

            {/* Payment later */}
            <label className="mt-1 flex h-[37px] items-center gap-2 rounded-[10px] border border-gray-200 px-3 text-xs text-gray-400">
              <input type="checkbox" />
              Payment due later
            </label>

            {/* Buttons */}
            <div className="mt-1.5 flex flex-wrap justify-end gap-1.5">

              <button className="h-10 rounded-full border border-gray-200 px-5 text-xs hover:bg-gray-50">
                Send invoice
              </button>

              <button className="h-10 rounded-full border border-gray-200 px-5 text-xs hover:bg-gray-50">
                Mark as paid
              </button>

              <button className="h-10 rounded-full bg-[#347ff0] px-5 text-xs text-white hover:bg-blue-600">
                Collect payment
              </button>

            </div>
          </section>



                 </div>
                 <aside className="flex flex-col gap-4">

          {/* ================= NOTES ================= */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">
            <h3 className="mb-2 text-[13px] font-semibold">
              Notes
            </h3>

            <p className="text-xs">
              First customer guys
            </p>
          </section>

          {/* ================= CUSTOMER ================= */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">

            {/* Customer */}
            <div className="mb-5">
              <h3 className="mb-1.5 text-[13px] font-semibold">
                Customer
              </h3>

              <p className="text-xs">
                Jane Doe
              </p>

              <span className="text-xs text-gray-400">
                No orders
              </span>
            </div>

            {/* Contact */}
            <div className="mb-5">
              <div className="mb-1.5 flex items-center justify-between">
                <h3 className="text-[13px] font-semibold">
                  Contact Info
                </h3>

                <Pencil size={16} strokeWidth={1.8} />
              </div>

              <p className="text-xs">
                cust@mail.com
              </p>

              <span className="text-xs text-gray-400">
                No phone number
              </span>
            </div>

            {/* Shipping */}
            <div className="mb-5">
              <h3 className="mb-1.5 text-[13px] font-semibold">
                Shipping address
              </h3>

              <p className="text-xs leading-5 text-gray-400">
                12 Street, London, Indonesia, 8129812
              </p>
            </div>

            {/* Billing */}
            <div>
              <h3 className="mb-1.5 text-[13px] font-semibold">
                Billing address
              </h3>

              <p className="text-xs text-gray-400">
                Same as shipping address
              </p>
            </div>
          </section>

          {/* ================= TAGS ================= */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">

            <h3 className="mb-2 text-[13px] font-semibold">
              Tags
            </h3>

            <div className="flex h-[43px] items-center rounded-full border border-gray-200 px-2.5">

              <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1.5 text-xs">
                Customers

                <X size={14} />
              </span>

            </div>
          </section>

          {/* ================= FRAUD ================= */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-[15px]">

            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold">
                Fraud analysis
              </h3>

              <Info size={17} strokeWidth={1.8} />
            </div>

            {/* Progress */}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-1/4 rounded-full bg-green-500" />
            </div>

            <div className="-mt-1.5 text-right text-xs">
              Safe!
            </div>

          </section>

        </aside>
            </div>


        </div>
    )
}

export default OrderManage
