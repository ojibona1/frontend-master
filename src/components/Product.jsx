import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import Loader from './Loader'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'


function Product({ product }) {
  const [isCurrentlyAdding, setIsCurrentlyAdding] = useState(false);
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { cart } = useSelector((state) => state.cart)

  const handleAddToCart = () => {

    if (!user || !user.data?.email) return;

    setIsCurrentlyAdding(true);

    dispatch(addToCart({ email: user.data.email, item: product }))

      .unwrap()
      .finally(() => {
        toast.success(`${product.name} added to cart!`);
        setIsCurrentlyAdding(false);
      });
    return
  }

  return (
    <div className='flex flex-col items-center w-full '>
      <div className="product-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-full max-w-xs m-2 transition-transform hover:scale-105 h-[300px]">
        <div className=''>
          <div className='w-50px h-70px'></div>
        </div>
        <div className=' flex flex-col items-center justify-end '>
          <div className='w-full flex items-center justify-between mb-2'>
            <span className='text-xs'>{product.name}</span>
            <span className="text-purple-700 font-bold text-xs ">${product.price}</span>
          </div>
          {product.image && (
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mb-2" />
          )}
          <button className="mt-2 p-1 px-4 bg-black text-white text-sm rounded transition " onClick={handleAddToCart}> {isCurrentlyAdding ? <Loader /> : 'Add to cart'} </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Product
