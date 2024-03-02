import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImg from '../Tools/Imgs/Home-Background.png'
import teamImg from '../Tools/Imgs/teamImg.png'
import museumImg from '../Tools/Imgs/museum.png'
import leftImg from '../Tools/Imgs/Ex-left_1.png'
import  centerImg from '../Tools/Imgs/Ex-Center.png'
import rightImg from '../Tools/Imgs/Ex-Right.png'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';


import './Home.css'
import Home_News from './Home_News';
import Footer from '../Footer/Footer';
function Home() {
    return (
        <> 
            <Container fluid className='home-style' style={{backgroundImage : `url(${backgroundImg})`}}>
                <div className='home-data'>
                    
                            <h1>Sohag National museum</h1>
                        
                            <p>a place where the past and the future combine</p>
                        
                            <Image src={teamImg}/>
                        
                            <button><MdOutlineQrCodeScanner style={{fontSize :"25px"}}/> Virtual Tour Guide</button>
                        
                </div>
            </Container>
                    {/* OverView Section */}
            <section>
                <Container className='home-overview'> 
                    <Row>
                        <Col lg='5' md='12'>
                            <h2>An overview of the museum</h2>
                            <p>The location of the Sohag Museum on the shore of the Nile was chosen to emphasize the role of the Nile River in the stability and prosperity of civilization. The museum is located on an area of ​​approximately 5,600 square meters and consists of two floors and a basement.</p>
                            <button>Learn more</button>
                        </Col>
                        <Col lg='7' md='12'>
                            <Image src={museumImg}/>
                        </Col>
                    </Row>
                </Container>
            </section>
                    {/* Our Exhibitions Section */}
            <section className='home-exhibitions'>
                <Container fluid>
                    <h2 className='text-center'>Our Exhibitions</h2>
                    <hr className='line'></hr>

                    <div className='home-cards-control'>
                        <Container>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                    
                                }}
                                pagination={true}
                                modules={[EffectCoverflow]}
                                className="mySwiper"
                            > 
                                <Row>
                                    <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={leftImg} className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center'>
                                                        King Seti I
                                                    </Card.Title>
                                                    <Card.Text className='text-center'>(1294-1279 BC)</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                    </Col>
                                    <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={centerImg} className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center'>
                                                    King Tuthmosis III
                                                    </Card.Title>
                                                    <Card.Text className='text-center'>(1479-1425 BC)</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                    </Col>
                                    <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={rightImg} className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center'>
                                                    King Ramesses II
                                                    </Card.Title>
                                                    <Card.Text className='text-center'>(1279-1213 BC)</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                    </Col>
                                    <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={leftImg} className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center'>
                                                        King Seti I
                                                    </Card.Title>
                                                    <Card.Text className='text-center'>(1294-1279 BC)</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                        </Col>
                                        <Col lg='3' md='6' sm='12'>
                                        <SwiperSlide>
                                                <Card  className='home-card'>
                                                    <Card.Img variant="top" src={centerImg} className='card-img'/>
                                                    <Card.Body className='card-body'>
                                                    <Card.Title className='text-center'>
                                                    King Tuthmosis III
                                                    </Card.Title>
                                                    <Card.Text className='text-center'>(1479-1425 BC)</Card.Text>
                                                    </Card.Body>
                                                    <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                                </Card>
                                        </SwiperSlide>
                                        </Col>
                                </Row>
                            
                            </Swiper>
                            
                        </Container>
                        
                    
                    </div>
                </Container>
            </section>    
            
                <Home_News/>
                <Footer/>
        </>
    )
    }

export default Home

/* 
<Col lg='4' md='6' sm='10'>
                                        <Card  className='home-card card-center'>
                                            <Card.Img variant="top" src={centerImg} className='card-img'/>
                                            <Card.Body className='card-body'>
                                            <Card.Title className='text-center'>
                                            King Tuthmosis III
                                            </Card.Title>
                                            <Card.Text className='text-center'> (1479-1425 BC)</Card.Text>
                                            </Card.Body>
                                            <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                        </Card>
                                    </Col>
                                    <Col lg='4' md='6' sm='10'>
                                        <Card  className='home-card'>
                                            <Card.Img variant="top" src={rightImg} className='card-img'/>
                                            <Card.Body className='card-body'>
                                            <Card.Title className='text-center'>
                                            King Ramesses II
                                            </Card.Title>
                                            <Card.Text className='text-center'> (1279-1213 BC)</Card.Text>
                                            </Card.Body>
                                            <Card.Text className='card-icon'><GoArrowRight/></Card.Text>
                                        </Card>
                                    </Col>
                                    */