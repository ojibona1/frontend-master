import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import Loader from './Loader'
import { useState } from 'react';

function Product({ product }) {
  const [isCurrentlyAdding, setIsCurrentlyAdding] = useState(false);
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleAddToCart = () => {

    if (!user || !user.data?.email) return;

    setIsCurrentlyAdding(true);

    dispatch(addToCart({ email: user.data.email, item: product }))

      .unwrap()
      .finally(() => {
        setIsCurrentlyAdding(false);
      });
    return
  }

  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between w-full max-w-xs m-2 transition-transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">{product.description}</p>
      <span className="text-purple-700 font-bold text-xl mb-2">${product.price}</span>
      {product.image && (
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mb-2" />
      )}
      <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition w-full" onClick={handleAddToCart}>{isCurrentlyAdding ? <Loader /> : 'Add to Cart'}</button>
    </div>
  )
}

export default Product
