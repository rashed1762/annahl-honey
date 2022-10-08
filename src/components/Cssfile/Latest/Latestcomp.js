import React from 'react';
import './Latest.css'
import img1 from '../../../assests/all1.jpg'
import img2 from '../../../assests/all2.jpg'
import img3 from '../../../assests/all3.jpg'
import img4 from '../../../assests/all4.jpg'
import img5 from '../../../assests/all5.jpg'
import img6 from '../../../assests/all6.jpg'
import img7 from '../../../assests/all7.jpg'
import img8 from '../../../assests/all8.jpg'
import img9 from '../../../assests/all9.jpg'


import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Latestcomp = () => {
    return (
        <div >
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column tabmenu">
            <Nav.Item >
              <Nav.Link eventKey="first">ALL PROJECTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">FLOWER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">HILL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">FOREST</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five">QUEEN</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img2} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img3} className="img" alt="" />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4">
                    <img src={img4} className="img" alt="" />
                    <div className='body'>
                        
                    </div>
                </div>
                <div className="col-md-4">
                <img src={img5} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img6} className="img" alt="" />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4">
                    <img src={img7} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img8} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img9} className="img" alt="" />
                </div>
            </div>
                
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className="row">
                <div className="col-md-4">
                    <img src={img2} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img8} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img9} className="img" alt="" />
                </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img2} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img3} className="img" alt="" />
                </div>
                
                <div className="row mt-5">
                <div className="col-md-4">
                    <img src={img7} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img8} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img9} className="img" alt="" />
                </div>
            </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
            <div className="row">
              <  div className="col-md-4">
                    <img src={img5} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img3} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img6} className="img" alt="" />
                </div>

                <div className="row mt-4">
                <div className="col-md-4">
                    <img src={img7} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img8} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img9} className="img" alt="" />
                </div>
            </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img2} className="img" alt="" />
                </div>
                <div className="col-md-4">
                <img src={img3} className="img" alt="" />
                </div>
            </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
    );
};

export default Latestcomp;