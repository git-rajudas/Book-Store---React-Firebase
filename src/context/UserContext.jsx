import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { getBuyerOrders } from "../services/order.services";
import { getUser } from "../services/user.services";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const {user} = useAuth();
    // User Data
    const [userData, setUserData] = useState(null);
    const [buyerOders, setBuyerOrders] = useState([]);


    useEffect(()=>{
        if(!user) return;

         const fetchUserData = async () => {
            if (!user) return;
            const data = await getUser(user.uid);
            setUserData(data);
        }

        const getOrders = async () => {
            if (!user) return;
            const OrdersData = await getBuyerOrders(user);
            setBuyerOrders(OrdersData);
        }

        fetchUserData();
        getOrders()
    },[user]);    

    return(
        <UserContext.Provider value={{userData,buyerOders}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext);