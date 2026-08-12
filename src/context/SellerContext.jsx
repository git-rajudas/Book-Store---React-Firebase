import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import Swal from "sweetalert2";

import { getSellerOrders } from "../services/seller.services";
import { getListedProducts } from "../services/product.services";

const sellerContext = createContext();

export const SellerContextProvider = ({ children }) => {
  const { user } = useAuth();

  const [ListedProduct, setProducts] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);

  useEffect(() => {

    if (!user) {
      console.log("No user found");
      return;
    }

    const fetchUserListing = async () => {
      try{
        const Books = await getListedProducts(user);
        setProducts(Books || []);
      }catch(error){
        Swal.fire({
            icon: 'error',
            title: "Something went wrong",
            text: `Unable to fetch seller listed products.${error.message}`
        })
      }
      
    };

    const getReceivedOrders = async () => {
      try {
        const OrdersRes = await getSellerOrders(user);
        setSellerOrders(OrdersRes || []);
      } catch (error) {
        console.error("Seller orders error:", error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Unable to fetch seller orders.",
        });
      }
    };


    fetchUserListing();
    getReceivedOrders();
  }, [user]);

  return (
    <sellerContext.Provider value={{ ListedProduct, sellerOrders }}>
      {children}
    </sellerContext.Provider>
  );
};

export const useSeller = () => useContext(sellerContext);
