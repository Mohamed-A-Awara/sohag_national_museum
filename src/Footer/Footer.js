import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import FooterImg from "../Tools/Imgs/Footer_img.png"
import { FaFacebookF } from "react-icons/fa6";
import { VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css'
function Footer() {

    return (
        <>
            <section className='footer-section'> 
            <div className='footer-partOne'>
                <Container>
                    <Row>
                        <Col lg='4' sm='8'>
                            <div className='footer-img'>
                                <Image src={FooterImg} />
                            </div>
                            <p>
                                The museum displays the most important artifacts excavated from various sites in the governorate, 
                                amounting to more than 7,000 artifacts. 
                                The museum is unique in displaying a number of rare mummies.
                            </p>
                        </Col>
                        <Col lg='4'  sm='8'>
                            <div className='footer-sitemap'> 
                                <h3>Sitemap</h3>
                                <ul>
                                    <li>Overview</li>
                                    <li>Visit</li>
                                    <li>Halls</li>
                                    <li>Programs & Events</li>
                                    <li>Sign Up</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg='4' sm='8'>
                            <div className='footer-connect'> 
                                <h3>Connect</h3>
                                <div>
                                    <VscTwitter className='social'/>
                                    <FaFacebookF className='social'/>
                                    <FaLinkedinIn className='social'/>
                                    <MdEmail className='social'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-partTwo'>
                    <Row>
                        <Col lg='12'> <p className='text-center'>© 2024 Team 5 . All rights reserved.</p></Col>
                    </Row>
            </div>
            </section>
        </>
    )
}

export default Footer