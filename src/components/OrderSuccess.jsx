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
    <div className="w-full h-full flex flex-col pb-50">
      <div className="flex justify-center items-center my-10">
        <RiCheckboxCircleLine size={100} />
      </div>
      <div className="w-full h-full flex justify-between gap-5 px-40 ">
        <div className="w-1/2 mt-15 p-10 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            Thank you for your purchase!
          </h1>
          <p className="text-sm text-gray-500 ">
            Your order will be processed within 24 hours. We will notify you by
            email once your order has been shipped.
          </p>

          <div className="pt-5 flex flex-col ">
            <div className="text-base font-semibold">
              Billing Address / Shipping Address
            </div>
            <div className="flex justify-between gap-10 pt-5">
              <div className="flex flex-col gap-5">
                <div className="font-semibold">Name</div>
                <div className="font-semibold">Email</div>
                <div className="font-semibold">Phone</div>
                <div className="font-semibold">Address</div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-gray-600">{orderData?.buyerName}</div>
                <div className="text-gray-600">{orderData.buyerEmail}</div>
                <div className="text-gray-600">987654321</div>
                <div className="text-gray-600">
                  {address?.addressLine1}, {address?.addressLine2},{" "}
                  {address?.landmark}, {address?.city}, {address?.state},{" "}
                  {address?.country}
                </div>
              </div>
            </div>
            <div className="pt-10">
              {/* <button className="bg-yellow-400 px-6 py-3 rounded-2xl text-gray-600 cursor-pointer">Track Your Order</button> */}
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-15 p-10 flex flex-col">
          <div className="text-xl font-semibold">Order Summary</div>
          <div className="flex justify-evenly gap-5 w-full my-10">
            <div className="flex flex-col gap-1 px-3 bg-white ">
              <div className="text-gray-500 text-base">Date</div>
              <div className="text-sm">
                {orderData?.createdAt?.toDate().toLocaleString("en-IN", {
                  dateStyle: "medium",
                })}
              </div>
            </div>
            <div className="flex flex-col gap-1 px-3 bg-white border-l-2 border-gray-300">
              <div className="text-gray-500 text-base">Order ID:</div>
              <div className="text-sm">{orderData?.id?.slice(0, 5)}</div>
            </div>
            <div className="flex flex-col gap-1 px-3 bg-white border-l-2 border-gray-300">
              <div className="text-gray-500 text-base">Payment Method</div>
              <div className="text-sm">{orderData.paymentMethod}</div>
            </div>
          </div>

          {orderData.items ? (
            orderData.items.map((item) => (
              <div className="flex w-full">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex w-full justify-items-start gap-2 rounded-2xl border-2 border-yellow-600 mb-4 p-4">
                    <img
                      className="w-[80px] h-[80px] border-2 border-yellow-500 rounded-xl"
                      src={item?.productImage}
                      alt=""
                    />
                    <div className="flex flex-col justify-between w-[2/3]">
                      <div className="text-base font-light">
                        {item?.productTitle}
                      </div>
                      <div className="text-sm text-gray-600">
                        Seller: {item?.sellerName}
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>x1</div>
                        <div>₹{item?.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex w-full">
              <div className="w-full flex flex-col gap-2">
                <div className="flex w-full justify-items-start gap-2 rounded-2xl border-2 border-yellow-600 mb-4 p-4">
                  <img
                    className="w-[80px] h-[80px] border-2 border-yellow-500 rounded-xl"
                    src={orderData?.productImage}
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-[2/3]">
                    <div className="text-base font-light">
                      {orderData?.productTitle}
                    </div>
                    <div className="text-sm text-gray-600">
                      Seller: {orderData?.sellerName}
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>x1</div>
                      <div>₹{orderData?.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {orderData.items ? (
            <div className="w-full flex flex-col gap-2 my-5">
              <div className="flex justify-between items-center text-base text-gray-600 font-semibold ">
                <div>Total Quantity:</div>
                <div>x{totalQuantity}</div>
              </div>

              <div className="flex justify-between items-center text-base text-gray-600 ">
                <div>Subtotal:</div>
                <div>₹{totalAmount}</div>
              </div>

              <div className="flex justify-between items-center  text-base text-gray-600">
                <div>Shipping:</div>
                <div>₹50</div>
              </div>
              <div className="flex justify-between items-center  text-base text-gray-600">
                <div>Discount</div>
                <div>₹-</div>
              </div>

              <div className="flex justify-between items-center  text-base font-semibold">
                <div>Order Total</div>
                <div>₹{totalAmountWithShippingCharge}</div>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2 my-5">
              <div className="flex justify-between items-center text-base text-gray-600 font-semibold ">
                <div>Total Quantity:</div>
                <div>x{orderData?.quantity}</div>
              </div>

              <div className="flex justify-between items-center text-base text-gray-600 ">
                <div>Subtotal:</div>
                <div>₹{orderData?.price}</div>
              </div>

              <div className="flex justify-between items-center  text-base text-gray-600">
                <div>Shipping:</div>
                <div>₹50</div>
              </div>
              <div className="flex justify-between items-center  text-base text-gray-600">
                <div>Discount</div>
                <div>₹-</div>
              </div>

              <div className="flex justify-between items-center  text-base font-semibold">
                <div>Order Total</div>
                <div>₹</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Link to={'/my-account'} className="flex justify-center items-center gap-2 text-xl my-10 ">
      <div className="flex justify-center items-center gap-2 bg-yellow-400 px-6 py-3 rounded-2xl cursor-pointer">
      <div className="flex justify-center items-center pt-2">Go To My Account </div> <RiAccountCircle2Line />
      </div>
      </Link>
    </div>
  );
}

export default OrderSuccess;
