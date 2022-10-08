import React from 'react';
import './Carouselcomp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faBagShopping, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assests/car1.jfif';
import img2 from '../../assests/car2.jpg';
import img3 from '../../assests/webinar-banner-july8-2021-website.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Carouselcomp = () => {
    return (
      <div>
      <Carousel fade>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={img1}
    alt="First slide"
  />
  <Carousel.Caption>
      <div className='carinfo'>
      <h1 className='fresh'>FRESH</h1>
    <h1 className='organic'>ORGANIC</h1>
    <h1 className='honey'>HONEY</h1>
   <Link to='/shop'> <button className='carbtn mt-5'>SHOP NOW <FontAwesomeIcon icon={faChevronCircleRight} /> </button></Link> 
      </div>
    
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={img2}
    alt="Second slide"
  />

  <Carousel.Caption>
  <div className='carinfo2'>
      <h1 className='fresh'>FRESH</h1>
    <h1 className='organic'>ORGANIC</h1>
    <h1 className='honey'>HONEY</h1>
    <Link to='/shop'> <button className='carbtn mt-5'>SHOP NOW <FontAwesomeIcon icon={faChevronCircleRight} /> </button></Link> 
      </div>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={img3}
    alt="Third slide"
  />

  <Carousel.Caption>
  <div className='carinfo '>
      <h1 className='fresh'>FRESH</h1>
    <h1 className='organic'>ORGANIC</h1>
    <h1 className='honey'>HONEY</h1>
    <Link to='/shop'> <button className='carbtn mt-5'>SHOP NOW <FontAwesomeIcon icon={faChevronCircleRight} /> </button></Link> 
      </div>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  </div>
    );
};

export default Carouselcomp;