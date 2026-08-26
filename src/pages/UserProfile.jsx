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

import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import { sendUserEmailVerification, updateUserInfo } from "../services/user.services";
import { useEffect, useRef, useState } from "react";


import { uploadProfileImage } from "../services/cloudinary.services"
import { updateUserProfilePic, updateUserShippingAddress, updateUserBillingAddress } from "../services/user.services";


import Popup from "../components/Popup";
import { Link } from "react-router";
import { useSeller } from "../context/SellerContext";
import { X } from "lucide-react";

function UserProfile() {
    const { user, loading } = useAuth();
    const { userData, buyerOders } = useUser();
    const { ListedProduct, sellerOrders } = useSeller();


    const [profilepic, setProfilepic] = useState(null)

    const [newName, setName] = useState("");
    const [newEmail, setNewemail] = useState("");
    const [newPhoneNumber, setNewNumber] = useState("");
    const [editProfile,setEidtProfile] = useState(false);
    const [editProfilePic,setEidtProfilePic] = useState(false);

    // Preview Profile Pic
    const [preview, setPreview] = useState(null);
    const picFileInputRef = useRef(null);


    const [editShippingAdd, setEditShippingAdd] = useState(false);
    const [editBillingAddress, SetEditBillingAddress] = useState(false);

    const [Add1, setAdd1] = useState("");
    const [Add2, setAdd2] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState({});


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
            const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
            if(!allowedTypes.includes(profilepic.type)){
                Swal.fire({
                        title: "Image upload failed",
                        text: 'Please upload a PNG, JPG, or WEBP image.',
                        confirmButtonColor: "#facc15",
                    });
                    return;
            }
            if(profilepic.size > 5*1024*1024){
                Swal.fire({
                        title: "File Too Large",
                        text: 'Please upload a file smaller than 5 MB.',
                        confirmButtonColor: "#facc15",
                    });
                    return;
            }

            // Preview Url Create
            const imageUrl = URL.createObjectURL(profilepic);
            
            setPreview(imageUrl); 

            //Upload On Cloudinary

            const photoURL = await uploadProfileImage(profilepic);
            try {
                if (!photoURL) return;
                await updateUserProfilePic(user, photoURL);
                setEidtProfile(false)
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    confirmButtonColor: "#facc15",
                })
            }

            setProfilepic(null);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }

    }

    useEffect(()=>{
        return () =>{
            if(preview){
                URL.revokeObjectURL(preview);
            }
        }
    },[preview])

    const removeImage = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setPreview(null);
        setProfilepic(null)
        if(picFileInputRef.current){
        picFileInputRef.current.value = "";
        }
  }

    const handleShippingAddress = async (e) => {
        e.preventDefault();
        if (!Add1 || !Add2 || !landMark || !city || !state || !country || !pincode) {
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
        try {
            await updateUserShippingAddress(userData, address);
            setAddress({});
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }
    }

    const handleBillingAddress = async (e) => {
        e.preventDefault();
        if (!Add1 || !Add2 || !landMark || !city || !state || !country || !pincode) {
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
        try {
            await updateUserBillingAddress(userData, address);
            setAddress({});
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }

    }


    const handleProfileDetails = async (e) => {
        e.preventDefault();
        if (!newName || !newEmail || !newPhoneNumber) {
            Swal.fire({
                icon: "warning",
                title: "Please fill all fields",
                confirmButtonColor: "#facc15",
            });
            return;
        }
        try{
            await updateUserInfo(user, newName, newPhoneNumber, newEmail);
            setEidtProfile(false)
        }catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                confirmButtonColor: "#facc15",
            })
        }

    }


if (loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
            <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-200 border-t-yellow-500" />
                <p className="text-xs text-gray-400">
                    Loading profile...
                </p>
            </div>
        </div>
    );
}

return (
    <div className="min-h-screen  px-4 py-6 font-sans text-[#171717] sm:px-8 lg:px-[5%]">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
                <p className="mb-1 text-xs font-medium text-gray-400">
                    Account
                </p>

                <h1 className="text-2xl font-semibold text-gray-900">
                    My profile
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage your account, orders and addresses.
                </p>
            </div>

            <div className="flex items-center gap-2">

                <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">
                    {userData?.role || "Customer"}
                </span>

                <button
                    type="button"
                    onClick={() => setEidtProfile(true)}
                    className="
                        inline-flex
                        h-10
                        items-center
                        gap-2
                        rounded-full
                        bg-[#FFD22F]
                        px-5
                        text-sm
                        font-medium
                        text-gray-900
                        transition
                        hover:bg-yellow-400
                        cursor-pointer
                    "
                >
                    <RiEdit2Line size={17} />
                    Edit profile
                </button>

            </div>

        </div>


        {/* =====================================================
            PROFILE CARD
        ====================================================== */}

        <section className="mb-4 rounded-[17px] border border-gray-100 bg-white p-5 sm:p-6">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* PROFILE */}

                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">

                    {/* IMAGE */}

                    <div className="relative shrink-0">

                        <div className="
                            h-28
                            w-28
                            rounded-full
                            bg-yellow-50
                            p-1
                            sm:h-32
                            sm:w-32
                        ">

                            <img
                                src={userData?.photoURL}
                                alt=""
                                className="
                                    h-full
                                    w-full
                                    rounded-full
                                    bg-gray-100
                                    object-cover
                                "
                            />

                        </div>

                        <button
                            type="button"
                            onClick={() => setEidtProfilePic(true)}
                            className="
                                absolute
                                bottom-0
                                right-0
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border-4
                                border-white
                                bg-[#FFD22F]
                                text-gray-900
                                shadow-sm
                                transition
                                hover:bg-yellow-400
                                hover:scale-105
                                cursor-pointer
                            "
                        >
                            <RiCameraAiLine size={16} />
                        </button>

                    </div>


                    {/* DETAILS */}

                    <div className="text-center sm:text-left">

                        <p className="mb-1 text-xs font-medium text-gray-400">
                            Welcome back
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900">
                            {userData?.displayName || "Username"}
                        </h2>

                        <div className="mt-4 flex flex-col gap-2">

                            {/* EMAIL */}

                            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center">

                                <span className="w-16 text-xs font-medium text-gray-400">
                                    Email
                                </span>

                                <span className="font-medium text-gray-700">
                                    {userData?.email || "Your Email Not Set"}
                                </span>

                                {!user?.emailVerified ? (

                                    <div className="flex items-center justify-center gap-2 sm:justify-start">

                                        <RiMailCloseFill
                                            size={16}
                                            className="text-red-500"
                                        />

                                        <button
                                            onClick={() =>
                                                sendUserEmailVerification(user)
                                            }
                                            className="
                                                rounded-full
                                                bg-yellow-50
                                                px-3
                                                py-1
                                                text-[11px]
                                                font-semibold
                                                text-yellow-700
                                                transition
                                                hover:bg-yellow-100
                                                cursor-pointer
                                            "
                                        >
                                            Verify email
                                        </button>

                                    </div>

                                ) : (

                                    <span className="
                                        inline-flex
                                        w-fit
                                        items-center
                                        gap-1
                                        rounded-full
                                        border
                                        border-green-100
                                        bg-green-50
                                        px-2.5
                                        py-1
                                        text-[11px]
                                        font-semibold
                                        text-green-700
                                    ">
                                        Verified
                                        <RiMailCheckLine size={14} />
                                    </span>

                                )}

                            </div>


                            {/* PHONE */}

                            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center">

                                <span className="w-16 text-xs font-medium text-gray-400">
                                    Phone
                                </span>

                                <span className="font-medium text-gray-700">
                                    {userData?.phoneNumber || "+91 0000000000"}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        {/* =====================================================
            ADMIN
        ====================================================== */}

        <section className="mt-8">

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Manage admin
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Manage your listed books and received orders.
                    </p>
                </div>

                <span className="w-fit rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">
                    Seller
                </span>

            </div>


            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

                {/* LISTED BOOKS */}

                <section className="rounded-[17px] border border-gray-100 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Listed books
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                                Books currently listed for sale
                            </p>
                        </div>

                        <Link
                            to="/book/addbook"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FFD22F]
                                text-gray-900
                                transition
                                hover:bg-yellow-400
                                hover:scale-105
                            "
                        >
                            <RiStickyNoteAddFill size={18} />
                        </Link>

                    </div>


                    {ListedProduct.length === 0 ? (

                        <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 py-12 text-center">

                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
                                <RiStickyNoteAddFill size={22} />
                            </div>

                            <p className="text-sm font-medium text-gray-700">
                                No books listed
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                Add your first book to start selling.
                            </p>

                        </div>

                    ) : (

                        <div className="overflow-x-auto rounded-xl border border-gray-100">

                            <table className="w-full min-w-[500px] text-left">

                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Image
                                        </th>

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Product
                                        </th>

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Price
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {ListedProduct.slice(0,5).map((item) => (

                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-50 transition hover:bg-gray-50"
                                        >

                                            <td className="px-4 py-3">

                                                <img
                                                    src={item.imageURL}
                                                    alt=""
                                                    className="h-12 w-10 rounded-lg object-cover"
                                                />

                                            </td>

                                            <td className="px-4 py-3 text-sm font-medium text-gray-800">
                                                {item.name}
                                            </td>

                                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                                                ₹{item.price}
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                    <div className="mt-4 text-center text-xs font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                        <Link to="/seller/products">View all books</Link>
                    </div>

                </section>


                {/* RECEIVED ORDERS */}

                <section className="rounded-[17px] border border-gray-100 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Received orders
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                                Recent orders from customers
                            </p>
                        </div>

                        <Link to="/seller/orders" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                            <RiEyeLine size={18} />
                        </Link>

                    </div>


                    {sellerOrders.length === 0 ? (

                        <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 py-12 text-center">

                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
                                <RiEyeLine size={22} />
                            </div>

                            <p className="text-sm font-medium text-gray-700">
                                No received orders
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                Incoming orders will appear here.
                            </p>

                        </div>

                    ) : (

                        <div className="overflow-hidden rounded-xl border border-gray-100">

                            <table className="w-full min-w-[650px] text-left">

                                <thead>

                                    <tr className="border-b border-gray-100 bg-gray-50">

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Order ID
                                        </th>

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Date
                                        </th>

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Items
                                        </th>

                                        <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                            Price
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {sellerOrders.slice(0,5).map((order) => (

                                        <tr
                                            key={order.id}
                                            className="border-b border-gray-50 transition hover:bg-gray-50"
                                        >

                                            <td className="px-4 py-3">

                                                <span className="text-sm font-semibold text-gray-800">
                                                    #{order.id.slice(0, 5)}
                                                </span>

                                            </td>

                                            <td className="px-4 py-3 text-xs text-gray-500">

                                                {order.createdAt
                                                    .toDate()
                                                    .toLocaleString(
                                                        "en-IN",
                                                        {
                                                            dateStyle: "medium",
                                                        }
                                                    )}

                                            </td>

                                            <td className="px-4 py-3 text-sm font-medium">

                                                x
                                                {order.items
                                                    ? order.items.reduce(
                                                          (sum, item) =>
                                                              sum +
                                                              item.quantity,
                                                          0
                                                      )
                                                    : order.quantity}

                                            </td>

                                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">

                                                ₹
                                                {order.items
                                                    ? Number(
                                                          order.items.reduce(
                                                              (sum, item) =>
                                                                  sum +
                                                                  item.price,
                                                              0
                                                          )
                                                      ) + 50
                                                    : Number(order.price) + 50}

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                    <div className="mt-4 text-center text-xs font-medium text-yellow-500 hover:text-gray-500 cursor-pointer">
                        <Link to='/seller/orders'>Manage orders</Link>
                    </div>

                </section>

            </div>

        </section>


        {/* =====================================================
            MY ORDERS
        ====================================================== */}

        <section className="mt-8">

            <div className="mb-4">

                <h2 className="text-lg font-semibold text-gray-900">
                    My orders
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                    Track your purchases and payment details.
                </p>

            </div>


            <section className="rounded-[17px] border border-gray-100 bg-white p-5">

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Order history
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                            Your recent purchases
                        </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                        <RiEyeLine size={18} />
                    </div>

                </div>


                {buyerOders.length === 0 ? (

                    <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 py-14 text-center">

                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
                            <RiStickyNoteAddFill size={25} />
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                            No orders yet
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            Explore the store and find your next book.
                        </p>

                        <Link
                            to="/store"
                            className="
                                mt-4
                                rounded-full
                                bg-[#FFD22F]
                                px-5
                                py-2.5
                                text-xs
                                font-semibold
                                text-gray-900
                                transition
                                hover:bg-yellow-400
                            "
                        >
                            Go to shop
                        </Link>

                    </div>

                ) : (

                    <div className="overflow-x-auto rounded-xl border border-gray-100">

                        <table className="w-full min-w-[1000px] text-center">

                            <thead>

                                <tr className="border-b border-gray-100 bg-gray-50">

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Order ID
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Date
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Items
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Price
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Order status
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Payment
                                    </th>

                                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                                        Method
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {buyerOders.slice(0,10).map((order) => (

                                    <tr
                                        key={order.id}
                                        className="border-b border-gray-50 transition hover:bg-gray-50"
                                    >

                                        <td className="px-4 py-3">

                                            <Link
                                                to={`/order-success/${order.id}`}
                                                className="text-sm font-semibold text-gray-800 hover:text-yellow-600"
                                            >
                                                #{order.id.slice(0, 5)}
                                            </Link>

                                        </td>

                                        <td className="px-4 py-3 text-xs text-gray-500">

                                            {order.createdAt
                                                .toDate()
                                                .toLocaleString(
                                                    "en-IN",
                                                    {
                                                        dateStyle: "medium",
                                                    }
                                                )}

                                        </td>

                                        <td className="px-4 py-3 text-sm font-medium">

                                            x
                                            {order.items
                                                ? order.items.reduce(
                                                      (sum, item) =>
                                                          sum +
                                                          item.quantity,
                                                      0
                                                  )
                                                : order.quantity}

                                        </td>

                                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">

                                            ₹
                                            {order.items
                                                ? Number(
                                                      order.items.reduce(
                                                          (sum, item) =>
                                                              sum +
                                                              item.price,
                                                          0
                                                      )
                                                  ) + 50
                                                : Number(order.price) + 50}

                                        </td>

                                        <td className="px-4 py-3">

                                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                                                {order.orderStatus}
                                            </span>

                                        </td>

                                        <td className="px-4 py-3">

                                            <span className="inline-flex rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-700">
                                                {order.paymentStatus}
                                            </span>

                                        </td>

                                        <td className="px-4 py-3 text-xs font-medium text-gray-600">
                                            {order.paymentMethod}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </section>


        {/* =====================================================
            ADDRESSES
        ====================================================== */}

        <section className="mt-8">

            <div className="mb-4">

                <h2 className="text-lg font-semibold text-gray-900">
                    My addresses
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                    Manage your shipping and billing information.
                </p>

            </div>


            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

                {/* SHIPPING */}

                <section className="rounded-[17px] border border-gray-100 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Shipping address
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                                Your delivery address
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setEditShippingAdd(true)}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FFD22F]
                                text-gray-900
                                transition
                                hover:bg-yellow-400
                                hover:scale-105
                                cursor-pointer
                            "
                        >
                            <RiEdit2Line size={17} />
                        </button>

                    </div>


                    <div className="space-y-3">

                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                Address line 1
                            </p>

                            <p className="text-sm font-medium text-gray-800">
                                {userData?.shippingAddress?.addressLine1 || "Not set"}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                Address line 2
                            </p>

                            <p className="text-sm font-medium text-gray-800">
                                {userData?.shippingAddress?.addressLine2 || "Not set"}
                            </p>
                        </div>


                        <div className="grid grid-cols-2 gap-3">

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    Landmark
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.landMark || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    City
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.city || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    State
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.state || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    Country
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.country || "—"}
                                </p>
                            </div>

                        </div>


                        <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-3">

                            <span className="text-[10px] font-semibold uppercase tracking-wide text-yellow-700">
                                Pincode
                            </span>

                            <span className="text-sm font-bold text-gray-900">
                                {userData?.shippingAddress?.pincode || "—"}
                            </span>

                        </div>

                    </div>

                </section>


                {/* BILLING */}

                <section className="rounded-[17px] border border-gray-100 bg-white p-5">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                Billing address
                            </h3>

                            <p className="mt-1 text-xs text-gray-400">
                                Your billing information
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => SetEditBillingAddress(true)}
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FFD22F]
                                text-gray-900
                                transition
                                hover:bg-yellow-400
                                hover:scale-105
                                cursor-pointer
                            "
                        >
                            <RiEdit2Line size={17} />
                        </button>

                    </div>


                    <div className="space-y-3">

                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                Address line 1
                            </p>

                            <p className="text-sm font-medium text-gray-800">
                                {userData?.billingAddress?.addressLine1 || "Not set"}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                Address line 2
                            </p>

                            <p className="text-sm font-medium text-gray-800">
                                {userData?.billingAddress?.addressLine2 || "Not set"}
                            </p>
                        </div>


                        <div className="grid grid-cols-2 gap-3">

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    Landmark
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.landMark || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    City
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.city || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    State
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.state || "—"}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-3">
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                                    Country
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.country || "—"}
                                </p>
                            </div>

                        </div>


                        <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-3">

                            <span className="text-[10px] font-semibold uppercase tracking-wide text-yellow-700">
                                Pincode
                            </span>

                            <span className="text-sm font-bold text-gray-900">
                                {userData?.billingAddress?.pincode || "—"}
                            </span>

                        </div>

                    </div>

                </section>

            </div>

        </section>


        {/* =====================================================
            PROFILE IMAGE POPUP
        ====================================================== */}

        <Popup
            isOpen={editProfilePic}
            btnText="Submit"
            onClose={() => setEidtProfilePic(false)}
            onSubmit={handleUploadProfilePic}
        >

            <div className="w-full rounded-[17px] bg-white p-5" >

                <div className="mb-5">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Update profile picture
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                        Choose a clear image for your profile.
                    </p>

                </div>


                <label
                    htmlFor="uploadProfile"
                    onClick={() => picFileInputRef.current?.click()}
                    className="
                        group
                        flex
                        min-h-[210px]
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-dashed
                        border-gray-300
                        bg-gray-50
                        px-5
                        py-8
                        transition
                        hover:border-yellow-400
                        hover:bg-yellow-50
                    "
                >
                    {preview ? (
                        <>
                            <div className="relative h-32 w-32 overflow-hidden rounded-lg shadow-md">
                                <img src={preview} alt="Book cover preview" fill className="object-cover" />
                            </div>

                            <p className="mt-3 text-xs font-medium text-gray-600">Click to replace image</p>
                            <button
                                type="button"
                                onClick={removeImage}
                                className=" mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-50 hover:text-red-500"
                            >
                                <X size={16} />
                            </button>
                        </>) : (<>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition group-hover:text-yellow-600">
                                <RiImageUploadLine size={24} />
                            </div>

                            <p className="text-sm font-medium text-gray-800">
                                Upload profile picture
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                Click to choose an image
                            </p>

                        </>)}




                    <input
                        type="file"
                        accept="image/*"
                        id="uploadProfile"
                        hidden
                        ref={picFileInputRef}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;
                            setProfilepic(file);
                            // Show preview immediately
                            const imageUrl = URL.createObjectURL(file);
                            setPreview(imageUrl);

                        }
                        }
                    />

                </label>

            </div>

        </Popup>
                    

        
        {/* =====================================================
            edit Profile popup
        ======================================================  */}

        <Popup
            isOpen={editProfile}
            btnText="Save Profile"
            onClose={() => setEidtProfile(false)}
            onSubmit={handleProfileDetails}
        >

            <div className="w-full rounded-[17px] bg-white p-5 sm:p-6">

                <div className="mb-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Profile Details
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                        Enter your Details.
                    </p>

                </div>


                <div className="space-y-4">

                    <div>
                        <label
                            htmlFor="add1"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Name
                        </label>

                        <input
                            id="add1"
                            type="text"
                            placeholder="Raju Das"
                            onChange={(e) => setName(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="newEmail"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            New Email
                        </label>

                        <input
                            id="newEmail"
                            type="email"
                            placeholder="yourmail@gmail.com"
                            onChange={(e) => setNewemail(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="newPhoneNumber"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            New Phone Number
                        </label>

                        <input
                            id="newPhoneNumber"
                            type="phone"
                            placeholder="987654321"
                            onChange={(e) => setNewNumber(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>

                </div>

            </div>

        </Popup>

        {/* =====================================================
            SHIPPING POPUP
        ====================================================== */}

        <Popup
            isOpen={editShippingAdd}
            btnText="Save Address"
            onClose={() => setEditShippingAdd(false)}
            onSubmit={handleShippingAddress}
        >

            <div className="w-full rounded-[17px] bg-white p-5 sm:p-6">

                <div className="mb-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Shipping address
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                        Enter your complete delivery address.
                    </p>

                </div>


                <div className="space-y-4">

                    <div>
                        <label
                            htmlFor="add1"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Address line 1
                        </label>

                        <input
                            id="add1"
                            type="text"
                            placeholder="Building No. / Apartment Name"
                            onChange={(e) => setAdd1(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="add2"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Address line 2
                        </label>

                        <input
                            id="add2"
                            type="text"
                            placeholder="Locality name"
                            onChange={(e) => setAdd2(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="landmark"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Landmark
                        </label>

                        <input
                            id="landmark"
                            type="text"
                            placeholder="Temple, club, ground etc."
                            onChange={(e) => setLandMark(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div>
                            <label
                                htmlFor="city"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                City
                            </label>

                            <input
                                id="city"
                                type="text"
                                placeholder="Kolkata"
                                onChange={(e) => setCity(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="state"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                State
                            </label>

                            <input
                                id="state"
                                type="text"
                                placeholder="WB"
                                onChange={(e) => setState(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="country"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                Country
                            </label>

                            <input
                                id="country"
                                type="text"
                                placeholder="India"
                                onChange={(e) => setCountry(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="pincode"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                Pincode
                            </label>

                            <input
                                id="pincode"
                                type="text"
                                placeholder="700100"
                                onChange={(e) => setPincode(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>

                    </div>

                </div>

            </div>

        </Popup>


        {/* =====================================================
            BILLING POPUP
        ====================================================== */}

        <Popup
            isOpen={editBillingAddress}
            btnText="Save Address"
            onClose={() => SetEditBillingAddress(false)}
            onSubmit={handleBillingAddress}
        >

            <div className="w-full rounded-[17px] bg-white p-5 sm:p-6">

                <div className="mb-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                        Billing address
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                        Enter your billing address details.
                    </p>

                </div>


                <div className="space-y-4">

                    <div>
                        <label
                            htmlFor="billing-add1"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Address line 1
                        </label>

                        <input
                            id="billing-add1"
                            type="text"
                            placeholder="Building No. / Apartment Name"
                            onChange={(e) => setAdd1(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="billing-add2"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Address line 2
                        </label>

                        <input
                            id="billing-add2"
                            type="text"
                            placeholder="Locality name"
                            onChange={(e) => setAdd2(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="billing-landmark"
                            className="mb-2 block text-xs font-medium text-gray-700"
                        >
                            Landmark
                        </label>

                        <input
                            id="billing-landmark"
                            type="text"
                            placeholder="Temple, club, ground etc."
                            onChange={(e) => setLandMark(e.target.value)}
                            className="
                                h-11
                                w-full
                                rounded-[10px]
                                border
                                border-gray-200
                                px-3
                                text-sm
                                outline-none
                                transition
                                focus:border-yellow-400
                                focus:ring-4
                                focus:ring-yellow-50
                            "
                        />
                    </div>


                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div>
                            <label
                                htmlFor="billing-city"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                City
                            </label>

                            <input
                                id="billing-city"
                                type="text"
                                placeholder="Kolkata"
                                onChange={(e) => setCity(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="billing-state"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                State
                            </label>

                            <input
                                id="billing-state"
                                type="text"
                                placeholder="WB"
                                onChange={(e) => setState(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="billing-country"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                Country
                            </label>

                            <input
                                id="billing-country"
                                type="text"
                                placeholder="India"
                                onChange={(e) => setCountry(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="billing-pincode"
                                className="mb-2 block text-xs font-medium text-gray-700"
                            >
                                Pincode
                            </label>

                            <input
                                id="billing-pincode"
                                type="text"
                                placeholder="700100"
                                onChange={(e) => setPincode(e.target.value)}
                                className="
                                    h-11
                                    w-full
                                    rounded-[10px]
                                    border
                                    border-gray-200
                                    px-3
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-yellow-400
                                    focus:ring-4
                                    focus:ring-yellow-50
                                "
                            />
                        </div>

                    </div>

                </div>

            </div>

        </Popup>

    </div>
    );
}

export default UserProfile;
