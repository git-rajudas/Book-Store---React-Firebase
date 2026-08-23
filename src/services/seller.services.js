//  this file contains functions to handle seller related operations like getting seller products, getting seller orders, updating order status, etc.

import {
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from "firebase/firestore";

import { db } from "../firebase/config";

import Swal from "sweetalert2";


// Get seller orders

export const getSellerOrders =  async (user) => {
    try{
        const q = query(collection(db, "Orders"), where("sellerIds", "array-contains", user?.uid));
        
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc)=>{
            const data = doc.data();

            return{
                id: doc.id,
                ...doc.data(),

                items: data.items?.filter((item) => item.sellerId === user?.uid)|| [],
            }
            
        });

        
    }catch(error){
        Swal.fire({
            icon: "warning",
            title: "Error getting seller orders:",
            text: error.message,
            confirmButtonColor: "#facc15",
        });
    }
}

export const getSellerSales = async (sellerId) => {

}

export const getSellerCustomers = async (sellerId) => {

}


//  update order status

export const updateSellerOrderStatus = async (orderId, status ) => {
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