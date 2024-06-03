/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import hallsF_img1 from '../Tools/Imgs/halls-First-Img1.png'
import hallsF_img2 from '../Tools/Imgs/halls-First-Img2.png'
import hallsF_img3 from '../Tools/Imgs/halls-First-Img3.png'
import Second_Hall from './Second-Hall.jsx';
import Third_Hall from './Third-Hall.jsx' ;
import Fourth_Hall from './Fourth-Hall.jsx';
import Fifth_Hall from './Fifth-Hall.jsx';
import Sixth_Hall from './Sixth-Hall.jsx';
import Footer from '../Footer/Footer';
import BtnReadMore from '../Components/BtnReadMore';

function Halls() {
    const smallWidth = window.screen.availWidth;


    return (
        <>
            <div className="all-parent">
                <section className='halls-style'>
                    <div className='full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>Halls of Sohag National Museum  </h2>
                        </Container>
                    </div>

                    <div className='halls-text pt-3 pb-3'>
                        <Container fluid>
                            <ul className={smallWidth < 768 ? "p-1 Sixth-list" : "p-5 Sixth-list"}>
                                <li>The museum is structured across three floors, each offering a unique and captivating experience.</li>
                                <li>The main floor, which serves as the primary entrance, is home to six halls.
                                    <BtnReadMore content=" Three of these halls are situated to the north, facing their counterparts to the south. Among them is the grand exhibition hall, a centerpiece that showcases remarkable artifacts and exhibits." /> 
                                </li>
                                <li>Ascending the stairs to the right of the entrance takes visitors to the second floor. 
                                    <BtnReadMore content='Here, a dedicated space is reserved for temporary exhibitions, specifically designed to host four archaeological exhibitions throughout the year. This area promises an ever-changing display of antique pieces, providing visitors with a dynamic and enriching experience.' />
                                </li>
                                <li>The lower floor, on the other hand, boasts a spacious exhibition hall that is intricately divided into four corridors known as the “Other World Hall.” 
                                    <BtnReadMore content ="Each corridor presents a unique perspective and theme, contributing to the museum's comprehensive exploration of diverse historical and cultural narratives" /> 
                                </li>
                                <li>In essence, the museum's three floors collectively offer a multifaceted journey through time and history, providing visitors with an engaging and educational experience.</li>
                            </ul>
                        </Container>
                    </div>

                    <div className='first-halls full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The First Hall : Hall of Kings and Important Ministers </h2>
                        </Container>     
                    </div>

                    <div className='first-hall-cards p-4'>
                                <Container >
                                    <Row>
                                        <Col lg='4' md='6' sm='12' className='p-3'>
                                            <Card style={{height:"auto" , borderRadius : "25px"}} border='3' >
                                            <Image variant="top" src={hallsF_img1} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'>the statue of King Thutmose III</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    This hall stands out as one of the museum's prominent sections, housing a rich collection of archaeological pieces related to kings and prominent figures in ancient Egyptian society, totaling 210 artifacts.
                                                    </Card.Text>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header className='First-hall-card-title'>Read More</Accordion.Header>
                                                            <Accordion.Body className='First-hall-card-text p-3'>
                                                            At the focal point of the hall is the lantern statue, representing Napoleon from his era, who led 17 successful military campaigns, expanding the boundaries of the empire during his rule.
                                                            Inside the hall, the statue of King Thutmose III takes center stage, crafted from limestone. The statue depicts the king seated on the throne, adorned with the white crown, holding symbols of rule, and wearing the royal linen garment
                                                            </Accordion.Body>
                                                    </Accordion.Item>
                                                    </Accordion>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg='4' md='6' sm='12' className='p-3'>
                                        <Card style={{height:"auto" , borderRadius : "25px"}} border='3'>
                                                <Image variant="top" src={hallsF_img2} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'> King "Shabaka" from the twenty-fifth dynast</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    The first vitrine contains a panel for King "Shabaka" from the twenty-fifth dynasty and ivory cards inscribed with the names of these kings, considered one of the oldest writings in ancient Egyptian history.                                                </Card.Text>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg='4' md='6' sm='12' className='p-3' >
                                        <Card style={{height:"auto" ,  borderRadius : "25px"}} border='3'>
                                                <Image variant="top" src={hallsF_img3} thumbnail style={{height : "40vh" , width : "85%" , margin : "10px auto"}} />
                                                <Card.Body>
                                                    <Card.Title className='First-hall-card-title'>King Seti- I</Card.Title>
                                                    <Card.Text className='First-hall-card-text'>
                                                    The second vitrine features ivory cards, double crowns made of granite, and a colored engraving of King Seti- I, along with some combat tools such as the head of a mace, a dagger, and a spear.                                                </Card.Text>
                                                    
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                        </div>
                    
                    <div className='first-halls full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The Second Hall : Family and Social Life </h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4'>
                            < Second_Hall />
                        </div>


                        {/* Third hall */}
                    <div className='first-halls full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The Third Hall : Ancient Egyptian Cuisine</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4'>
                            <Third_Hall/>
                        </div>

                        {/* Fourth Hall */}

                    <div className='first-halls full-back pt-3 pb-3 '>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The Fourth Hall: Hall of Crafts and Industries</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4'>
                            < Fourth_Hall />
                        </div>  

                        {/* Fifth Hall */}
                    <div className='first-halls full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The Fifth Hall : Textile Exhibition</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4'>
                            < Fifth_Hall />
                        </div>  

                        {/* Sixth Hall */}


                    <div className='first-halls full-back pt-3 pb-3'>
                        <Container fluid>
                            <h2 className={smallWidth < 768 ? "p-1 halls-h2" : "p-3 halls-h2"}>The Sixth Hall : Heritage</h2>
                        </Container>     
                    </div>

                        <div className='second-hall-cards p-4'>
                            < Sixth_Hall />
                        </div>  


                </section>
                <Footer />
            </div>
        </>
    )
}

export default Halls

