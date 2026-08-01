import { addDoc, collection, serverTimestamp, getDoc, getDocs, query, doc, updateDoc, deleteDoc, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { uploadImage } from "../services/cloudinary.services";


// add your product services here

export const addProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "Books"), {
            ...data,
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding product: ", error);
        throw error;
    }

};


export const createListing = async (user, { name, isbn, price, coverpic }) => {
    const imageURL = await uploadImage(coverpic);
    console.log(imageURL)
    return addProduct({
        name: name.trim(),
        isbn: isbn.trim(),
        price: Number(price),
        imageURL,
        userID: user.uid,
        userEmail: user.email,
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",

        sellerId: user.uid,
        sellerName: user.displayName,
        status: "available",

        createdAt: serverTimestamp(),

    });
};




// // Get Books from firestore
export const getProducts = async () => {
    
    const q = query(collection(db, "Books"));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return products;
};

// Get a single product by id

export const getProduct = async (id) => {
    const docRef = doc(db, "Books", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
        return {
            id: snapshot.id,
            ...snapshot.data()
        }
    }
    return null;
};


// for profile page seller listed book 

export const getListedProducts = async (user) => {
     if (!user) {
        return [];
    }
    const q = query(collection(db, "Books"), where("userID", "==", user.uid || "sellerId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return products;
};




// Update and delete product services

export const updateProduct = async (id, data) => {
    const docRef = doc(db, "Books", id);
    await updateDoc(docRef, data);
};

// Delete product service

export const deleteProduct = async (id) => {
    const docRef = doc(db, "Books", id);
    await deleteDoc(docRef);
};