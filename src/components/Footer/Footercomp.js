import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assests/logo.png';

const Footercomp = () => {
    return (
        <div className='footer'>
            <div className="row container">
                <div className="col-md-3">
                    <div className='d-flex'>
                    <img src={logo} alt="" /> 
                    <h1>annahl</h1>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    <h3>CONTACT</h3>
                        <div className='d-flex mt-5'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h6>46/1 kewatkhali moyner mor,mymensing</h6>
                        </div>
                        <div className='d-flex mt-4'>
                        <FontAwesomeIcon icon={faPhone} />
                        <h6> 01314540002</h6>
                        </div>
                        <div className='d-flex mt-4'>
                        <FontAwesomeIcon icon={faMailBulk} />
                        <h6> rashed54islam@gmail.com</h6>
                        </div>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Footercomp;