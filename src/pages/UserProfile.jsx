import {
    RiEdit2Line,
    RiStickyNoteAddFill,
    RiEyeLine,
    RiMailCloseFill,
    RiMailCheckLine,
    RiCameraAiLine,
    RiImageUploadLine
} from "@remixicon/react";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { getUser, sendUserEmailVerification } from "../services/user.services";
import { useEffect, useState } from "react";
import { getListedProducts } from "../services/product.services";

import { uploadProfileImage } from "../services/cloudinary.services"
import { updateUserProfilePic, updateUserShippingAddress, updateUserBillingAddress } from "../services/user.services";


import Popup from "../components/Popup";
import { Link, NavLink } from "react-router";

function UserProfile() {
    const { user, loading } = useAuth();

    const [userData, setUserData] = useState(null);
    const [ListedBook, setListBook] = useState([]);


    const [profilepic, setProfilepic] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [editShippingAdd, setEditShippingAdd] = useState(false);
    const [editBillingAddress, SetEditBillingAddress] = useState(false);

    const [ Add1, setAdd1 ] = useState("");
    const [ Add2, setAdd2 ] = useState("");
    const [ landMark, setLandMark ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ pincode, setPincode ] = useState("");
    const [ address, setAddress ] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user) return;
            const data = await getUser(user.uid);
            setUserData(data);
        }

        fetchUserData();
    }, [user])



    useEffect(() => {
        if (!user) return;
        const fetchUserListing = async () => {
            if (!user) return;
            const Books = await getListedProducts(user);
            setListBook(Books)
        }
        fetchUserListing()
    }, [user]);



    const handleUploadProfilePic = async (e) => {
        e.preventDefault();
        if (!profilepic) {
        Swal.fire({
            icon: "warning",
            title: "Please select an image",
            confirmButtonColor: "#facc15",
        });

        return;
    }
        try {
            const photoURL = await uploadProfileImage(profilepic);
            try {
                if (!photoURL) return;
                await updateUserProfilePic(user, photoURL);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    confirmButtonColor: "#facc15",
                })
            }

            setIsOpen(false);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }

    }

    const handleShippingAddress = async (e) => {
        e.preventDefault();
        if(!Add1 || !Add2 || !landMark || !city || !state || !country || !pincode){
            Swal.fire({
                icon: "warning",
                title: "Please fill all address fields",
                confirmButtonColor: "#facc15",
            });
            return;
        }

        const address = {
                addressLine1: Add1,
                addressLine2: Add2,
                landMark: landMark,
                city: city,
                state: state,
                country: country,
                pincode: pincode,
            }
        try{
            await updateUserShippingAddress(userData,address);
            setAddress({});
        }catch(error){
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }
    }

    const handleBillingAddress = async (e) => {
    e.preventDefault();
     if(!Add1 || !Add2 || !landMark || !city || !state || !country || !pincode){
            Swal.fire({
                icon: "warning",
                title: "Please fill all address fields",
                confirmButtonColor: "#facc15",
            });
            return;
        }

        const address = {
                addressLine1: Add1,
                addressLine2: Add2,
                landMark: landMark,
                city: city,
                state: state,
                country: country,
                pincode: pincode,
            }
    try{
        await updateUserBillingAddress(userData,address);
        setAddress({});
    }catch(error){
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        })
    }

    }



    if (loading) {
        return (
            <div className="w-full h-full flex justify-center items-center">Loading....</div>
        )
    }

    return (
        <div className="w-full h-full">
            <Navbar />
            <Popup isOpen={isOpen} btnText={"Submit"} onClose={()=>isOpen(false)} onSubmit={handleUploadProfilePic}>
                <div className="flex flex-col justify-between items-center mb-5">
                    <label htmlFor="uploadProfile" className="flex flex-col justify-between items-center w-full h-auto py-10 bg-amber-200 rounded-xl border-2 border-yellow-600 border-dashed">
                        <div>Upload Your Profile Pic</div>
                        <RiImageUploadLine />
                        <input type="file" accept="image/*" id="uploadProfile" hidden onChange={(e) => setProfilepic(e.target.files[0])} />
                    </label>
                </div>
            </Popup>

            <Popup isOpen={editShippingAdd} btnText={"Save Address"} onClose={()=>setEditShippingAdd(false)} onSubmit={handleShippingAddress}>
                <div className="flex flex-col justify-between gap-1 items-center w-full h-auto py-5 mb-5 bg-amber-200 rounded-xl border-2 border-yellow-600 border-dashed">
                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="add1" > Address Line 1: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="add1" type="text" placeholder="Buliding No. Appertment Name" onChange={(e)=>setAdd1(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="add2" > Address Line 2: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="add2" type="text" placeholder="Locality Name" onChange={(e)=>setAdd2(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="landmark" > Land Mark: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="landmark" type="text" placeholder="Land Mark - Temple, Club, Ground Etc.." onChange={(e)=>setLandMark(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="city" > City: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="city" type="text" placeholder="Kolkata" onChange={(e)=>setCity(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="state" > State: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="state" type="text" placeholder="WB" onChange={(e)=>setState(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="country" > Country: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="country" type="text" placeholder="India" onChange={(e)=>setCountry(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="pincode" > Pincode: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="pincode" type="text" placeholder="700100" onChange={(e)=>setPincode(e.target.value)} />
                    </div>
                    
                </div>
            </Popup>

             <Popup isOpen={editBillingAddress} btnText={"Save Address"} onClose={()=>SetEditBillingAddress(false)} onSubmit={handleBillingAddress}>
                <div className="flex flex-col justify-between gap-1 items-center w-full h-auto py-5 mb-5 bg-amber-200 rounded-xl border-2 border-yellow-600 border-dashed">
                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="add1" > Address Line 1: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="add1" type="text" placeholder="Buliding No. Appertment Name" onChange={(e)=>setAdd1(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="add2" > Address Line 2: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="add2" type="text" placeholder="Locality Name" onChange={(e)=>setAdd2(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="landmark" > Land Mark: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="landmark" type="text" placeholder="Land Mark - Temple, Club, Ground Etc.." onChange={(e)=>setLandMark(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="city" > City: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="city" type="text" placeholder="Kolkata" onChange={(e)=>setCity(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="state" > State: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="state" type="text" placeholder="WB" onChange={(e)=>setState(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="country" > Country: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="country" type="text" placeholder="India" onChange={(e)=>setCountry(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-1.5 relative mb-2 px-10 w-full">
                        <label className="leading-7 text-right text-sm text-gray-600 w-1/3" htmlFor="pincode" > Pincode: </label>
                        <input className="w-2/3 bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  id="pincode" type="text" placeholder="700100" onChange={(e)=>setPincode(e.target.value)} />
                    </div>
                    
                </div>
            </Popup>

            <div className="w-full mt-20 flex justify-between pl-20 p-10 gap-10">
                <div className="flex gap-10">
                    <div className="w-[150px] h-[150px] relative bg-amber-300 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        <img className="rounded-full "
                            src={userData?.photoURL}
                            alt=""
                        />
                        <div className="absolute bottom-2 right-4 bg-amber-300 border-2 border-l-black py-2 px-2 rounded-full cursor-pointer" onClick={() => setIsOpen(true)} ><RiCameraAiLine /></div>
                    </div>
                    <div className=" flex flex-col justify-evenly items-start">
                        <div className="text-xl ">
                            Name: {userData?.displayName || "username"}
                        </div>
                        <div className="flex justify-between items-center gap-3 ">
                            <div className="text-xl">
                                Email: {userData?.email || "Your Name Not Set"}
                            </div>
                            <div>
                                {!user?.emailVerified ? (
                                    <div className="flex items-center gap-2">
                                        <RiMailCloseFill />
                                        <button onClick={() => sendUserEmailVerification(user)} className="text-sm rounded bg-yellow-400 px-2 py-1 cursor-pointer">
                                            Verify
                                        </button>
                                    </div>
                                ) : (
                                    <button className=" flex justify-center items-center gap-2 text-sm rounded bg-yellow-400 px-2 py-1 cursor-pointer">
                                        Verified <RiMailCheckLine size={18} />
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="text-xl ">
                            Phone Number: {userData?.phoneNumber || "+91 0000000000"}
                        </div>
                    </div>
                </div>
                <div >
                    <button className="inline-flex items-center justify-center gap-2 bg-yellow-400  hover:border-amber-200 py-2 px-4 focus:outline-none hover:bg-amber-300  rounded-xl text-base mt-4 md:mt-0 cursor-pointer  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">Edit Details</button>
                </div>
            </div>

            <div className="w-full flex justify-evenly p-10 gap-10">
                <div className="bg-amber-50 w-1/2 px-10 py-8 rounded-xl border-2 border-yellow-400 flex flex-col gap-3 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-row justify-between items-center py-3">
                        <div className="font-semibold">List Of Book</div>
                        <Link to={'/book/addbook'} className="bg-yellow-400 p-2 rounded-full cursor-pointer">
                            <RiStickyNoteAddFill />
                        </Link>
                    </div>
                    <div>
                        {ListedBook.length === 0 ? (
                            <div className="text-center text-gray-500">
                                No Book Listed.
                            </div>

                        ) : (
                            <div className="w-full mx-auto overflow-auto">

                                <table className="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-yellow-400 rounded-tl-xl rounded-bl-xl">Image</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-yellow-400  ">Product</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-yellow-400 rounded-tr-xl rounded-br-xl">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full '>
                                        {
                                            ListedBook.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className=" border-b-2 border-gray-200 px-4 py-3"><img className='w-[50px] h-[60px]' src={item.imageURL} alt="" /></td>
                                                        <td className=" border-b-2 border-gray-200 px-4 py-3">{item.name}</td>
                                                        <td className=" border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">{item.price}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>

                                </table>
                            </div>
                        )}



                    </div>
                    <div className="flex justify-center items-center px-3 py-1 text-yellow-500 cursor-pointer">
                        View More
                    </div>
                </div>

                <div className="bg-amber-50 w-1/2 px-10 py-8 rounded-xl border-2 border-yellow-400 flex flex-col gap-3 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-row justify-between items-center py-3">
                        <div className="font-semibold">Orders</div>
                        <div className="bg-yellow-400 p-2 rounded-full cursor-pointer">
                            <RiEyeLine />
                        </div>
                    </div>
                    <div></div>
                    <div className="flex justify-center items-center px-3 py-1 text-yellow-500 cursor-pointer">
                        View More
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-evenly p-10 gap-10">
                <div className="bg-amber-50 w-1/2 px-10 py-8 rounded-xl border-2 border-yellow-400 flex flex-col gap-3 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-row justify-between items-center py-3">
                        <div className="font-semibold">Shipping Address</div>
                        <div className="bg-yellow-400 p-2 rounded-full cursor-pointer" onClick={()=>setEditShippingAdd(true)}>
                            <RiEdit2Line />
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                        <div className="text-base font-semibold">Address Line 1: <span className="text-base font-light">{userData?.shippingAddress.addressLine1}</span></div>
                        <div className="text-base font-semibold">Address Line 2: <span className="text-base font-light">{userData?.shippingAddress.addressLine2}</span></div>
                        <div className="text-base font-semibold">Land Mark: <span className="text-base font-light">{userData?.shippingAddress.landMark}</span></div>
                        <div className="text-base font-semibold">City: <span className="text-base font-light">{userData?.shippingAddress.city}</span></div>
                        <div className="text-base font-semibold">State: <span className="text-base font-light">{userData?.shippingAddress.state}</span></div>
                        <div className="text-base font-semibold">Country: <span className="text-base font-light">{userData?.shippingAddress.country}</span></div>
                        <div className="text-base font-semibold">Pincode: <span className="text-base font-light">{userData?.shippingAddress.pincode}</span></div>
                    </div>
                </div>

                <div className="bg-amber-50 w-1/2 h-fit px-10 py-8 rounded-xl border-2 border-yellow-400 flex flex-col gap-3 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-row justify-between items-center py-3">
                        <div className="font-semibold">Billing Address</div>
                        <div className="bg-yellow-400 p-2 rounded-full cursor-pointer" onClick={()=> SetEditBillingAddress(true)}>
                            <RiEdit2Line />
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-2">
                        <div className="text-base font-semibold">Address Line 1: <span className="text-base font-light">{userData?.billingAddress.addressLine1}</span></div>
                        <div className="text-base font-semibold">Address Line 2: <span className="text-base font-light">{userData?.billingAddress.addressLine2}</span></div>
                        <div className="text-base font-semibold">Land Mark: <span className="text-base font-light">{userData?.billingAddress.landMark}</span></div>
                        <div className="text-base font-semibold">City: <span className="text-base font-light">{userData?.billingAddress.city}</span></div>
                        <div className="text-base font-semibold">State: <span className="text-base font-light">{userData?.billingAddress.state}</span></div>
                        <div className="text-base font-semibold">Country: <span className="text-base font-light">{userData?.billingAddress.country}</span></div>
                        <div className="text-base font-semibold">Pincode: <span className="text-base font-light">{userData?.billingAddress.pincode}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
