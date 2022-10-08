import React, { useState } from 'react';
import './Homecard.css';
import Homedata from './Homecarddata';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {  useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faBagShopping, faChevronCircleRight, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'



const Homecard = () => {
    const [homedata,SetHomeData]=useState(Homedata)
    const { addItem } = useCart();
    return (
        <div >
            <div className='homedatapart'>
            <h1>100% Fresh <span>Honey</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos quas ab mollitia, deserunt quidem iste ratione voluptate suscipit saepe?</p>

            <div className='container'>
                <div className="row">
                    {
                        homedata.map((homevalue,index)=>{
                            const {img,price,title,}=homevalue;
                            return(
                                <div className="col-md-3 "  >
                                <Card className='crdstyle'  style={{ width: '18rem' }} key='index'>
          <Card.Img className='crdimg w-100' variant="top" src={img} />
          <Card.Body className='crdbody2' >
            <Card.Title className='crdinfo'>
                <div >
                
            <Link to={`/home/${homevalue.id}`} ><Button variant="warning"> <FontAwesomeIcon icon={faEye} /></Button></Link> 
            <Button onClick={()=>addItem(homevalue)} variant="danger"> <FontAwesomeIcon icon={faShoppingCart} /></Button>                
                </div>
            
            
                </Card.Title>
                <Card.Body className='crdbody2'>
                    <h4>
                        {title}
                    </h4>
                    <h5>{price}</h5>
                </Card.Body>
          
            
          </Card.Body>
        </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
           <Link to="/shop"><Button>View More Product</Button></Link>
        </div>
    );
};

export default Homecard;