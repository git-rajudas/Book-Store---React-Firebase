import { RiCheckboxCircleLine, RiAccountCircle2Line } from "@remixicon/react";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getOrder } from "../services/order.services";
import { Link, useParams } from "react-router";

function OrderSuccess() {
  const { orderId } = useParams();
  const { user } = useAuth();
  const [orderData, setOrder] = useState("");
  console.log(orderId);

  useEffect(() => {
    if (!user) return;
    const fetchOrder = async () => {
      const orderDetails = await getOrder(orderId);
      setOrder(orderDetails);
    };
    fetchOrder();
  }, [user]);

  const address = orderData.deliveryAddress;

  const totalQuantity = orderData?.items?.reduce(
    (sum, item) => sum + Number(item.quantity),
    0,
  );
  const totalAmount = orderData?.items?.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );
  const totalAmountWithShippingCharge = Number(totalAmount + 50);

  console.log(orderData);
  return (
     <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">

      {/* =====================================================
          SUCCESS HEADER
      ===================================================== */}
      <div className="mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <RiCheckboxCircleLine size={45} />
          </div>
        </div>

        <h1 className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank you for your purchase!
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          Your order has been successfully placed. We'll process your order
          within 24 hours and notify you by email once it has been shipped.
        </p>

        {/* Order ID */}
        {orderData?.id && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-gray-200">
            <span className="text-gray-500">Order ID:</span>

            <span className="font-semibold text-gray-900">
              #{orderData.id.slice(0, 8)}
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">

        {/* ===================================================
            LEFT — SHIPPING DETAILS
        =================================================== */}
        <div className="lg:col-span-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            {/* Header */}
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                Delivery
              </p>

              <h2 className="mt-1 text-xl font-bold text-gray-900">
                Shipping Details
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your order will be delivered to this address.
              </p>
            </div>

            {/* Customer Information */}
            <div className="space-y-5">

              {/* Name */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Name
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {orderData?.buyerName || "—"}
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Email
                </p>

                <p className="mt-1 break-all font-medium text-gray-900">
                  {orderData?.buyerEmail || "—"}
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Phone
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {orderData?.buyerPhone || orderData?.phoneNumber || "—"}
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Shipping Address
                </p>

                <div className="mt-2 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                  {address?.addressLine1 && (
                    <div>{address.addressLine1}</div>
                  )}

                  {address?.addressLine2 && (
                    <div>{address.addressLine2}</div>
                  )}

                  {address?.landmark && (
                    <div>{address.landmark}</div>
                  )}

                  <div>
                    {[
                      address?.city,
                      address?.state,
                      address?.pincode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </div>

                  {address?.country && (
                    <div>{address.country}</div>
                  )}
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="my-7 border-t border-gray-100" />

            {/* Delivery message */}
            <div className="rounded-2xl bg-yellow-50 p-4">
              <p className="text-sm font-semibold text-gray-900">
                Estimated processing
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-600">
                Your order will be processed within 24 hours. You'll receive
                an email when your order has been shipped.
              </p>
            </div>

          </div>
        </div>

        {/* ===================================================
            RIGHT — ORDER SUMMARY
        =================================================== */}
        <div className="lg:col-span-3">

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Order
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Order Summary
                </h2>
              </div>

              <div className="flex gap-3">

                {/* Date */}
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Date
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-900">
                    {orderData?.createdAt?.toDate
                      ? orderData.createdAt
                          .toDate()
                          .toLocaleString("en-IN", {
                            dateStyle: "medium",
                          })
                      : "—"}
                  </p>
                </div>

                {/* Payment */}
                <div className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Payment
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-900">
                    {orderData?.paymentMethod || "—"}
                  </p>
                </div>

              </div>
            </div>

            {/* =================================================
                PRODUCTS
            ================================================= */}
            <div className="mt-8">

              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Items
              </h3>

              <div className="space-y-3">

                {orderData?.items ? (
                  orderData.items.map((item, index) => (
                    <div
                      key={item?.id || index}
                      className="flex gap-4 rounded-2xl border border-gray-100 p-4 transition-colors hover:bg-gray-50"
                    >

                      {/* Image */}
                      <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          className="h-full w-full object-cover"
                          src={item?.productImage}
                          alt={item?.productTitle || "Product"}
                        />
                      </div>

                      {/* Product info */}
                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                          <div>
                            <h4 className="line-clamp-2 text-sm font-semibold text-gray-900">
                              {item?.productTitle || "Product"}
                            </h4>

                            {item?.sellerName && (
                              <p className="mt-1 text-xs text-gray-500">
                                Seller: {item.sellerName}
                              </p>
                            )}
                          </div>

                          <p className="shrink-0 font-semibold text-gray-900">
                            ₹{item?.price}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-between">

                          <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                            Qty: {item?.quantity || 1}
                          </span>

                          <span className="text-xs text-gray-400">
                            Book
                          </span>

                        </div>

                      </div>
                    </div>
                  ))
                ) : (
                  /* Single product order */
                  <div className="flex gap-4 rounded-2xl border border-gray-100 p-4">

                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        className="h-full w-full object-cover"
                        src={orderData?.productImage}
                        alt={orderData?.productTitle || "Product"}
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">

                      <div>
                        <h4 className="line-clamp-2 text-sm font-semibold text-gray-900">
                          {orderData?.productTitle || "Product"}
                        </h4>

                        {orderData?.sellerName && (
                          <p className="mt-1 text-xs text-gray-500">
                            Seller: {orderData.sellerName}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between">

                        <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                          Qty: {orderData?.quantity || 1}
                        </span>

                        <span className="font-semibold text-gray-900">
                          ₹{orderData?.price}
                        </span>

                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* =================================================
                PRICE BREAKDOWN
            ================================================= */}
            <div className="mt-7 border-t border-gray-100 pt-6">

              {orderData?.items ? (
                <>

                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Total Quantity</span>
                    <span className="font-medium text-gray-900">
                      x{totalQuantity}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ₹{totalAmount}
                    </span>
                  </div>

                </>
              ) : (
                <>

                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Total Quantity</span>
                    <span className="font-medium text-gray-900">
                      x{orderData?.quantity || 1}
                    </span>
                  </div>

                  <div className="flex justify-between py-2 text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ₹{orderData?.price}
                    </span>
                  </div>

                </>
              )}

              {/* Shipping */}
              <div className="flex justify-between py-2 text-sm text-gray-500">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">
                  ₹50
                </span>
              </div>

              {/* Discount */}
              <div className="flex justify-between py-2 text-sm text-gray-500">
                <span>Discount</span>
                <span className="font-medium text-green-600">
                  ₹0
                </span>
              </div>

              {/* Total */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-5">

                <span className="text-lg font-bold text-gray-900">
                  Order Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ₹
                  {orderData?.items
                    ? totalAmountWithShippingCharge
                    : Number(orderData?.price || 0) + 50}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER ACTION
      ===================================================== */}
      <div className="mt-10 flex justify-center">

        <Link
          to="/my-account"
          className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-semibold text-gray-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md active:scale-95"
        >
          <span>Go To My Account</span>

          <RiAccountCircle2Line
            size={21}
            className="transition-transform group-hover:scale-110"
          />
        </Link>

      </div>

    </div>
  </div>
  );
}

export default OrderSuccess;
