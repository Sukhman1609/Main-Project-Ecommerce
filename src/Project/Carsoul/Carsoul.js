import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./Carousel.css"; // Replace with the correct path to your CSS file

const ImageCarousel = () => (
  <div className="carousel-container">
    <Carousel autoPlay showThumbs={false} interval={3000}>
      {/* Slide 1 */}   
      <div className="carousel-slide">
        <img
          className="carousel-image"
          alt=""
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-bd13/k2-_c6e82c20-9928-4128-955b-9a08c0e7a89d.v1.jpg"
        />
        
      </div>

      <div className="carousel-slide">
        <img
          className="carousel-image"
          alt=""
          src="https://i.pinimg.com/originals/de/ab/e9/deabe9438ac70913365b7d011f57731b.jpg"
        /> 
      </div>
      <div className="carousel-slide">
        <img
          className="carousel-image"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/01/img15/brawner/MacBookPro0._CB459816407_.jpg"
        /> 
      </div>
      <div className="carousel-slide">
        <img
          className="carousel-image"
          alt=""
          src="https://ecommerce-prjctt.netlify.app/headset.png"
        /> 
      </div>
      <div className="carousel-slide">
        <img
          className="carousel-image"
          alt=""
          src="https://i.ytimg.com/vi/QocbtusrDJQ/maxresdefault.jpg"
        /> 
      </div>

    </Carousel>
  </div>
);

export default ImageCarousel;
