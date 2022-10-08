import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faBagShopping, faChevronCircleRight, faCar, faTruck } from '@fortawesome/free-solid-svg-icons'
import '../components/Cssfile/Home.css';
import img1 from '../assests/little1.png';
import img2 from '../assests/little2.png';
import img3 from '../assests/little3.png';
import img4 from '../assests/aboutcompany.jpg';
import img5 from '../assests/offer.png';
import Carouselcomp from '../components/Carousel/Carouselcomp';
import { Link } from 'react-router-dom';
import Homecard from '../components/Homecard/Homecard';
import Footercomp from '../components/Footer/Footercomp';
import Timercomp from '../components/Timer/Timercomp';
import Latestcomp from '../components/Cssfile/Latest/Latestcomp';

const Home = () => {
    return (
        <div className='homebody'>
        <Carouselcomp></Carouselcomp>

        <section className='littlepart container'>
           <div className="row">
            <div className="col-md-4">
                <div className='little1'>
                    <div className='little1info'>
                    <img className='img3' src={img1} alt="" />
                <h2>queen Bee Honey</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum labore corporis nam? Alias magnam id quidem totam quia vitae harum molestias beatae aperiam, nam voluptas incidunt tempora quam voluptatem et.</p>
                    </div>
                
                </div>
               
            </div>
            <div className="col-md-4">
                <div className='little2'>
                <div className='little1info'>
                    <img className='img3' src={img2} alt="" />
                <h2>queen Bee Honey</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum labore corporis nam? Alias magnam id quidem totam quia vitae harum molestias beatae aperiam, nam voluptas incidunt tempora quam voluptatem et.</p>
                    </div>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className='little3'>
                <div className='little1info'>
                    <img className='img3' src={img3} alt="" />
                <h2>queen Bee Honey</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum labore corporis nam? Alias magnam id quidem totam quia vitae harum molestias beatae aperiam, nam voluptas incidunt tempora quam voluptatem et.</p>
                    </div>
                </div>
               
            </div>
           </div>
        </section>

                    {/* .......................................................................................... */}
                       
                       
                        {/* about our company */}
            <section className='mt-5  container-fluid'>
            <div className="row aboutcompany">
                <div className="col-md-6">
                <img src={img4} alt="" />
                </div>
                <div className="col-md-6 text-start">
                    <h5>About Our Company</h5>
                    <br />
                    <br />
                <h1 className='abouth1'>All in one to make a</h1>
                <h1 className='abouth1'>different structure</h1>
                <br />

                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam dolor inventore eligendi voluptates explicabo, excepturi in, repudiandae ipsum iure pariatur, non officia alias dicta officiis fuga molestiae sapiente aperiam vel quae accusamus nisi. Incidunt consequuntur neque maxime in repudiandae?</p>

                <Link to='/about'> <button className='carbtn mt-5'>More About <FontAwesomeIcon icon={faChevronCircleRight} /> </button></Link> 
                </div>
            </div>
            </section>

            <section className='mt-5'>
                <div className='flashsale'>
                <h1>Flash <span style={{color:'red',fontWeight:'bold'}}> Sale</span> item</h1>
                <div className='time'>
                <Timercomp duration={70*24*60*60*100} ></Timercomp>
                </div>
                </div>
           
                <Homecard></Homecard>
            </section>

<hr />
{/* ..................................................................................................................................... */}
            <section>
            <div className="row offer mt-5">
                <div className="col-md-6">
                <img src={img5} alt="" />
                </div>
                <div className="col-md-6 text-start">
                    <h5>About Our Company</h5>
                    <br />
                    <br />
                <h1 className='abouth2'>Fresh Sunflower</h1>
                <h1 className='abouth1'>Original Honey up</h1>
                <h1 className='abouth3'>To <span style={{color:"red"}}>58%</span> off.</h1>
                <br />

                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam dolor inventore eligendi voluptates explicabo, excepturi in, repudiandae ipsum iure pariatur, non officia alias dicta officiis fuga molestiae sapiente aperiam vel quae accusamus nisi. Incidunt consequuntur neque maxime in repudiandae?</p>

                <Link to='/about'> <button className='carbtn mt-5'>Shop Now <FontAwesomeIcon icon={faChevronCircleRight} /> </button></Link> 
                </div>
            </div>  
            </section>

            <section>
               <h1>Latest Projects</h1>
                <Latestcomp></Latestcomp>
            </section>

s
            <section className='mt-5 shippingpart'>
                <div className='container free d-flex'>
                <div className='d-flex free'>
                <FontAwesomeIcon className='truck' icon={faTruck} />
                <div>
                    <h3>Free Shipping</h3>
                    <p>Order over $560</p>
                </div>
                </div>
                <div className='d-flex free2'>
                <FontAwesomeIcon className='truck' icon={faTruck} />
                <div>
                    <h3>Easy Payment</h3>
                    <p>100% secure payment</p>
                </div>
                </div>
                <div className='d-flex free3'>
                <FontAwesomeIcon className='truck' icon={faTruck} />
                <div>
                    <h3>24/7 support</h3>
                    <p>Any time support</p>
                </div>
                </div>
                </div>
                
            </section>


            <br />
            <br />
            <section className='mt-5'>
                <Footercomp></Footercomp>
            </section>

        </div>
        
        
    );
};

export default Home;