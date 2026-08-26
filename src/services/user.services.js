import Swal from "sweetalert2";


import { doc, setDoc, getDoc, updateDoc, serverTimestamp,deleteDoc} from "firebase/firestore";
import { updateEmail, updatePassword, updateProfile, sendEmailVerification, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";


export const addUser = async (user) => {
    try {
        await setDoc(doc(db, "Users", user.uid), {
            uid: user.uid,
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
            email: user.email,
            phoneNumber: user.phoneNumber,
            roles: {
                user: true,
                admin: false,
            },

            shippingAddress: {
                addressLine1: "",
                addressLine2: "",
                landMark: "",
                city: "",
                state: "",
                country: "",
                pincode: "",
            },

            billingAddress: {
                addressLine1: "",
                addressLine2: "",
                landMark: "",
                city: "",
                state: "",
                country: "",
                pincode: "",
            },

            createdAt: serverTimestamp(),
        });


        Swal.fire({
            icon: 'success',
            title: 'Profile Created',
            confirmButtonColor: '#FFD22F'
        })
    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Profile Not Create",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    };
    
    return user.uid;
};

export const getUser = async (uid) => {
    const docRef = doc(db, "Users", uid);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
        return {
            id: snapshot.id,
            ...snapshot.data()
        }
    }
    return null;
};

// start Update User info functions

export const updateUserProfile = async (user, displayname, phoneNumber, photoURL) => {

    const userRef = doc(db, "Users", user.uid);
    try {
        await updateDoc(userRef, {
            displayName: displayname || "",
            phoneNumber: phoneNumber || "",
            photoURL: photoURL|| "",
        })

        await updateProfile(user, {
            displayName: displayname || "",
            photoURL: photoURL || "",
        });

        Swal.fire({
            icon: "success",
            title: "Profile Updated",
            confirmButtonColor: '#FFD22F'
        })

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        })
    }
}


export const updateUserProfilePic = async (user, photoURL) =>{
    const userRef = doc(db, "Users", user.uid);
    try{
        await updateDoc(userRef,{
            photoURL: photoURL,
        })

        await updateProfile(user,{
            photoURL: photoURL,
        })

        Swal.fire({
            icon: "success",
            title: "Profile Photo Updated",
            confirmButtonColor: '#FFD22F'
        })


    }catch(error){
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        })
    }
}


export const updateUserEmail = async (user,email) => {
    try {
        await updateEmail(user, email);
        await updateDoc(doc(db, "Users", user.uid), { email });

        Swal.fire({
            icon: "success",
            title: "Email Updated",
            confirmButtonColor: '#FFD22F'
        });
    }catch(error){
        console.log(error);

        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        });
    }

}

export const updateUserPassword = async (password) => {
    const user = auth.currentUser;
    await updatePassword(user, password).then(() => {
        console.log("Your Password updated!");
    }).catch((error) => {
        console.log("error", error);
    })
}

// start Update User info (Name, Phone, Email)

export const updateUserInfo = async (user, newName, newPhoneNumber, newEmail) => {
    const userRef = doc (db, "Users", user.uid);
    try{
        await updateDoc(userRef, {
            displayName: newName || "",
            phoneNumber: newPhoneNumber || ""
        })
        await updateUserEmail(user, newEmail);
    }catch(error){
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}


// send email verification


export const sendUserEmailVerification = async (user) => {
    try {
        await sendEmailVerification(user)
        Swal.fire({
            icon: "success",
            title: "Email Send For Verification",
            confirmButtonColor: '#FFD22F'
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        });
    }


}

// send password reset email

export const sendUserPasswordResetEmail = async (auth, email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        return {
            success: true,
        };
    }catch(error){
        return {
            success: false,
            error,
        };
          
    }
}

// Delete the user from document or auth

export const removeUser = async (user) => {
    try{

        await deleteDoc(doc(db,"Users",  user.uid ));
        await deleteUser(user)

        Swal.fire({
            icon: "success",
            title: "User deleted",
            confirmButtonColor: '#FFD22F'
        });
    }catch(error){

        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        });
    }
    
}

// update user shipping address

export const updateUserShippingAddress = async (user, Address) => {
    const userRef = doc(db, "Users", user.uid);
    try {
        await updateDoc(userRef, {
            shippingAddress: Address || {},
        })

        Swal.fire({
            icon: "success",
            title: "Shipping Address Updated",
            confirmButtonColor: '#FFD22F'
        })

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        })
    }
}



// update user billing address

export const updateUserBillingAddress = async (user, Address) => {
    const userRef = doc(db, "Users", user.uid);
    try {
        await updateDoc(userRef, {
            billingAddress: Address || {},
        })

        Swal.fire({
            icon: "success",
            title: "Billing Address Updated",
            confirmButtonColor: '#FFD22F'
        })

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error.message,
            confirmButtonColor: "#facc15",
        })
    }
}