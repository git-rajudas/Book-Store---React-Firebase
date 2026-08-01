

import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";

import { auth } from "../firebase/config";
import { addUser } from "./user.services";


const googleProvider = new GoogleAuthProvider();

export const signUp = async(email, password) => {
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    try{
        await addUser(userCredential.user);
        return userCredential.user;

    }catch(error){
        await userCredential.user.delete();
        throw error;
    }


}

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
}


export const signOutUser = () => {
    signOut(auth);
}

export const updateUserProfile = (displayname, photoURL, email, password) => {
    updateProfile(auth.currentUser, {
        displayName: displayname,
        photoURL: photoURL,
        email: email,
        password: password
    }).then(() => {
        console.log("Profile updated!");
        
        // Profile updated!
        // ...
    }).catch((error) => {
        console.log("error", error);
        
        // An error occurred
        // ...
    });
}