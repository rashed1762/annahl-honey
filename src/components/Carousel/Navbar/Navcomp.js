import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useCart } from "react-use-cart";
import img1 from '../../../assests/logo.png';
import {
    NavLink,Link
  } from "react-router-dom";

const Navcomp = () => {
  const {
    totalItems,
   
  } = useCart();
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={img1} alt="" /><span className='logo'>Annahl</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <NavLink as={Link} className="navstyle" to="/home" >Home</NavLink>  
          <NavLink  as={Link} to="/about"  className="navstyle">About</NavLink> 
          <NavLink as={Link} to="/shop" className="navstyle">Shop</NavLink>
          <NavLink as={Link} to="/product" className="navstyle">Product</NavLink>      
          <NavLink as={Link} to="/contact"   className="navstyle">Contact us</NavLink>  

          </Nav>

          <Nav>
          <NavLink as={Link} to="/login"   className="logicon"><FontAwesomeIcon icon={faUser} /></NavLink>
          <div>
          
          <NavLink as={Link} to="/Cart"   className="carticon"><FontAwesomeIcon icon={faBagShopping} /> <span className='cart-total ' >{totalItems}</span></NavLink>
          </div>
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navcomp;