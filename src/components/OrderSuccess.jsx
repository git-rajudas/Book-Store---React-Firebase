import { RiCheckboxCircleLine } from '@remixicon/react';

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import { getOrder } from "../services/order.services";
import { useParams } from "react-router";

function OrderSuccess() {
  const {orderId} = useParams();
  const {user} = useAuth();
  const [orderData, setOrder] = useState('');
  console.log(orderId);
  
  useEffect(()=>{
    if(!user) return
    const fetchOrder = async() => {
      const orderDetails = await getOrder(orderId);
      setOrder(orderDetails);
    }
    fetchOrder()
  },[user]);
  
  console.log(orderData);
  

  return (
    <div>
      <div>Order ID : {orderId}</div>
      <div className=''></div>
      <RiCheckboxCircleLine size={18} />
      
    </div>
  )
}

export default OrderSuccess
