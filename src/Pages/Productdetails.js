import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link, useParams } from 'react-router-dom';
import Homedata from '../components/Homecard/Homecarddata';
import {  useCart } from "react-use-cart";
import '../components/Cssfile/Productdetails.css';


const Productdetails = () => {
    const { addItem } = useCart();
    const {productId}=useParams();  
    const value=Homedata.find((value)=>value.id==productId);
    const {img,title,desc,price}=value;
    return (
        <div className='productdetails'>
        <section className='section-product'>
            <div className='d-flex style'>
                <div data-aos="flip-up">
                <img className='img-style' src={img} alt={title} />
                </div>
            
            <div className='info' data-aos="zoom-out">
            <h4>{title}</h4>
                <p>{desc}</p>
                <h6>{price}</h6>
                <label htmlFor="">Color</label>
                <br />
                <select className='w-50'>
                    <option value="">Grey</option>
                    <option value="">Green</option>
                    <option value="">Cholocate</option>
                </select>
                    <br />
                    <br />


                <label htmlFor="">size</label>
                <br />
                <select className='w-50'>
                <option value="">Double</option>
                    <option value="">Single</option>
                    <option value="">Semi-double</option>
                </select>
                <br />
                    <br />
                <label htmlFor="">Material</label>

                    <br />
                <select className='w-50'>
                    <option value="">Wood</option>
                    <option value="">Metal</option>
                    <option value="">Steal</option>
                </select>
                <br />
                <br />
                
                
                <Button onClick={()=>addItem(value)} variant="outline-danger">ADD TO CART</Button>
                


            </div>
            </div>
         
           
            
            
            
        </section>
            
        </div>
    )
}

export default Productdetails;