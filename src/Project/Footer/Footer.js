
import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img className='foimg' src='https://tse1.mm.bing.net/th?id=OIP.ZxJKzELlJx69HC_0E0qpMAHaFj&pid=Api&P=0&h=180' alt='Not Avaiable'/>
            <p >“Smile and Shop Online!!” </p>
          </div>
          <div className="footer-links">
            <h3 style={{color:'coral'}}>Quick Links</h3>
            <ul>
              <li><Link to="/" className='links2'>Home</Link></li>
              <li><Link to="/mobiles" className='links2'>Mobiles</Link></li>
              <li><Link to="/electronics" className='links2'>Electronics</Link></li>
              <li><Link to="/iphone" className='links2'>Iphone</Link></li>
              <li><Link to="/watches" className='links2'>Watches</Link></li>
              <li><Link to="/store" className='links2'>Store</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3 style={{color:'coral'}}>Follow Us</h3>
            <ul>
              <li><Link to='https://www.facebook.com/' className='folink' ><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
              <li><Link to='https://twitter.com/i/flow/login'className='folink' ><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
              <li><Link to='https://www.linkedin.com/feed/' className='folink' >
<i class="fa fa-linkedin" aria-hidden="true"></i>
</Link></li>
              <li><Link to='https://www.instagram.com/' className='folink' ><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
            </ul>
          </div>
        </div >
       

        <div className='con'>
        <p>We’ve *shopped around* and put together a list of the best quotes about shopping. Whether you love it of hate it, everyone has to go shopping every once in a while. Whether you are a bargain hunter or love to splurge, we’ve got just the quote for you! </p>
        </div>
        <div className="footer-contact">
          <h3 style={{color:'coral'}}>Contact Us</h3>
          <p>
          &#128205;123 Main Street<br />
           &nbsp;&nbsp;&nbsp;&nbsp; Amritsar, India<br />
            &#128231;Email: iShoponline@gmail.com<br />
            &#128241;Phone: +123-456-7890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{color:'coral'}}>&copy; {new Date().getFullYear()} iShop &#10084;&#65039;. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
