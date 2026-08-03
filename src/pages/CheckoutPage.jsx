import Navbar from "../components/Navbar"
import { RiTruckLine, RiBox1Fill, RiDiscountPercentLine, RiSecurePaymentFill, RiCashLine, RiWallet3Line } from "@remixicon/react"
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../services/user.services";
import { useCart } from "../context/CartContext";
import { createOrderForMultipleItems } from "../services/order.services";
function CheckoutPage() {
    const { user, loading } = useAuth();

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

    const { cartItems, totalAmount, totalAmountWithShippingCharge, totalQuantity } = useCart();

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
            
            await createOrderForMultipleItems(user,cartItems,shippingAddress,shippingMethod, paymentMethod);

        }catch(error){
            console.log(error);
        }
    }

    
    if (loading) {
        return (
            <div className="w-full h-full flex justify-center items-center">Loading....</div>
        )
    }
    
    
        
    return (
        <div className="w-full">
            <Navbar />
            <form onSubmit={handleSubmit}>
            <div className="w-full flex items-start">
                <div className="w-1.8/3 mx-10 my-20 px-10  flex flex-col">
                    <div className="text-3xl py-5">Checkout</div>
                    <div className="text-2xl py-2">Shipping Information</div>
                    <div className="w-full flex justify-between items-center gap-2 my-4">
                        <label htmlFor="delivery" className="w-1/2 bg-yellow-50 px-10 py-5 rounded-2xl flex justify-start items-center gap-2 border-2 border-yellow-400 cursor-pointer">
                            <input type="radio" id="delivery" name="shipping" checked={shippingMethod === "delivery"} onChange={()=> setShippingMethod("delivery")}></input>
                            <div className="flex text-sm justify-center items-center gap-1"><RiTruckLine />Delivery</div>
                        </label>
                        <label htmlFor="pickup" className="w-1/2 bg-yellow-50 px-10 py-5 rounded-2xl flex justify-start items-center gap-2 border-2 border-yellow-400 cursor-pointer">
                            <input disabled type="radio" id="pickup" name="shipping" checked={shippingMethod === "pickup"} onChange={()=> setShippingMethod("pickup")}></input>
                            <div className="flex text-sm justify-center items-center gap-1"><RiBox1Fill />Pick Up</div>
                        </label>
                    </div>
                    <div className="flex flex-col justify-between itmes-start gap-3 mt-5">
                        
                        <div className="w-full flex flex-col ">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="name">Name</label>
                            <input name="displayName" onChange={handleChange} value={userData.displayName} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="name" placeholder="Enter Full Name" />
                        </div >

                        <div className="w-full flex flex-col">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="email">Email address</label>
                            <input name="email" onChange={handleChange} value={userData.email} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="email" id="email" placeholder="email@yourmail.com" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="phoneNumber">Phone number</label>
                            <input name="phoneNumber" onChange={handleChange} value={userData.phoneNumber} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="tel" id="phoneNumber" placeholder="91987654321" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="add1">Address line 1</label>
                            <input name="addressLine1" onChange={handleChange} value={shippingAddress.addressLine1} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="add1" placeholder="Building No. Block No. Apartment" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="add2">Address line 2</label>
                            <input name="addressLine2" onChange={handleChange} value={shippingAddress.addressLine2} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="add2" placeholder="Locality" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="leading-7 text-sm text-gray-600" htmlFor="country">Country</label>
                            <select className="w-full h-[40px] bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="country" id="country">
                                <option name="country" value={shippingAddress.country}>IN</option>
                            </select>
                        </div>

                        <div className="flex w-full justify-center items-center gap-3">
                            <div className="w-1/3 flex flex-col">
                                <label className="leading-7 text-sm text-gray-600" htmlFor="city">City</label>
                                <input name="city" onChange={handleChange} value={shippingAddress.city} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="city" type="text" placeholder="Kolkata" />
                            </div>

                            <div className="w-1/3 flex flex-col">
                                <label className="leading-7 text-sm text-gray-600" htmlFor="state">State</label>
                                <input name="state" onChange={handleChange} value={shippingAddress.state} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="state" type="text" placeholder="West Bengal" />
                            </div>

                            <div className="w-1/3 flex flex-col">
                                <label className="leading-7 text-sm text-gray-600" htmlFor="pincode">ZIp/Pincode</label>
                                <input name="pincode" onChange={handleChange} value={shippingAddress.pincode} className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" id="pincode" type="text" placeholder="700001" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-1.2/3 mx-10 my-30 px-10">
                    <div className="text-2xl py-5">Review your cart</div>
                    <div className="w-full flex flex-col gap-2">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-500">
                                Your cart is empty.
                            </div>) :
                            (cartItems.map((item) => (
                                <div key={item.id} className="flex w-full justify-items-start gap-2 rounded-2xl border-2 border-yellow-600 mb-4 p-4">
                                    <img className="w-[80px] h-[80px] border-2 border-yellow-500 rounded-xl" src={item.imageURL} alt="" />
                                    <div className="flex flex-col justify-between w-[2/3]">
                                        <div className="text-base font-light">{item.title}</div>
                                        <div className="text-sm text-gray-600">Seller: {item.sellerName}</div>
                                        <div className="text-sm text-gray-600">
                                                <div>x{item.quantity}</div>
                                                <div>₹{item.price}</div>

                                        </div>
                                    </div>
                                </div>
                            )))

                        }
                    </div>

                    <div className="flex w-full border border-gray-600 justify-between items-center my-4 px-6 py-4 rounded-2xl">
                        <RiDiscountPercentLine />
                        <input className="w-full apprence-none bg-transparent border-none outline-none px-4 m-0 shadow-none" type="text" placeholder="Discount code"></input>
                        <button className="text-yellow-600 cursor-pointer">apply</button>
                    </div>

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
                            <div>Total</div>
                            <div>₹{totalAmountWithShippingCharge}</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center gap-2 my-4">
                        <label htmlFor="COD" className="w-1/2 bg-yellow-50 px-10 py-5 rounded-2xl flex justify-start items-center gap-2 border-2 border-yellow-400 cursor-pointer">
                            <input type="radio" id="COD" checked={paymentMethod === "COD" } onChange={()=> setPaymentMethod("COD")} name="payment"></input>
                            <div className="flex text-sm justify-center items-center gap-3"><RiCashLine />Cash On Delivery</div>
                        </label>
                        <label htmlFor="online" className="w-1/2 bg-yellow-50 px-10 py-5 rounded-2xl flex justify-start items-center gap-2 border-2 border-yellow-400 cursor-pointer">
                            <input disabled type="radio" id="online"  checked={paymentMethod === "online" } onChange={()=> setPaymentMethod("online")} name="payment"></input>
                            <div className="flex text-sm justify-center items-center gap-3"><RiWallet3Line /><span>UPI<span>(Coming Soon)</span></span></div>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-yellow-400 py-2 rounded-2xl mb-5 cursor-pointer">Order Now</button>
                    

                    <div className="flex flex-col gap-5 my-5">
                        <div className="text-base font-semibold flex gap-2">
                            <RiSecurePaymentFill />
                            <p>Secure Checkout - SSL Encryped</p>
                        </div>
                        <p className="text-sm  text-gray-600">Ensuring your financial and personal details are secure during every transaction.</p>
                    </div>
                    
                </div>
            </div>
            </form>
        </div>
    )
}

export default CheckoutPage
