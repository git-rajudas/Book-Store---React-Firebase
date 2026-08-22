import { RiDeleteBin6Line, RiSecurePaymentFill } from '@remixicon/react'
import { useCart } from '../context/CartContext';
import { Link, NavLink } from 'react-router';

function Cart() {
  const {
    loading,
    cartItems,
    totalAmount,
    totalQuantity,
    removeItem
  } = useCart();

  console.log(cartItems);

  if (loading) {
    return (
      
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-400" />

        <p className="text-sm font-medium text-gray-500">
          Loading cart...
        </p>
      </div>
    </div>
    )
  }
  return (
     <div className="min-h-screen bg-gray-50">
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Your Shopping Cart
          </p>

          <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Cart
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Review your selected books before placing your order.
              </p>
            </div>

            {cartItems.length > 0 && (
              <span className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                {totalQuantity}{" "}
                {totalQuantity === 1 ? "item" : "items"}
              </span>
            )}
          </div>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-50">
              <span className="text-4xl">🛒</span>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Looks like you haven't added any books to your cart yet.
              Explore our collection and find your next great read.
            </p>

            <NavLink
              to="/"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-yellow-400 hover:text-gray-900 active:scale-95"
            >
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                {/* Desktop Header */}
                <div className="hidden grid-cols-[1fr_100px_100px_50px] gap-4 border-b border-gray-100 bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:grid">
                  <div>Product</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Price</div>
                  <div />
                </div>

                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 transition-colors hover:bg-gray-50 sm:px-6"
                    >
                      <div className="flex items-center gap-4">

                        {/* Image */}
                        <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <img
                            className="h-full w-full object-cover"
                            src={item.imageURL}
                            alt={item.title || item.name}
                          />
                        </div>

                        {/* Product info */}
                        <div className="min-w-0 flex-1">
                          <h2 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                            {item.title || item.name}
                          </h2>

                          {item.sellerName && (
                            <p className="mt-1 text-sm text-gray-500">
                              Seller: {item.sellerName}
                            </p>
                          )}

                          {/* Mobile quantity + price */}
                          <div className="mt-3 flex items-center justify-between sm:hidden">
                            <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-600">
                              Qty: {item.quantity}
                            </span>

                            <span className="font-bold text-gray-900">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>

                        {/* Desktop quantity */}
                        <div className="hidden w-[100px] text-center sm:block">
                          <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700">
                            {item.quantity}
                          </span>
                        </div>

                        {/* Desktop price */}
                        <div className="hidden w-[100px] text-right sm:block">
                          <span className="font-bold text-gray-900">
                            ₹{item.price}
                          </span>
                        </div>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-red-50 hover:text-red-500 active:scale-95"
                          aria-label={`Remove ${
                            item.title || item.name
                          } from cart`}
                        >
                          <RiDeleteBin6Line className="text-xl" />
                        </button>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-5">
                <NavLink
                  to="/"
                  className="inline-flex items-center text-sm font-semibold text-gray-600 transition-colors hover:text-yellow-600"
                >
                  ← Continue Shopping
                </NavLink>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                  <div className="mt-6 space-y-4">

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Total Items</span>
                      <span className="font-medium text-gray-900">
                        {totalQuantity}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">
                        ₹{totalAmount}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Shipping</span>
                      <span className="font-medium text-green-600">
                        Calculated at checkout
                      </span>
                    </div>

                  </div>

                  <div className="my-6 border-t border-gray-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-gray-900">
                      ₹{totalAmount}
                    </span>
                  </div>

                  <Link
                    to="/checkout"
                    className="mt-6 flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-yellow-400 hover:text-gray-900 active:scale-[0.98]"
                  >
                    Proceed to Checkout
                  </Link>

                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-green-50 p-4">
                    <RiSecurePaymentFill className="mt-0.5 shrink-0 text-lg text-green-600" />

                    <p className="text-xs leading-5 text-green-700">
                      Secure checkout. Your personal information is protected.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  </div>
  )
}

export default Cart
