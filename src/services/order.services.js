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

// Create Order single item

export const createOrder = async (user, item, shippingAddress, shippingMethod, paymentMethod) => {
    
    try{

        if (item.sellerId === user.uid) {
            Swal.fire({
                icon: "warning",
                title: "You are the owner of this item.",
                text: "Therefore, you cannot order the item you have listed.",
                confirmButtonColor: "#facc15",
            });

            return null;
        }

        const orderdata = {
            //Buyer
            buyerId: user.uid,
            buyerName: user.displayName || "",
            buyerEmail: user.email || "",

            // seller

            sellerId: item.sellerId,
            sellerName: item.sellerName || "",

            // book
            productId: item.id,
            productTitle: item.name,
            productImage: item.imageURL || "",
            price: Number(item.price),
            quantity: 1,

            // delivery address
            shippingMethod: shippingMethod,
            deliveryAddress: shippingAddress,

            // status
            orderStatus: "pending",

            paymentMethod: paymentMethod,
            paymentStatus: "pending",

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),

        } ;


        const orderRef = await addDoc(collection(db, "Orders"), orderdata);



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

// Create Order for multiple items

export const createOrderForMultipleItems = async (user, cartItems, shippingAddress, shippingMethod, paymentMethod) => {
    try{

        console.log(user, cartItems, shippingAddress, shippingMethod, paymentMethod) 

        if (!cartItems || cartItems.length === 0) {
            throw new Error("Cart is empty");
        }

        const ownItem = cartItems.find((item)=> item.sellerId === user.uid);

        if (ownItem) {
            Swal.fire({
                icon: "warning",
                title: "You own these items.",
                text: "Therefore, you cannot place an order for the items you have listed.",
                confirmButtonColor: "#facc15",
            });

            return null;
        }

        const orderData = {
            //Buyer
            buyerId: user.uid,
            buyerName: user.displayName || "",
            buyerEmail: user.email || "",

    

            // books
            items: cartItems.map((item)=>({
                productId: item.productId,
                productTitle: item.title,
                productImage: item.imageURL || "",
                price: Number(item.price),
                quantity: Number(item.quantity),

                // seller
                sellerId: item.sellerId,
                sellerName: item.sellerName || "",
            })),
            

            // delivery address
            shippingMethod: shippingMethod,
            deliveryAddress: shippingAddress,

            // status
            orderStatus: "pending",

            paymentMethod: paymentMethod,
            paymentStatus: "pending",

            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };

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
        const q = query(collection(db, "Orders"), where("buyerId", "==", user.uid));
        
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
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
        const q = query(collection(db, "Orders"), where("sellerId", "==", user.uid));
        
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
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

        if (snapshot.exists()) {
        return {
            id: snapshot.id,
            ...snapshot.data()
        };
    }

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