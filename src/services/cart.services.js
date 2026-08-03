
import { db } from "../firebase/config";

import { serverTimestamp, setDoc, doc, getDoc, updateDoc, increment, deleteDoc, query, collection, getDocs } from "firebase/firestore";

export const addToCart = async (user, product) => {
    try {
        const itemRef = doc(db, "Carts", user.uid, "Items", product.id);
        const snap = await getDoc(itemRef)
        if (snap.exists()) {
            await updateDoc(itemRef, {
                quantity: increment(1),
            });
        } else {

            await setDoc(itemRef,
                {
                    productId: product.id,

                    title: product.name,
                    imageURL: product.imageURL,
                    price: product.price,
                    
                    quantity: 1,
                    
                    sellerId: product.sellerId,
                    sellerName: product.displayName || "",

                    createdAt: serverTimestamp(),
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
}


export const getCart = async (user) => {
    const q = query(collection(db, "Carts", user.uid, "Items"));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            },
        )
    });
    return items;
}

export const removeFromCart = async (user, productId) => {
    console.log("removeFromCart",productId);
    console.log("removeFromCart User ID",user.id);
    
    try{
        const ref = doc(db, "Carts", user.uid, "Items", productId);
        await deleteDoc(ref);

    }catch(error){
        console.error("Error removing cart item:", error);
        throw error;
    }
    
}
