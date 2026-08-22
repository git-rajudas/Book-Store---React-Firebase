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
import { sendUserEmailVerification } from "../services/user.services";
import { useState } from "react";


import { uploadProfileImage } from "../services/cloudinary.services"
import { updateUserProfilePic, updateUserShippingAddress, updateUserBillingAddress } from "../services/user.services";


import Popup from "../components/Popup";
import { Link } from "react-router";
import { useSeller } from "../context/SellerContext";

function UserProfile() {
    const { user, loading } = useAuth();
    const { userData, buyerOders } = useUser();
    const { ListedProduct, sellerOrders } = useSeller();


    const [profilepic, setProfilepic] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
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



if (loading) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-200 border-t-yellow-500" />
    </div>
  );
}

    return (
        <div className="w-full min-h-screen pb-16">

            <Popup
                isOpen={isOpen}
                btnText={"Submit"}
                onClose={() => isOpen(false)}
                onSubmit={handleUploadProfilePic}
            >
                <div className="flex flex-col items-center mb-5">

                    <div className="w-full rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 p-5">

                        <div className="mb-5">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Update Profile Picture
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Choose a clear image for your profile.
                            </p>
                        </div>

                        <label
                            htmlFor="uploadProfile"
                            className="
                                group
                                flex
                                flex-col
                                justify-center
                                items-center
                                gap-4
                                w-full
                                min-h-[220px]
                                py-10
                                px-5
                                bg-white
                                rounded-2xl
                                border-2
                                border-dashed
                                border-yellow-400
                                cursor-pointer
                                hover:bg-yellow-50
                                hover:border-yellow-500
                                transition-all
                                duration-200
                            "
                        >
                            <div className="
                                w-16
                                h-16
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-yellow-100
                                text-yellow-700
                                group-hover:scale-105
                                transition-transform
                            ">
                                <RiImageUploadLine size={30} />
                            </div>

                            <div className="text-center">
                                <p className="font-semibold text-gray-800">
                                    Upload Your Profile Picture
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Click here to choose an image
                                </p>
                            </div>

                            {profilepic && (
                                <div className="
                                    max-w-full
                                    px-4
                                    py-2
                                    rounded-lg
                                    bg-yellow-50
                                    border
                                    border-yellow-200
                                    text-sm
                                    text-gray-700
                                    truncate
                                ">
                                    {profilepic.name}
                                </div>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                id="uploadProfile"
                                hidden
                                onChange={(e) =>
                                    setProfilepic(e.target.files[0])
                                }
                            />
                        </label>

                    </div>
                </div>
            </Popup>



            <Popup
                isOpen={editShippingAdd}
                btnText={"Save Address"}
                onClose={() => setEditShippingAdd(false)}
                onSubmit={handleShippingAddress}
            >
                <div className="
                    flex
                    flex-col
                    gap-4
                    w-full
                    p-5
                    sm:p-7
                    bg-gradient-to-br
                    from-amber-50
                    to-yellow-50
                    rounded-2xl
                    border
                    border-yellow-200
                ">

                    <div className="mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Shipping Address
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Enter your complete delivery address.
                        </p>
                    </div>


                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex flex-col gap-2 w-full">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="add1"
                            >
                                Address Line 1
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    text-base
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                    duration-200
                                "
                                id="add1"
                                type="text"
                                placeholder="Building No. / Apartment Name"
                                onChange={(e) => setAdd1(e.target.value)}
                            />
                        </div>


                        <div className="flex flex-col gap-2 w-full">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="add2"
                            >
                                Address Line 2
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    text-base
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                    duration-200
                                "
                                id="add2"
                                type="text"
                                placeholder="Locality Name"
                                onChange={(e) => setAdd2(e.target.value)}
                            />
                        </div>


                        <div className="flex flex-col gap-2 w-full">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="landmark"
                            >
                                Landmark
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    text-base
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                    duration-200
                                "
                                id="landmark"
                                type="text"
                                placeholder="Temple, Club, Ground etc."
                                onChange={(e) => setLandMark(e.target.value)}
                            />
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="city"
                                >
                                    City
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="city"
                                    type="text"
                                    placeholder="Kolkata"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="state"
                                >
                                    State
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="state"
                                    type="text"
                                    placeholder="WB"
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="country"
                                >
                                    Country
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="country"
                                    type="text"
                                    placeholder="India"
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="pincode"
                                >
                                    Pincode
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="pincode"
                                    type="text"
                                    placeholder="700100"
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </Popup>


            <Popup
                isOpen={editBillingAddress}
                btnText={"Save Address"}
                onClose={() => SetEditBillingAddress(false)}
                onSubmit={handleBillingAddress}
            >
                <div className="
                    flex
                    flex-col
                    gap-4
                    w-full
                    p-5
                    sm:p-7
                    bg-gradient-to-br
                    from-amber-50
                    to-yellow-50
                    rounded-2xl
                    border
                    border-yellow-200
                ">

                    <div className="mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Billing Address
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Enter your billing address details.
                        </p>
                    </div>


                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="billing-add1"
                            >
                                Address Line 1
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                "
                                id="billing-add1"
                                type="text"
                                placeholder="Building No. / Apartment Name"
                                onChange={(e) => setAdd1(e.target.value)}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="billing-add2"
                            >
                                Address Line 2
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                "
                                id="billing-add2"
                                type="text"
                                placeholder="Locality Name"
                                onChange={(e) => setAdd2(e.target.value)}
                            />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm font-medium text-gray-700"
                                htmlFor="billing-landmark"
                            >
                                Landmark
                            </label>

                            <input
                                className="
                                    w-full
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-200
                                    focus:border-yellow-500
                                    focus:ring-4
                                    focus:ring-yellow-100
                                    outline-none
                                    text-gray-700
                                    py-3
                                    px-4
                                    transition-all
                                "
                                id="billing-landmark"
                                type="text"
                                placeholder="Temple, Club, Ground etc."
                                onChange={(e) => setLandMark(e.target.value)}
                            />
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="billing-city"
                                >
                                    City
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="billing-city"
                                    type="text"
                                    placeholder="Kolkata"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="billing-state"
                                >
                                    State
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="billing-state"
                                    type="text"
                                    placeholder="WB"
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="billing-country"
                                >
                                    Country
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="billing-country"
                                    type="text"
                                    placeholder="India"
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-medium text-gray-700"
                                    htmlFor="billing-pincode"
                                >
                                    Pincode
                                </label>

                                <input
                                    className="
                                        w-full
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        focus:border-yellow-500
                                        focus:ring-4
                                        focus:ring-yellow-100
                                        outline-none
                                        text-gray-700
                                        py-3
                                        px-4
                                    "
                                    id="billing-pincode"
                                    type="text"
                                    placeholder="700100"
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </Popup>

            <section className="
                w-full
                px-4
                sm:px-6
                lg:px-10
                xl:px-16
                pt-8
                sm:pt-10
            ">

                <div className="
                    relative
                    overflow-hidden
                    w-full
                    bg-white
                    rounded-3xl
                    border
                    border-yellow-200
                    shadow-[0_15px_45px_-20px_rgba(0,0,0,0.2)]
                ">


                    <div className="
                        absolute
                        top-0
                        right-0
                        w-64
                        h-64
                        bg-yellow-100
                        rounded-full
                        blur-3xl
                        opacity-60
                        -translate-y-1/2
                        translate-x-1/3
                    "></div>


                    <div className="
                        relative
                        z-10
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        justify-between
                        gap-8
                        p-5
                        sm:p-8
                        lg:p-10
                    ">

                        {/* Profile Details */}

                        <div className="
                            flex
                            flex-col
                            sm:flex-row
                            items-center
                            sm:items-start
                            gap-6
                            lg:gap-8
                        ">

                            {/* Profile Image */}

                            <div className="
                                w-[120px]
                                h-[120px]
                                sm:w-[150px]
                                sm:h-[150px]
                                relative
                                shrink-0
                                bg-yellow-100
                                rounded-full
                                p-1.5
                                shadow-lg
                            ">

                                <img
                                    className="
                                        w-full
                                        h-full
                                        rounded-full
                                        object-cover
                                        bg-amber-100
                                    "
                                    src={userData?.photoURL}
                                    alt=""
                                />


                                <button
                                    type="button"
                                    className="
                                        absolute
                                        bottom-1
                                        right-1
                                        sm:bottom-2
                                        sm:right-2
                                        w-10
                                        h-10
                                        flex
                                        justify-center
                                        items-center
                                        bg-yellow-400
                                        hover:bg-yellow-500
                                        border-4
                                        border-white
                                        rounded-full
                                        cursor-pointer
                                        shadow-md
                                        transition-all
                                        duration-200
                                        hover:scale-105
                                    "
                                    onClick={() => setIsOpen(true)}
                                >
                                    <RiCameraAiLine size={18} />
                                </button>

                            </div>


                            {/* User Information */}

                            <div className="
                                flex
                                flex-col
                                justify-center
                                gap-4
                                text-center
                                sm:text-left
                            ">

                                <div>
                                    <p className="text-sm text-gray-500 mb-1">
                                        Welcome back
                                    </p>

                                    <h1 className="
                                        text-2xl
                                        sm:text-3xl
                                        font-bold
                                        text-gray-900
                                    ">
                                        {userData?.displayName || "Username"}
                                    </h1>
                                </div>


                                <div className="
                                    flex
                                    flex-col
                                    gap-3
                                    text-sm
                                ">

                                    {/* Email */}

                                    <div className="
                                        flex
                                        flex-col
                                        sm:flex-row
                                        sm:items-center
                                        gap-2
                                    ">

                                        <span className="text-gray-500 font-medium">
                                            Email
                                        </span>

                                        <span className="font-medium text-gray-800 break-all">
                                            {userData?.email || "Your Email Not Set"}
                                        </span>


                                        {!user?.emailVerified ? (

                                            <div className="flex items-center justify-center sm:justify-start gap-2">

                                                <RiMailCloseFill
                                                    size={17}
                                                    className="text-red-500"
                                                />

                                                <button
                                                    onClick={() =>
                                                        sendUserEmailVerification(user)
                                                    }
                                                    className="
                                                        text-xs
                                                        font-semibold
                                                        rounded-full
                                                        bg-yellow-400
                                                        hover:bg-yellow-500
                                                        px-3
                                                        py-1.5
                                                        cursor-pointer
                                                        transition-colors
                                                    "
                                                >
                                                    Verify
                                                </button>

                                            </div>

                                        ) : (

                                            <span className="
                                                inline-flex
                                                w-fit
                                                mx-auto
                                                sm:mx-0
                                                items-center
                                                gap-1.5
                                                text-xs
                                                font-semibold
                                                text-green-700
                                                bg-green-50
                                                border
                                                border-green-200
                                                rounded-full
                                                px-3
                                                py-1.5
                                            ">
                                                Verified
                                                <RiMailCheckLine size={16} />
                                            </span>

                                        )}

                                    </div>


                                    {/* Phone */}

                                    <div className="
                                        flex
                                        flex-col
                                        sm:flex-row
                                        gap-2
                                    ">
                                        <span className="text-gray-500 font-medium">
                                            Phone
                                        </span>

                                        <span className="font-medium text-gray-800">
                                            {userData?.phoneNumber || "+91 0000000000"}
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Edit Details */}

                        <div className="flex justify-center lg:justify-end">

                            <button
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-yellow-400
                                    hover:bg-yellow-500
                                    text-gray-900
                                    font-semibold
                                    py-3
                                    px-6
                                    rounded-xl
                                    text-sm
                                    cursor-pointer
                                    shadow-sm
                                    hover:shadow-md
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                "
                            >
                                <RiEdit2Line size={18} />
                                Edit Details
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                ADMIN / SELLER SECTION
            ====================================================== */}

            <section className="w-full flex flex-col mt-12">

                <div className="
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    sm:items-end
                    gap-4
                ">

                    <div>
                        <div className="
                            text-2xl
                            font-bold
                            text-gray-900
                        ">
                            Manage Admin Section
                        </div>

                        <div className="text-gray-500 mt-1 text-sm">
                            You can list your old books for sale.
                        </div>
                    </div>


                    <div className="
                        w-fit
                        px-5
                        py-2
                        bg-yellow-400
                        rounded-full
                        text-sm
                        font-semibold
                        shadow-sm
                    ">
                        Admin
                    </div>

                </div>


                <div className="
                    w-full
                    grid
                    grid-cols-1
                    xl:grid-cols-2
                    gap-6
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                    mt-6
                ">


                    {/* =================================================
                        LISTED BOOKS
                    ================================================== */}

                    <div className="
                        bg-white
                        w-full
                        p-5
                        sm:p-7
                        rounded-2xl
                        border
                        border-yellow-200
                        shadow-[0_10px_35px_-20px_rgba(0,0,0,0.25)]
                        flex
                        flex-col
                        gap-4
                    ">

                        <div className="
                            flex
                            justify-between
                            items-center
                            pb-4
                            border-b
                            border-gray-100
                        ">

                            <div>
                                <h3 className="font-bold text-lg text-gray-900">
                                    List Of Books
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Books currently listed for sale
                                </p>
                            </div>


                            <Link
                                to={"/book/addbook"}
                                className="
                                    w-10
                                    h-10
                                    flex
                                    justify-center
                                    items-center
                                    bg-yellow-400
                                    hover:bg-yellow-500
                                    rounded-xl
                                    cursor-pointer
                                    shadow-sm
                                    transition-all
                                    hover:scale-105
                                "
                            >
                                <RiStickyNoteAddFill size={20} />
                            </Link>

                        </div>


                        <div>

                            {ListedProduct.length === 0 ? (

                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    py-12
                                    text-center
                                ">

                                    <div className="
                                        w-14
                                        h-14
                                        flex
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-yellow-50
                                        text-yellow-600
                                        mb-3
                                    ">
                                        <RiStickyNoteAddFill size={25} />
                                    </div>

                                    <p className="font-medium text-gray-700">
                                        No Books Listed
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Add your first book to start selling.
                                    </p>

                                </div>

                            ) : (

                                <div className="
                                    w-full
                                    overflow-x-auto
                                    rounded-xl
                                    border
                                    border-gray-100
                                ">

                                    <table className="
                                        table-auto
                                        w-full
                                        text-left
                                        min-w-[500px]
                                    ">

                                        <thead>

                                            <tr>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-gray-800
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Image
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-gray-800
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Product
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-gray-800
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Price
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {ListedProduct.map((item) => (

                                                <tr
                                                    key={item.id}
                                                    className="hover:bg-yellow-50 transition-colors"
                                                >

                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                    ">
                                                        <img
                                                            className="
                                                                w-[50px]
                                                                h-[60px]
                                                                object-cover
                                                                rounded-lg
                                                                shadow-sm
                                                            "
                                                            src={item.imageURL}
                                                            alt=""
                                                        />
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-medium
                                                        text-gray-800
                                                    ">
                                                        {item.name}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-semibold
                                                        text-gray-900
                                                    ">
                                                        ₹{item.price}
                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                </div>

                            )}

                        </div>


                        <div className="
                            flex
                            justify-center
                            items-center
                            pt-3
                            text-sm
                            font-medium
                            text-yellow-600
                            hover:text-yellow-700
                            cursor-pointer
                        ">
                            View More
                        </div>

                    </div>


                    {/* =================================================
                        RECEIVED ORDERS
                    ================================================== */}

                    <div className="
                        bg-white
                        w-full
                        p-5
                        sm:p-7
                        rounded-2xl
                        border
                        border-yellow-200
                        shadow-[0_10px_35px_-20px_rgba(0,0,0,0.25)]
                        flex
                        flex-col
                        gap-4
                    ">

                        <div className="
                            flex
                            justify-between
                            items-center
                            pb-4
                            border-b
                            border-gray-100
                        ">

                            <div>
                                <h3 className="font-bold text-lg text-gray-900">
                                    Your Received Orders
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Recent orders from your customers
                                </p>
                            </div>


                            <div className="
                                w-10
                                h-10
                                flex
                                justify-center
                                items-center
                                bg-yellow-400
                                hover:bg-yellow-500
                                rounded-xl
                                cursor-pointer
                                shadow-sm
                                transition-all
                                hover:scale-105
                            ">
                                <RiEyeLine size={20} />
                            </div>

                        </div>


                        <div>

                            {sellerOrders.length === 0 ? (

                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    py-12
                                    text-center
                                ">

                                    <div className="
                                        w-14
                                        h-14
                                        flex
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-yellow-50
                                        text-yellow-600
                                        mb-3
                                    ">
                                        <RiEyeLine size={25} />
                                    </div>

                                    <p className="font-medium text-gray-700">
                                        No Received Orders
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Your incoming orders will appear here.
                                    </p>

                                </div>

                            ) : (

                                <div className="
                                    w-full
                                    overflow-x-auto
                                    rounded-xl
                                    border
                                    border-gray-100
                                ">

                                    <table className="
                                        table-auto
                                        w-full
                                        text-left
                                        min-w-[650px]
                                    ">

                                        <thead>

                                            <tr>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Order ID
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Order Date
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Total Item
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Price
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {sellerOrders.map((order) => (

                                                <tr
                                                    key={order.id}
                                                    className="hover:bg-yellow-50 transition-colors"
                                                >

                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                    ">
                                                        <Link
                                                            className="
                                                                font-semibold
                                                                text-yellow-600
                                                                hover:text-yellow-700
                                                            "
                                                        >
                                                            {order.id.slice(0, 5)}
                                                        </Link>
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        text-sm
                                                        text-gray-600
                                                    ">
                                                        {order.createdAt
                                                            .toDate()
                                                            .toLocaleString(
                                                                "en-IN",
                                                                {
                                                                    dateStyle: "medium"
                                                                }
                                                            )}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-medium
                                                    ">
                                                        x
                                                        {order.items
                                                            ? order.items.reduce(
                                                                (sum, item) =>
                                                                    sum + item.quantity,
                                                                0
                                                            )
                                                            : order.quantity}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-bold
                                                        text-gray-900
                                                    ">
                                                        ₹
                                                        {order.items
                                                            ? Number(
                                                                order.items.reduce(
                                                                    (sum, item) =>
                                                                        sum + item.price,
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

                        </div>


                        <div className="
                            flex
                            justify-center
                            items-center
                            pt-3
                            text-sm
                            font-medium
                            text-yellow-600
                            hover:text-yellow-700
                            cursor-pointer
                        ">
                            Manage Orders
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MY ORDERS
            ====================================================== */}

            <section className="
                w-full
                flex
                flex-col
                mt-14
            ">

                <div className="
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                ">

                    <div>
                        <h2 className="
                            text-2xl
                            font-bold
                            text-gray-900
                        ">
                            My Orders
                        </h2>

                        <p className="
                            text-sm
                            text-gray-500
                            mt-1
                        ">
                            Track your purchases and payment details.
                        </p>
                    </div>

                </div>


                <div className="
                    w-full
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                    mt-6
                ">

                    <div className="
                        bg-white
                        w-full
                        p-5
                        sm:p-7
                        rounded-2xl
                        border
                        border-yellow-200
                        shadow-[0_10px_35px_-20px_rgba(0,0,0,0.25)]
                        flex
                        flex-col
                        gap-4
                    ">

                        <div className="
                            flex
                            justify-between
                            items-center
                            pb-4
                            border-b
                            border-gray-100
                        ">

                            <div>
                                <h3 className="font-bold text-lg text-gray-900">
                                    Order History
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    Your recent purchases
                                </p>
                            </div>


                            <div className="
                                w-10
                                h-10
                                flex
                                justify-center
                                items-center
                                bg-yellow-400
                                hover:bg-yellow-500
                                rounded-xl
                                cursor-pointer
                                shadow-sm
                                transition-all
                                hover:scale-105
                            ">
                                <RiEyeLine size={20} />
                            </div>

                        </div>


                        <div>

                            {buyerOders.length === 0 ? (

                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    py-14
                                    text-center
                                ">

                                    <div className="
                                        w-16
                                        h-16
                                        flex
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-yellow-50
                                        text-yellow-600
                                        mb-4
                                    ">
                                        <RiStickyNoteAddFill size={28} />
                                    </div>

                                    <p className="
                                        text-lg
                                        font-semibold
                                        text-gray-800
                                    ">
                                        No Orders Yet
                                    </p>

                                    <p className="
                                        text-sm
                                        text-gray-500
                                        mt-1
                                    ">
                                        Explore our store and find your next book.
                                    </p>

                                    <Link
                                        className="
                                            mt-4
                                            inline-flex
                                            items-center
                                            justify-center
                                            bg-yellow-400
                                            hover:bg-yellow-500
                                            text-gray-900
                                            font-semibold
                                            px-5
                                            py-2.5
                                            rounded-xl
                                            text-sm
                                            transition-colors
                                        "
                                        to={"/store"}
                                    >
                                        Go To Shop
                                    </Link>

                                </div>

                            ) : (

                                <div className="
                                    w-full
                                    overflow-x-auto
                                    rounded-xl
                                    border
                                    border-gray-100
                                ">

                                    <table className="
                                        table-auto
                                        w-full
                                        text-center
                                        min-w-[1000px]
                                    ">

                                        <thead>

                                            <tr>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Order ID
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Order Date
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Total Item
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Price
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Order Status
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Payment Status
                                                </th>

                                                <th className="
                                                    px-4
                                                    py-3
                                                    font-semibold
                                                    text-xs
                                                    uppercase
                                                    tracking-wide
                                                    bg-yellow-400
                                                ">
                                                    Payment Method
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {buyerOders.map((order) => (

                                                <tr
                                                    key={order.id}
                                                    className="hover:bg-yellow-50 transition-colors"
                                                >

                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                    ">
                                                        <Link
                                                            to={`/order-success/${order.id}`}
                                                            className="
                                                                font-semibold
                                                                text-yellow-600
                                                                hover:text-yellow-700
                                                            "
                                                        >
                                                            {order.id.slice(0, 5)}
                                                        </Link>
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        text-sm
                                                        text-gray-600
                                                    ">
                                                        {order.createdAt
                                                            .toDate()
                                                            .toLocaleString(
                                                                "en-IN",
                                                                {
                                                                    dateStyle: "medium"
                                                                }
                                                            )}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-medium
                                                    ">
                                                        x
                                                        {order.items
                                                            ? order.items.reduce(
                                                                (sum, item) =>
                                                                    sum + item.quantity,
                                                                0
                                                            )
                                                            : order.quantity}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        font-bold
                                                        text-gray-900
                                                    ">
                                                        ₹
                                                        {order.items
                                                            ? Number(
                                                                order.items.reduce(
                                                                    (sum, item) =>
                                                                        sum + item.price,
                                                                    0
                                                                )
                                                            ) + 50
                                                            : Number(order.price) + 50}
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                    ">
                                                        <span className="
                                                            inline-flex
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            bg-blue-50
                                                            text-blue-700
                                                            border
                                                            border-blue-100
                                                            text-xs
                                                            font-semibold
                                                        ">
                                                            {order.orderStatus}
                                                        </span>
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                    ">
                                                        <span className="
                                                            inline-flex
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            bg-green-50
                                                            text-green-700
                                                            border
                                                            border-green-100
                                                            text-xs
                                                            font-semibold
                                                        ">
                                                            {order.paymentStatus}
                                                        </span>
                                                    </td>


                                                    <td className="
                                                        border-b
                                                        border-gray-100
                                                        px-4
                                                        py-3
                                                        text-sm
                                                        font-medium
                                                        text-gray-700
                                                    ">
                                                        {order.paymentMethod}
                                                    </td>

                                                </tr>

                                            ))}

                                        </tbody>

                                    </table>

                                </div>

                            )}

                        </div>


                        {buyerOders.length > 0 && (
                            <div className="
                                flex
                                justify-center
                                items-center
                                pt-3
                                text-sm
                                font-medium
                                text-yellow-600
                                hover:text-yellow-700
                                cursor-pointer
                            ">
                                View More
                            </div>
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                ADDRESSES
            ====================================================== */}

            <section className="
                w-full
                flex
                flex-col
                mt-14
            ">

                <div className="
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                        text-gray-900
                    ">
                        My Addresses
                    </h2>

                    <p className="
                        text-sm
                        text-gray-500
                        mt-1
                    ">
                        Manage your shipping and billing information.
                    </p>

                </div>


                <div className="
                    w-full
                    grid
                    grid-cols-1
                    xl:grid-cols-2
                    gap-6
                    px-4
                    sm:px-6
                    lg:px-10
                    xl:px-16
                    mt-6
                ">


                    {/* =================================================
                        SHIPPING ADDRESS
                    ================================================== */}

                    <div className="
                        bg-white
                        w-full
                        p-5
                        sm:p-7
                        rounded-2xl
                        border
                        border-yellow-200
                        shadow-[0_10px_35px_-20px_rgba(0,0,0,0.25)]
                    ">

                        <div className="
                            flex
                            justify-between
                            items-center
                            pb-4
                            mb-4
                            border-b
                            border-gray-100
                        ">

                            <div>

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                ">

                                    <div className="
                                        w-2
                                        h-7
                                        rounded-full
                                        bg-yellow-400
                                    "></div>

                                    <h3 className="
                                        font-bold
                                        text-lg
                                        text-gray-900
                                    ">
                                        Shipping Address
                                    </h3>

                                </div>

                                <p className="
                                    text-xs
                                    text-gray-500
                                    mt-1
                                ">
                                    Your delivery address
                                </p>

                            </div>


                            <button
                                type="button"
                                className="
                                    w-10
                                    h-10
                                    flex
                                    justify-center
                                    items-center
                                    bg-yellow-400
                                    hover:bg-yellow-500
                                    rounded-xl
                                    cursor-pointer
                                    shadow-sm
                                    transition-all
                                    hover:scale-105
                                "
                                onClick={() => setEditShippingAdd(true)}
                            >
                                <RiEdit2Line size={19} />
                            </button>

                        </div>


                        <div className="
                            w-full
                            flex
                            flex-col
                            gap-3
                        ">

                            <div className="
                                p-3
                                rounded-xl
                                bg-gray-50
                                border
                                border-gray-100
                            ">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                    Address Line 1
                                </span>

                                <span className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.addressLine1}
                                </span>
                            </div>


                            <div className="
                                p-3
                                rounded-xl
                                bg-gray-50
                                border
                                border-gray-100
                            ">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                    Address Line 2
                                </span>

                                <span className="text-sm font-medium text-gray-800">
                                    {userData?.shippingAddress?.addressLine2}
                                </span>
                            </div>


                            <div className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            ">

                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        Landmark
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.shippingAddress?.landMark}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        City
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.shippingAddress?.city}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        State
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.shippingAddress?.state}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        Country
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.shippingAddress?.country}
                                    </span>
                                </div>

                            </div>


                            <div className="
                                flex
                                justify-between
                                items-center
                                p-3
                                rounded-xl
                                bg-yellow-50
                                border
                                border-yellow-100
                            ">

                                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-700">
                                    Pincode
                                </span>

                                <span className="font-bold text-gray-900">
                                    {userData?.shippingAddress?.pincode}
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        BILLING ADDRESS
                    ================================================== */}

                    <div className="
                        bg-white
                        w-full
                        h-fit
                        p-5
                        sm:p-7
                        rounded-2xl
                        border
                        border-yellow-200
                        shadow-[0_10px_35px_-20px_rgba(0,0,0,0.25)]
                    ">

                        <div className="
                            flex
                            justify-between
                            items-center
                            pb-4
                            mb-4
                            border-b
                            border-gray-100
                        ">

                            <div>

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                ">

                                    <div className="
                                        w-2
                                        h-7
                                        rounded-full
                                        bg-yellow-400
                                    "></div>

                                    <h3 className="
                                        font-bold
                                        text-lg
                                        text-gray-900
                                    ">
                                        Billing Address
                                    </h3>

                                </div>

                                <p className="
                                    text-xs
                                    text-gray-500
                                    mt-1
                                ">
                                    Your billing information
                                </p>

                            </div>


                            <button
                                type="button"
                                className="
                                    w-10
                                    h-10
                                    flex
                                    justify-center
                                    items-center
                                    bg-yellow-400
                                    hover:bg-yellow-500
                                    rounded-xl
                                    cursor-pointer
                                    shadow-sm
                                    transition-all
                                    hover:scale-105
                                "
                                onClick={() => SetEditBillingAddress(true)}
                            >
                                <RiEdit2Line size={19} />
                            </button>

                        </div>


                        <div className="
                            w-full
                            flex
                            flex-col
                            gap-3
                        ">

                            <div className="
                                p-3
                                rounded-xl
                                bg-gray-50
                                border
                                border-gray-100
                            ">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                    Address Line 1
                                </span>

                                <span className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.addressLine1}
                                </span>
                            </div>


                            <div className="
                                p-3
                                rounded-xl
                                bg-gray-50
                                border
                                border-gray-100
                            ">
                                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                    Address Line 2
                                </span>

                                <span className="text-sm font-medium text-gray-800">
                                    {userData?.billingAddress?.addressLine2}
                                </span>
                            </div>


                            <div className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-3
                            ">

                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        Landmark
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.billingAddress?.landMark}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        City
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.billingAddress?.city}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        State
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.billingAddress?.state}
                                    </span>
                                </div>


                                <div className="
                                    p-3
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-100
                                ">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                                        Country
                                    </span>

                                    <span className="text-sm font-medium text-gray-800">
                                        {userData?.billingAddress?.country}
                                    </span>
                                </div>

                            </div>


                            <div className="
                                flex
                                justify-between
                                items-center
                                p-3
                                rounded-xl
                                bg-yellow-50
                                border
                                border-yellow-100
                            ">

                                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-700">
                                    Pincode
                                </span>

                                <span className="font-bold text-gray-900">
                                    {userData?.billingAddress?.pincode}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default UserProfile;
