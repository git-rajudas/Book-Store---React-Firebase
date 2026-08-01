
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import {
    getCart,
    addToCart,
    removeFromCart,
} from "../services/cart.services";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const { user } = useAuth();
    const [cartItems, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    // Load cart when user logs in

    useEffect(() => {
        if(!user){
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            try{
                setLoading(true)
                const data = await getCart(user)
                setItems(data);
            }catch(error){
                console.error("Error fetching cart:", error);
            }finally{
                setLoading(false);
            }
        };
        
        fetchData();
    }, [user])


    // Add item to cart
    const addItem = async (product) =>{
        if(!user) return;
        try{
            await addToCart(user, product);
            // get updated cart
            const data = await getCart(user);

            // update context state
            setItems(data);
        }catch(error){
            console.log("Failed to add item:", error);
        }
    }

    // Remove item from cart
    const removeItem = async (productId) => {
        console.log("removeItem",productId);
        
         if (!user) return;
         try{
            await removeFromCart(user, productId);
            // get updated cart
            const data = await getCart(user);

            //update context state
            setItems(data);
         }catch(error){
            console.log("Failed to remove item:",error);
         }
    }

    const totalQuantity = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);

    const totalAmount = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);

    return (
        <CartContext.Provider value={{loading, cartItems, totalAmount, totalQuantity, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext);