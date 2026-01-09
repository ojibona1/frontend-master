import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteCart, getCart, reset } from '../features/cart/cartSlice';
import Loader from '../components/Loader';

const CartItem = ({ cart, onRemove }) => {
  return (
    <>
      {
        cart.map((item) => {
          return (
            <div key={item._id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span className="text-lg text-gray-800">{item.name} <span className="text-gray-500">- ${item.price}</span></span>
              <button
                className="removeCart px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => onRemove(item)}
              >Remove</button>
            </div>
          )
        })
      }
    </>
  )
}

function Cart() {

  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.user?.data?.email);


  const [cartItems, setCartItems] = useState([]);

  const { cart, isLoading, isSuccess, isError } = useSelector((state) => state.cart);

  const handleRemoveFromCart = useCallback((item) => {
    // Optimistically update UI
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem._id !== item._id));
    // Dispatch action to backend
    dispatch(removeFromCart({ code: item.code, email }));
  }, [dispatch, email]);

  useEffect(() => {
    if (isSuccess && cart) {
      setCartItems(cart.data);
    }
  }, [isSuccess, cart]);

  useEffect(() => {
    if (isError) {
      console.error('Error fetching cart data');
    }
  }, [isError]);



  useEffect(() => {
    if (email) {
      dispatch(getCart({ email }));
    }
    return () => {
      dispatch(reset());
    }
  }, [email, dispatch]);


  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 m-10 flex flex-col gap-6">
      <h2 className="text-center text-3xl font-bold text-purple-700 mb-4">Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <CartItem cart={cartItems} onRemove={handleRemoveFromCart} />
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
      <p className="text-right font-bold text-lg text-gray-800">Total: ${cartItems && cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + Number(item.price), 0) : 0}</p>
      <button className="checkout w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition">CheckOut</button>
    </div>
  );
}

export default Cart