import { useSeller } from "../context/SellerContext";


function Products() {
  const { ListedProduct } = useSeller();
  console.log(ListedProduct);
  
  return (

      <div className="w-full">
  {/* =========================
      HEADER
  ========================== */}
  <div className="flex flex-col gap-4 mb-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Products
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Manage your listed products
      </p>
    </div>

    <button
      type="button"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-yellow-400
        px-4
        py-2.5
        text-sm
        font-medium
        hover:bg-yellow-500
        text-black
        cursor-pointer
        transition-colors
      "
    >
      + Add product
    </button>
  </div>


  {/* =========================
      SEARCH + FILTERS
  ========================== */}
  <div className="flex flex-col gap-3 mb-4 sm:flex-row">

    {/* Search */}
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search products..."
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-2.5
          text-sm
          outline-none
          placeholder:text-gray-400
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-100
          transition-all
        "
      />
    </div>


    {/* Filter */}
    <button
      type="button"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-gray-200
        bg-white
        px-4
        py-2.5
        text-sm
        text-gray-700
        hover:bg-gray-50
        transition-colors
        cursor-pointer
      "
    >
      Filter
    </button>


    {/* Sort */}
    <button
      type="button"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-gray-200
        bg-white
        px-4
        py-2.5
        text-sm
        text-gray-700
        hover:bg-gray-50
        transition-colors
        cursor-pointer
      "
    >
      Sort
    </button>

  </div>


  {/* =========================
      PRODUCT TABLE
  ========================== */}
  <div className="
    overflow-hidden
    rounded-xl
    border
    border-gray-200
    bg-white
  ">

    <div className="overflow-x-auto">

      <table className="w-full text-left text-sm">

        {/* =========================
            TABLE HEADER
        ========================== */}
        <thead className="
          border-b
          border-gray-200
          bg-gray-50
        ">

          <tr>

            <th className="px-5 py-3.5">
              <input
                type="checkbox"
                className="cursor-pointer"
              />
            </th>


            <th className="
              px-5
              py-3.5
              text-xs
              font-medium
              text-gray-500
            ">
              Product
            </th>


            <th className="
              px-5
              py-3.5
              text-xs
              font-medium
              text-gray-500
            ">
              Inventory
            </th>


            <th className="
              px-5
              py-3.5
              text-xs
              font-medium
              text-gray-500
            ">
              Price
            </th>


            <th className="
              px-5
              py-3.5
              text-xs
              font-medium
              text-gray-500
            ">
              Status
            </th>


            <th className="px-5 py-3.5"></th>

          </tr>

        </thead>


        {/* =========================
            TABLE BODY
        ========================== */}
        <tbody className="divide-y divide-gray-100">

          {/* =========================
              EMPTY STATE
          ========================== */}

          {ListedProduct.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="px-5 py-16 text-center"
              >

                <div className="
                  flex
                  flex-col
                  items-center
                  justify-center
                ">

                  <div className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-50
                    text-yellow-600
                    mb-4
                  ">
                    📚
                  </div>


                  <h3 className="
                    text-base
                    font-semibold
                    text-gray-800
                  ">
                    No Products Found
                  </h3>


                  <p className="
                    mt-1
                    text-sm
                    text-gray-500
                  ">
                    You haven't listed any products yet.
                  </p>


                  <button
                    type="button"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-yellow-400
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-black
                      hover:bg-yellow-500
                      cursor-pointer
                      transition-colors
                    "
                  >
                    + Add your first product
                  </button>

                </div>

              </td>

            </tr>

          ) : (

            /* =========================
                PRODUCTS
            ========================== */

            ListedProduct.map((product) => (

              <tr
                key={product.id}
                className="
                  hover:bg-gray-50
                  transition-colors
                "
              >

                {/* Checkbox */}

                <td className="px-5 py-4">

                  <input
                    type="checkbox"
                    className="cursor-pointer"
                  />

                </td>


                {/* =========================
                    PRODUCT
                ========================== */}

                <td className="px-5 py-4">

                  <div className="
                    flex
                    items-center
                    gap-3
                  ">

                    <div className="
                      h-12
                      w-12
                      shrink-0
                      overflow-hidden
                      rounded-lg
                      bg-gray-100
                    ">

                      <img
                        src={product?.imageURL}
                        alt={product?.name || "Product"}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />

                    </div>


                    <div className="min-w-0">

                      <p className="
                        font-medium
                        text-gray-900
                        truncate
                        max-w-[250px]
                      ">
                        {product?.name}
                      </p>


                      <p className="
                        text-xs
                        text-gray-500
                        mt-1
                      ">
                        SKU-{product?.id?.slice(0, 8)}
                      </p>

                    </div>

                  </div>

                </td>


                {/* =========================
                    INVENTORY
                ========================== */}

                <td className="
                  px-5
                  py-4
                  whitespace-nowrap
                ">

                  <span
                    className={
                      product?.stock < 1
                        ? "text-red-600 font-medium"
                        : "text-gray-700"
                    }
                  >
                    {product?.stock ?? 0} in stock
                  </span>

                </td>


                {/* =========================
                    PRICE
                ========================== */}

                <td className="
                  px-5
                  py-4
                  font-medium
                  text-gray-900
                  whitespace-nowrap
                ">

                  ₹
                  {Number(product?.price || 0).toFixed(2)}

                </td>


                {/* =========================
                    STATUS
                ========================== */}

                <td className="px-5 py-4">

                  {product?.stock < 1 ? (

                    <span className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-red-50
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-red-700
                    ">
                      All Sold Out
                    </span>

                  ) : (

                    <span className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-green-50
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-green-700
                    ">
                      Active
                    </span>

                  )}

                </td>


                {/* =========================
                    ACTIONS
                ========================== */}

                <td className="
                  px-5
                  py-4
                  text-right
                ">

                  <button
                    type="button"
                    className="
                      rounded-lg
                      px-2
                      py-1
                      text-gray-500
                      hover:bg-gray-100
                      hover:text-gray-900
                      cursor-pointer
                    "
                  >
                    ⋮
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  </div>

</div>

  );
}

export default Products;
