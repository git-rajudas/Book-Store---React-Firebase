import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from "firebase/firestore";

import { db } from "../firebase/config";

import Swal from "sweetalert2";

// Create Order

export const createOrder = async (user, item, deliveryAddress) => {
    try{

        const orderData = {
            //Buyer
            buyerId: user.uid,
            buyerName: user.displayName || "",
            buyerEmail: user.email || "",

            // seller

            sellerId: item.sellerId,
            sellerName: item.sellerName || "",

            // book
            productId: item.uid,
            productTitle: item.name,
            productImage: item.imageURL || "",
            price: Number(item.price),
            quantity: Number(item.quantity),

            // delivery address
            deliveryAddress,

            // status
            orderStatus: "pending",
            paymentStatus: "pending",

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),

        } ;

        const orderRef = await addDoc(collection(db, "Orders"), orderData);



        Swal.fire({
            icon: 'success',
            title: 'Your Order Created',
            confirmButtonColor: '#FFD22F'
        })

        return orderRef.id;


    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error getting buyer orders:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
    
}


// Get Buyer orders

export const getBuyerOrders =  async (user) => {
    try{
        const q = query(collection(db, "Orders"), where("buyerId", "==", user.id));
        
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));

    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error getting buyer orders:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}


// Get seller orders

export const getSellerOrders =  async (user) => {
    try{
        const q = query(collection(db, "Orders"), where("sellerId", "==", user.id));
        
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));

    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error getting seller orders:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}


// Get single orders

export const getOrder =  async (orderId) => {
    try{
        const orderRef = doc(db, "Orders", orderId);

        const snapshot = await getDoc(orderRef);

        if(!snapshot.exists()){
            return null;
        }

        return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));

    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error getting order:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}


//  update order status

export const updateOrderStatus = async (orderId, status ) => {
    try{

        const orderRef = doc(db, "Orders", orderId);

        await updateDoc(orderRef, {
            orderStatus: status,
            updatedAt: serverTimestamp(),
        })

    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error updating order status:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}