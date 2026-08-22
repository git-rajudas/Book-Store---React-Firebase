
import { RiTruckLine, RiBox1Fill, RiDiscountPercentLine, RiSecurePaymentFill, RiCashLine, RiWallet3Line } from "@remixicon/react"
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../services/user.services";
import { useCart } from "../context/CartContext";
import { createOrder, createOrderForMultipleItems,  } from "../services/order.services";
import { useNavigate, useParams } from "react-router";
import { getProduct } from "../services/product.services";


function CheckoutPage() {
    const { user, loading } = useAuth();
    const { ItemId } = useParams();
    const navigate = useNavigate();
    const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100";
    const [item, setItem] = useState(null);



    const [userData, setUserData] = useState({
        displayName: "",
        email: "",
        phoneNumber: "",
    })
    const [shippingAddress, setShippingAddress] = useState({
        addressLine1: "",
        addressLine2: "",
        country: "",
        city: "",
        landMark: "",
        pincode: "",
        state: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [shippingMethod, setShippingMethod] = useState("delivery");

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                if (!user) return;
                const userdetails = await getUser(user.uid);
                setShippingAddress(userdetails.shippingAddress);
                const UserData = {
                    displayName: userdetails.displayName,
                    email: userdetails.email,
                    phoneNumber: userdetails.phoneNumber,
                }
                setUserData(UserData);
            } catch (error) {
                console.log(error);
                throw new error;
            }

        }
        fetchUserData();
    }, [user]);

    // Single Book Details Fetching

    useEffect(()=>{
        const fetchSingleItem = async() =>{
            if(!ItemId) return;
            try{
                const data = await getProduct(ItemId);
                setItem(data);
            }catch(error){
                console.log(error);
            }
        }

        fetchSingleItem();
    },[ItemId]);

    const { cartItems, totalAmount, totalAmountWithShippingCharge, totalQuantity,clearCartItems } = useCart();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setShippingAddress((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(ItemId){
                const orderId = await createOrder(user,item,shippingAddress,shippingMethod, paymentMethod) 
                if(!orderId){
                  return;
                }
                
                navigate(`/order-success/${orderId}`);
                
            }else{
                const orderId = await createOrderForMultipleItems(user,cartItems,shippingAddress,shippingMethod, paymentMethod);
                await clearCartItems(user);

                if(!orderId){
                  return;
                }
                
                navigate(`/order-success/${orderId}`);
            }
            
        }catch(error){
            console.log(error);
        }
    }

    
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-400" />

          <p className="text-sm font-medium text-gray-500">
            Loading checkout...
          </p>
        </div>
      </div>
        )
    }
    
    
        
    return (
      <div className="min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

          {/* PAGE HEADER */}
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
              Checkout
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete your order
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your shipping details and review your order before placing
              it.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

            {/* =========================================================
                LEFT SIDE — SHIPPING INFORMATION
            ========================================================= */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

                {/* Section heading */}
                <div className="mb-7">
                  <h2 className="text-xl font-bold text-gray-900">
                    Shipping Information
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>

                {/* SHIPPING METHOD */}
                <div className="mb-8">
                  <h3 className="mb-3 text-sm font-semibold text-gray-900">
                    Shipping Method
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* DELIVERY */}
                    <label
                      htmlFor="delivery"
                      className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
                        shippingMethod === "delivery"
                          ? "border-yellow-400 bg-yellow-50 shadow-sm"
                          : "border-gray-200 bg-white hover:border-yellow-300"
                      }`}
                    >
                      <input
                        type="radio"
                        id="delivery"
                        name="shipping"
                        checked={shippingMethod === "delivery"}
                        onChange={() => setShippingMethod("delivery")}
                        className="sr-only"
                      />

                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                            shippingMethod === "delivery"
                              ? "bg-yellow-400 text-gray-900"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <RiTruckLine className="text-xl" />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            Delivery
                          </p>

                          <p className="mt-0.5 text-xs text-gray-500">
                            ₹50 shipping
                          </p>
                        </div>
                      </div>
                    </label>

                    {/* PICKUP */}
                    <label
                      htmlFor="pickup"
                      className="cursor-not-allowed rounded-2xl border-2 border-gray-200 bg-gray-100 p-4 opacity-60"
                    >
                      <input
                        disabled
                        type="radio"
                        id="pickup"
                        name="shipping"
                        checked={shippingMethod === "pickup"}
                        onChange={() => setShippingMethod("pickup")}
                        className="sr-only"
                      />

                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                          <RiBox1Fill className="text-xl" />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-700">
                            Pick Up
                          </p>

                          <p className="mt-0.5 text-xs text-gray-500">
                            Coming soon
                          </p>
                        </div>
                      </div>
                    </label>

                  </div>
                </div>

                {/* CONTACT INFORMATION */}
                <div className="mb-8">
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900">
                      Contact Information
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      We'll use these details to contact you about your order.
                    </p>
                  </div>

                  <div className="space-y-5">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>

                      <input
                        name="displayName"
                        onChange={handleChange}
                        value={userData.displayName}
                        className={inputClass}
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>

                      <input
                        name="email"
                        onChange={handleChange}
                        value={userData.email}
                        className={inputClass}
                        type="email"
                        id="email"
                        placeholder="email@example.com"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>

                      <input
                        name="phoneNumber"
                        onChange={handleChange}
                        value={userData.phoneNumber}
                        className={inputClass}
                        type="tel"
                        id="phoneNumber"
                        placeholder="9876543210"
                      />
                    </div>

                  </div>
                </div>

                {/* SHIPPING ADDRESS */}
                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900">
                      Shipping Address
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Enter the address where you want your order delivered.
                    </p>
                  </div>

                  <div className="space-y-5">

                    {/* ADDRESS LINE 1 */}
                    <div>
                      <label
                        htmlFor="add1"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Address Line 1
                      </label>

                      <input
                        name="addressLine1"
                        onChange={handleChange}
                        value={shippingAddress.addressLine1}
                        className={inputClass}
                        type="text"
                        id="add1"
                        placeholder="Building number, apartment, house number"
                      />
                    </div>

                    {/* ADDRESS LINE 2 */}
                    <div>
                      <label
                        htmlFor="add2"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Address Line 2
                      </label>

                      <input
                        name="addressLine2"
                        onChange={handleChange}
                        value={shippingAddress.addressLine2}
                        className={inputClass}
                        type="text"
                        id="add2"
                        placeholder="Street, locality, landmark"
                      />
                    </div>

                    {/* COUNTRY */}
                    <div>
                      <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>

                      <select
                        className={inputClass}
                        name="country"
                        id="country"
                        value={shippingAddress.country || "IN"}
                        onChange={handleChange}
                      >
                        <option value="IN">India</option>
                      </select>
                    </div>

                    {/* CITY / STATE / PINCODE */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

                      {/* CITY */}
                      <div>
                        <label
                          htmlFor="city"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>

                        <input
                          name="city"
                          onChange={handleChange}
                          value={shippingAddress.city}
                          className={inputClass}
                          id="city"
                          type="text"
                          placeholder="Kolkata"
                        />
                      </div>

                      {/* STATE */}
                      <div>
                        <label
                          htmlFor="state"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>

                        <input
                          name="state"
                          onChange={handleChange}
                          value={shippingAddress.state}
                          className={inputClass}
                          id="state"
                          type="text"
                          placeholder="West Bengal"
                        />
                      </div>

                      {/* PINCODE */}
                      <div>
                        <label
                          htmlFor="pincode"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Pincode
                        </label>

                        <input
                          name="pincode"
                          onChange={handleChange}
                          value={shippingAddress.pincode}
                          className={inputClass}
                          id="pincode"
                          type="text"
                          placeholder="700001"
                        />
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =========================================================
                RIGHT SIDE — ORDER SUMMARY
            ========================================================= */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-6">

                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                  {/* SUMMARY HEADER */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Order Summary
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Review your items
                      </p>
                    </div>

                    <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                      {item
                        ? "1 item"
                        : `${totalQuantity || 0} items`}
                    </div>
                  </div>

                  {/* SELECTED ITEM / CART */}
                  <div className="space-y-4">

                    {item ? (
                      <div className="flex gap-4 border-b border-gray-100 pb-5">

                        <img
                          className="h-20 w-16 shrink-0 rounded-xl object-cover"
                          src={item.imageURL}
                          alt={item.title || item.name}
                        />

                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-2 font-semibold text-gray-900">
                            {item.title || item.name}
                          </h3>

                          {item.sellerName && (
                            <p className="mt-1 text-xs text-gray-500">
                              Seller: {item.sellerName}
                            </p>
                          )}

                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Qty: 1
                            </span>

                            <span className="font-semibold text-gray-900">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>

                      </div>
                    ) : cartItems.length === 0 ? (

                      <div className="rounded-2xl bg-gray-50 px-5 py-8 text-center">
                        <p className="text-sm font-medium text-gray-600">
                          Your cart is empty.
                        </p>
                      </div>

                    ) : (

                      cartItems.map((cartItem) => (
                        <div
                          key={cartItem.id}
                          className="flex gap-4 border-b border-gray-100 pb-5 last:border-0"
                        >

                          <img
                            className="h-20 w-16 shrink-0 rounded-xl object-cover"
                            src={cartItem.imageURL}
                            alt={cartItem.title || cartItem.name}
                          />

                          <div className="min-w-0 flex-1">
                            <h3 className="line-clamp-2 font-semibold text-gray-900">
                              {cartItem.title || cartItem.name}
                            </h3>

                            {cartItem.sellerName && (
                              <p className="mt-1 text-xs text-gray-500">
                                Seller: {cartItem.sellerName}
                              </p>
                            )}

                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                Qty: {cartItem.quantity}
                              </span>

                              <span className="font-semibold text-gray-900">
                                ₹{cartItem.price}
                              </span>
                            </div>
                          </div>

                        </div>
                      ))

                    )}

                  </div>

                  {/* DISCOUNT */}
                  <div className="mt-6">
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-100">

                      <RiDiscountPercentLine className="shrink-0 text-xl text-gray-400" />

                      <input
                        className="min-w-0 flex-1 border-none bg-transparent text-sm outline-none placeholder:text-gray-400"
                        type="text"
                        placeholder="Discount code"
                      />

                      <button
                        type="button"
                        className="shrink-0 text-sm font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
                      >
                        Apply
                      </button>

                    </div>
                  </div>

                  {/* PRICE SUMMARY */}
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Total Quantity</span>

                      <span className="font-medium text-gray-900">
                        x{item ? 1 : totalQuantity}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>

                      <span className="font-medium text-gray-900">
                        ₹{item ? item.price : totalAmount}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Shipping</span>

                      <span className="font-medium text-gray-900">
                        ₹50
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>

                      <span className="font-medium">
                        ₹0
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-gray-900">
                        ₹
                        {item
                          ? Number(item.price) + 50
                          : totalAmountWithShippingCharge}
                      </span>
                    </div>

                  </div>

                  {/* PAYMENT METHOD */}
                  <div className="mt-7">
                    <h3 className="mb-3 text-sm font-semibold text-gray-900">
                      Payment Method
                    </h3>

                    <div className="space-y-3">

                      {/* COD */}
                      <label
                        htmlFor="COD"
                        className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                          paymentMethod === "COD"
                            ? "border-yellow-400 bg-yellow-50"
                            : "border-gray-200 bg-white hover:border-yellow-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">

                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              paymentMethod === "COD"
                                ? "bg-yellow-400 text-gray-900"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            <RiCashLine className="text-xl" />
                          </div>

                          <div>
                            <p className="font-medium text-gray-900">
                              Cash on Delivery
                            </p>

                            <p className="mt-0.5 text-xs text-gray-500">
                              Pay when your order arrives
                            </p>
                          </div>

                        </div>

                        <input
                          type="radio"
                          id="COD"
                          checked={paymentMethod === "COD"}
                          onChange={() => setPaymentMethod("COD")}
                          name="payment"
                          className="h-4 w-4 accent-yellow-400"
                        />
                      </label>

                      {/* UPI */}
                      <div className="flex cursor-not-allowed items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 opacity-60">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                            <RiWallet3Line className="text-xl" />
                          </div>

                          <div>
                            <p className="font-medium text-gray-700">
                              UPI
                            </p>

                            <p className="mt-0.5 text-xs text-gray-500">
                              Online payment coming soon
                            </p>
                          </div>

                        </div>

                        <span className="rounded-full bg-gray-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                          Soon
                        </span>

                      </div>

                    </div>
                  </div>

                  {/* ORDER BUTTON */}
                  <button
                    type="submit"
                    className="mt-7 flex w-full items-center justify-center rounded-xl bg-gray-900 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-yellow-400 hover:text-gray-900 active:scale-[0.98]"
                  >
                    Place Order
                  </button>

                  {/* SECURITY MESSAGE */}
                  <div className="mt-6 border-t border-gray-100 pt-5">

                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                        <RiSecurePaymentFill className="text-lg" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Secure Checkout
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Your personal and payment information is protected
                          during checkout.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
    );
}

export default CheckoutPage
