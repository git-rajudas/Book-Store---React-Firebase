import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { getBuyerOrders } from "../services/order.services";
import { getUser } from "../services/user.services";
import { getListedProducts } from "../services/product.services";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const {user} = useAuth();
    // User Data
    const [userData, setUserData] = useState(null);
    const [ListedBook, setListBook] = useState([]);
    const [buyerOders, setBuyerOrders] = useState('');


    useEffect(()=>{
        if(!user) return;

         const fetchUserData = async () => {
            if (!user) return;
            const data = await getUser(user.uid);
            setUserData(data);
        }

        const fetchUserListing = async () => {
            if (!user) return;
            const Books = await getListedProducts(user);
            setListBook(Books)
        }
        

        const getOrders = async () => {
            const OrdersData = await getBuyerOrders(user);
            setBuyerOrders(OrdersData);
        }


        fetchUserData();
        fetchUserListing()
        getOrders()
    },[user]);    

    return(
        <UserContext.Provider value={{userData,ListedBook,buyerOders}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext);