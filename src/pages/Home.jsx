import { useEffect, useState } from "react";
import Card from "../components/Card"

import { getProducts } from "../services/product.services";

function Home() {

  
  const [products , setProducts] = useState([]);
  
  useEffect(()=>{

    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      console.log(data);
      
    };

    fetchProducts();
  },[])

  return (
    <div className="w-full min-h-screen bg-gray-50">
  <section className="w-full">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
          Explore
        </p>

        <h2 className="mt-1 text-3xl font-bold text-gray-900">
          Featured Books
        </h2>

        <p className="mt-2 text-gray-500">
          Discover your next great read.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
</div>
  )
}

export default Home
