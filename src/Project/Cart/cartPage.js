import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../Styles/cartPage.css';
import Footer from '../Footer/Footer';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, calculateTotal } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleIncrement = (item) => {
    incrementQuantity(item);
  };

  const handleDecrement = (item) => {
    decrementQuantity(item);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleBuyNow = () => {

    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  return (
    <div>
      <h2 style={{ fontSize: '25pt', textAlign: 'center' }}>My Cart</h2>

      {cart.length === 0 ? (
        <>
          <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '18pt' }}>Your cart is empty.</p>
          <img className='empty' src='https://tse2.mm.bing.net/th?id=OIP.W9izZcYxZf_GXgASWt06OgEjDW&pid=Api&P=0&h=180' alt='' />
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div className="cartmain">
                  <div className="left">
                    <img className="cartimg" src={item.bollywoodimg} alt="" />
                  </div>
                  <div className="right">
                    <p style={{ wordWrap: 'break-word' }}>{item.name}</p>{' '}
                    <p style={{ color: 'brown', fontWeight: '500' }}>Price: ₹ {item.price} each{' '}</p>
                    <button onClick={() => handleIncrement(item)}>+</button>{' '}
                    {item.quantity} <button onClick={() => handleDecrement(item)}>-</button> <br />
                    <button onClick={() => handleRemove(item)} style={{ backgroundColor: 'coral' }}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="carttotal">Total Amount: ₹ {calculateTotal(cart)}</p>
          <button className="buybutton" onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}

      {orderPlaced && (
        <>
        <div className="popup-message">
          <p> ✅ Order placed!</p>
          <div className="green-line"></div>
        </div>
         </>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;
