import React from 'react'

function Cart() {
  // State to store the items in the cart
  const [cartItems, setCartItems] = React.useState([{
    id : 1122,
    name : 'cashew',
    price : 49,
  }, {
    id : 1132,
    name : 'Mango',
    price : 87,
  }]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(i => i !== item));
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10 flex flex-col gap-6">
      <h2 className="text-center text-3xl font-bold text-purple-700 mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span className="text-lg text-gray-800">{item.name} <span className="text-gray-500">- ${item.price}</span></span>
              <button
                className="removeCart px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => removeFromCart(item)}
              >Remove</button>
            </div>
          ))}
        </div>
      )}
      <p className="text-right font-bold text-lg text-gray-800">Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
      <button className="checkout w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition">CheckOut</button>
    </div>
  );
}

export default Cart