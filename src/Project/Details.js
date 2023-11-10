
import React, { useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Store1 } from './ContextAPI';
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Styles/Detail.css'
import { useCart } from './Cart/CartContext';


const Detail = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { addToCart } = useCart();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {cart} = useCart();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const goToCartPage = () => {
    navigate('/cart'); // Navigate to the CartPage
    toggleMenu(); // Close the menu after navigation
  };
  const { id } = useParams();
  const [ContextData] = useContext(Store1);
  console.log(id);
  const selectedItem = ContextData.find((item) => item && item.id === parseInt(id));

  // If no item is found, you can handle it accordingly
  if (!selectedItem) {
    navigate('/404'); 
    return null;
  }

  const item = ContextData.find(item =>  item && item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  
  const handleBuyNow = () => {
    addToCart(item);
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };


  return (
    <div className='Detail'>
        <div className='navbar-container2'>
      
      <img className='logo' src='https://tse1.mm.bing.net/th?id=OIP.ZxJKzELlJx69HC_0E0qpMAHaFj&pid=Api&P=0&h=180' alt='not available' />
      <h2 className='buy' style={{ color: 'white' }}>Buy with Smile &#128519;</h2>
      <div className='navbar'>
        
        <div className='others1' style={{marginTop:'45px'}}>
        <input type='text' placeholder='search here &#128269;' className='inputsearch' />
        <button style={{ fontSize: '20px',color:'white' }} className='cart' onClick={goToCartPage}>&#128722;({cart.length})</button>
        <button style={{ fontSize: '20px', color: 'white' }} className='like'> &#10084;</button>
        <div className="dropdown"><button className='profile' style={{ fontSize: '30px', color: 'red' }}>👤 &#65039;</button>
        <div className="dropdown-content">
                <ul>
              <li><NavLink to="/login" className='sublist'>Login</NavLink></li>
              <li><NavLink to="/register" className='sublist'>SignUp</NavLink></li>
              <li><NavLink to="/login" className='sublist'>Logout</NavLink></li>
              </ul>
            </div>
          </div></div>
      </div>
    </div>
      <div className='mainDetails'>
        {/* Render details for the selected item */}
        <div>

          <img src={selectedItem.bollywoodimg} alt={selectedItem.name} className='subImg2' /></div>
          <div className='rightDetails'><p className='name2'>{selectedItem.name}</p>
          <p className='rating2'>
            Rating: {selectedItem.rating}
            <span style={{ color: 'yellow', fontSize: '20pt', marginTop: '10px' }}>{selectedItem.rating_stars}</span>
          </p>
          <p className='price2'>Price: ₹ {selectedItem.price}</p>
          <table><tr>
            <td>About</td>
            <td>Description</td>
            </tr>
            <tr>
            <td>{selectedItem.heading}</td>
            <td>{selectedItem.description}</td>
            </tr></table>
          <button className='bestSellerButton2' onClick={handleBuyNow}>ADD TO CART</button></div>
          
        
      </div>
      {orderPlaced && (
        <>
        <div className="popup-message1" >
          <p > ✅ Added To Cart!</p>
          <div className="green-line"></div>
        </div>
         </>
      )}
      <Footer />
    </div>
  );
};

export default Detail;

