import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'
import Loader from './Loader'
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


function Product({ product, cart }) {
  const [isCurrentlyAdding, setIsCurrentlyAdding] = useState(false);
  const [isCurrentlyRemoving, setIsCurrentlyRemoving] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth)


  useEffect(() => {
    if (user) {
      if (cartItem && cartItem.length > 0) {
        setQuantity(cartItem?.length);
      } else {
        setQuantity(0);
      }
    }
  }, [cartItem, user]);

  useEffect(() => {
    const foundItems = cart?.data?.filter((item) => (item.code) === (product.code))

    setCartItem(foundItems);
  }, [cart, product]);

  const handleAddToCart = () => {
    if (!user || !user.data?.email) {
      setIsCurrentlyAdding(false);
      toast.info('Please log in to add items to your cart.');
      navigate('/login');
    }

    setIsCurrentlyAdding(true);

    dispatch(addToCart({ email: user.data.email, item: product }))

      .unwrap()
      .finally(() => {
        toast.success(`${product.name} added to cart!`);
        setIsCurrentlyAdding(false);
      });
    return
  }

  const handleIncrement = () => {
    if (!user || !user.data?.email) {
      toast.info('Please log in to add items to your cart.');
      navigate('/login');
      return;
    }
    setIsCurrentlyAdding(true);
    dispatch(addToCart({ email: user.data.email, item: product }))
      .unwrap()
      .finally(() => {
        toast.success(`${product.name} added to cart!`);
        setIsCurrentlyAdding(false);
      });
  };

  const handleDecrement = () => {
    if (!user || !user.data?.email) {
      toast.info('Please log in to update your cart.');
      navigate('/login');
      return;
    }
    setIsCurrentlyRemoving(true);
    dispatch(removeFromCart({ code: product.code, email: user.data.email }))
      .unwrap()
      .finally(() => {
        toast.success(`${product.name} removed from cart!`);
        setIsCurrentlyRemoving(false);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center w-full sm:w-full md:w-full  p-3 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 gap-2'>
      <div className='flex justify-between items-center w-full'>
        <h3 className='text-[12px] font-semibold text-gray-900'>{product.name}</h3>
        <span className='px-1 bg-red-500 rounded-lg text-white font-bold text-xs'>-50%</span>
      </div>
      <div className='flex flex-col items-center border-t border-b border-gray-200 w-full p-3'>
        <img src={product.image} alt={product.name} className='w-full h-[200px] object-contain mb-2' />
      </div>
      <div className='flex justify-between items-center w-full '>
        <span className='text-gray-500 line-through text-sm ml-2'>${product.price}</span>
        {quantity > 0 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              disabled={isCurrentlyRemoving || quantity === 0}
              className="p-2 h-7  w-7 bg-gray-200 rounded-full text-black text-sm hover:bg-gray-300 disabled:opacity-50 text-center flex items-center justify-center"
            >{
              isCurrentlyRemoving ? <Loader size='sm' /> : '-'
            }</button>
            <span className="font-semibold text-gray-800">{quantity}</span>
            <button
              onClick={handleIncrement}
              disabled={isCurrentlyAdding}
              className="p-2 h-7  w-7 bg-gray-200 rounded-full text-black text-sm hover:bg-gray-300 disabled:opacity-50 text-center flex items-center justify-center"
            >{
              isCurrentlyAdding ? <Loader size='sm' /> : '+'
            }</button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            disabled={isCurrentlyAdding}
            className={` text-black rounded-lg text-sm bg-gray-200 px-2 py-1 hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isCurrentlyAdding ? <Loader size='sm' /> : 'Add to Cart'}
          </button>
        )}
      </div>

      <ToastContainer />
    </div>
  )
}

export default Product
