import React, { useContext,useState } from 'react'
import { Store1 } from './ContextAPI'
  import Carousel from './Carsoul/Carsoul';
  import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom'

  import './Styles/Home.css'
  import './Styles/cartPage.css'
  import { NavLink } from 'react-router-dom';

// import ImageCarousel2 from './Carsoul/Carousel2';
import MultipleItemsCarousel from './Carsoul/Carousel2';
import Footer from './Footer/Footer';
import CartCount from './Cart/cart';
const Home = () => {
  const[ContextData]=useContext(Store1);
  console.log(ContextData);
  const randomIndex = Math.floor((Math.random() * 10)+1);
  console.log(randomIndex)

  
  const navigate=useNavigate();
// const token=localStorage.getItem("token")
// console.log(token)
//   useEffect(()=>{
// if(token){
//   axios.get("http://localhost:7000/",{headers:{
//     "authorization":`Bearer ${token}`
//   }})
//   .then(res=>console.log(res.data))
// }
// else{
//   navigate('/')
// }
//   },[token,navigate])
//   const handler=()=>{
//     localStorage.removeItem("token")
//     navigate('/login')
//   }
const [showLoginPopup, setShowLoginPopup] = useState(false);
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    console.log('Handle Buy Now called');
    if (!token) {
      setShowLoginPopup(true);
      alert('Please Login First to continue with purchase!!!')    
    navigate(0);
    return false;
    } else {
      console.log('Handle Buy Now called222222222222');
    }
  };
  return (
    <div className='home'>
    <Carousel />
    <div className='bestSellerContainer'>
    {/* <button className='logout' onClick={handler}>logout</button> */}
      <p className='bestSeller'>BEST SELLER</p>
      <hr className='bestSellerHr'></hr>
<div className='cards'>
  <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 2 ).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item && item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
    </div>
   
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 1).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 5).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 9).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             
             </div>)
          })} 
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 7).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
          
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 11).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
          
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 15).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
          
    </div>
    <div className='box'>
  {ContextData.filter((item)=> item && item.id === randomIndex + 16).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <p className='name' >{item.name}</p> 
             <p className='price' >Price: ₹ {item.price}</p> 
             <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
             <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
             </div>)
          })} 
          
    </div>
  </div>
  
</div>

{showLoginPopup && (
        <>
        <div className="popup-message">
          <p> ✅ Login First Please!</p>
          <div className="green-line"></div>
        </div>
         </>
      )}

      
      {/* {ContextData.filter((item)=> item.id===2).map((item,index)=>{
            console.log(item);
            return(   <div >
            <img src={item.bollywoodimg} alt={item.name} className='subImg' />
             <h1 className='image-text' >{item.rating}</h1> 
            </div>)
          })} */}

          <div ><img  className='gif' src='https://media3.giphy.com/media/3DWgvCmm3cwRq/200w.webp?cid=ecf05e470ejijy75msvw2qbthi4aphppc3zjhzsnxxzpz01l&ep=v1_gifs_search&rid=200w.webp&ct=g' alt=''/></div>

          <div className='otherOptions'>
            <div className='otherOptionsBox'>
              <img  className='otherImg' src='https://pngimg.com/uploads/free_shipping/free_shipping_PNG2.png' alt='' />
              <p style={{fontWeight:'700', textAlign:'center',position:'relative',top:'-35px'}}>FREE SHIPPING</p>
              <p style={{fontSize:'9pt',textAlign:'center',position:'relative',top:'-45px'}}>Welcome to our online store, where shopping just got even more rewarding! We're excited to introduce our exclusive Free Shipping offer, designed to make your shopping experience truly delightful.</p>
            </div>
            <div className='otherOptionsBox'>
              <img  className='otherImg' src='https://media.istockphoto.com/vectors/grunge-red-refund-word-round-rubber-seal-stamp-on-white-background-vector-id1041541100?k=6&m=1041541100&s=170667a&w=0&h=V8hT4pBL737KT0vYySeZg9U00rSMAdk84VZ3qC_U2Rk=' alt='' />
              <p style={{fontWeight:'700', textAlign:'center',position:'relative',top:'-35px'}}>100% REFUND</p>
              <p style={{fontSize:'9pt',textAlign:'center',position:'relative',top:'-45px'}}>Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At [Treat yo'self], your satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.</p>
            </div>
            <div className='otherOptionsBox'>
              <img  className='otherImg' src='https://thumbs.dreamstime.com/b/icon-support-customer-service-call-center-vector-icons-help-phone-contact-business-line-symbol-communication-telephone-technology-140921364.jpg' alt='' />
              <p style={{fontWeight:'700', textAlign:'center',position:'relative',top:'-35px'}}>SUPPORT 24/7</p>
              <p style={{fontSize:'9pt',textAlign:'center',position:'relative',top:'-45px'}}>At [Treat yo'self], your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.</p>
            </div>

          </div>

          <MultipleItemsCarousel/>
          <CartCount/>
          <Footer/>
          
    </div>
  )   
}

export default Home
