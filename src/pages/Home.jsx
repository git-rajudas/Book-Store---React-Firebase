import { useEffect, useState } from "react";
import Card from "../components/Card"

import Navbar from "../components/Navbar"

import { getProducts } from "../services/product.services";
import { useAuth } from "../context/AuthContext";

function Home() {
  
  const { user } = useAuth();
  
  const [products , setProducts] = useState([]);
  
  useEffect(()=>{

    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  },[user])

  return (
    <div className="w-full">
      <Navbar />
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           {products.map((product)=>
            <Card key={product.id} product={product} />
           )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
