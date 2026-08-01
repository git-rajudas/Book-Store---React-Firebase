import { RiDeleteBin6Line } from '@remixicon/react'
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router';

function Cart() {
  const {
    loading,
    cartItems,
    totalAmount,
    totalQuantity,
    removeItem
  } = useCart();

  console.log(cartItems);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">Loading....</div>
    )
  }
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Cart</h1>
          </div>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500">
              Your cart is empty.
            </div>

          ) : (
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">

              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody className='w-full '>
                  {
                    cartItems.map((item) => {
                      return (
                        <tr>
                          <td className=" border-t-2 border-gray-200 px-4 py-3"><img className='w-[50px] h-[60px]' src={item.imageURL} alt="" /></td>
                          <td className=" border-t-2 border-gray-200 px-4 py-3">{item.title}</td>
                          <td className=" border-t-2 border-gray-200 px-4 py-3">{item.quantity}</td>
                          <td className=" border-t-2 border-gray-200 px-4 py-3">{item.id}</td>
                          <td className=" border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">{item.price}</td>
                          <td className=" border-t-2 border-gray-200 w-10 text-center cursor-pointer" >
                            <div onClick={() => removeItem(item.id)}><RiDeleteBin6Line /></div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>

              </table>
            </div>
          )}


          {cartItems.length === 0 ? (<div className="text-center text-gray-500">
              <NavLink to={'/'}>Go to Shop. </NavLink>
            </div>) :  
            
            ( <div className="flex justify-end-safe pl-4 mt-4 lg:w-2/3 w-full mx-auto  border-t-2 border-gray-200">
              <a className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0">Total Items: {totalQuantity}</a>
              <div className='flex justify-center items-center px-2 py-4'>
                <div className=" px-4 py-3 text-lg text-gray-900 ">Total Price: ₹{totalAmount}</div>
                <button className="ml-auto inline-flex items-center justify-center gap-2 bg-yellow-400  hover:border-amber-200 py-2 px-4 focus:outline-none hover:bg-amber-300  rounded-xl text-base mt-4 md:mt-0 cursor-pointer  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">Place Order</button>
              </div>

            </div>
            )}

        </div>
      </section>
    </div>
  )
}

export default Cart
