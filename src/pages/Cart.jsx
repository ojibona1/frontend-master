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
    <div style={{ width: '40%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: 'purple' }}>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
          {item.name} - ${item.price}
          <button className='removeCart' onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p style={{ textAlign: 'right', fontWeight: 'bold' }}>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
      <button className='checkout'>CheckOut</button>
    </div>
  );
}

export default Cart