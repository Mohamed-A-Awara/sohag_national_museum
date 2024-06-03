import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Visit.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaBan } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdEmergencyShare } from "react-icons/md";

import VisitDate_Img from '../Tools/Imgs/Back_Visit.png'
import Footer from '../Footer/Footer';
function Visit() {
    const smallWidth = window.screen.availWidth;

    return (
        <>
            {/* all parent as GLobal Style */}
            <div className="all-parent">
                
                <section className='visit'> 
                    {/* Header Title */}
                        <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 className='p-3'>visit</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid className=''>
                        <Row className={smallWidth < 768 ? "p-1" : "p-5"}>
                            <Col lg='6' md='12'>
                                <div className='p-4 visit-data'>
                                    <h3>Visiting dates</h3>
                                    <p>
                                    The museum is open to receive visitors daily 
                                    from 9:00 A.m to 4:00 p.m
                                    </p>
                                    <Button className=' btn-sign'> Login </Button>
                                </div>
                                
                            </Col>
                            <Col lg='6' md='12'>
                                <div className=''>
                                    <Image src={VisitDate_Img} thumbnail className='w-75 m-auto d-block'/>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Header Title */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 className='p-3'>Visitor policies and guidelines</h2>
                            </Container>
                    </div>
                    {/* Header End */}
                    <Container fluid>
                            <div className='p-4 visit-policy-p'>
                                <p className={smallWidth < 768 ? "p-1" : "p-4" }>In the context of caring for visitors and providing an enjoyable experience when
                                    visiting the museum, please adhere to the visitation controls and guidelines, to
                                    preserve the museum environment and its exhibits, as well as to ensure  a safe 
                                    and enjoyable visit</p>
                            </div>
                    </Container>

                    {/* Rules Data */}
                    {/* <div className='rules-items'>
                        
                    </div> */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaBan className='ban-icon me-2'/> Items that are not allowed to be brought inside
                                    the museum and its halls</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                            <p className='p-2'>In order to protect the exhibits and to maintain a safe environment
                                where the visitor can appreciate the exhibits comfortably, please
                                confirm with the following regulations:</p>
                                <uL>
                                    <li>Large bags, large backpacks, luggage, or parcels larger than 40 x 40 cm are not permitted into the museum; you can store them in the cloakroom.</li>
                                    <li>Bags and backpacks may be subject to search at any time</li>
                                    <li>Do not bring any sharp items or dangerous materials into the 
                                        museum (such as knives, screwdrivers, scissors, and firearms).</li>
                                    <li> Do not bring umbrellas into the museum. Please leave them
                                        in the cloakroom.</li>
                                    <li>Do not bring folding seats or any other type of seat within the galleries unless you obtain permission from museum 
                                        security</li>
                                    <li>Animals or pets are not allowed in the museum.</li>
                                    <li>Musical instruments are not allowed inside the museum.</li>
                                    <li>Do not bring any advertising banners or carry placards or signs inside the museum unless you obtain approval from 
                                        the concerned authorities</li>
                                </uL>
                        </div>
                    </Container>
                    {/* End Rules */}

                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> General Policies in the Galleries</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>Please do not touch any exhibits or showcases.</li>
                                    <li>Food and drinks are not allowed within the galleries (except for small water bottles).</li>
                                    <li>Smoking is prohibited throughout the museum.</li>
                                    <li>Please refrain from disorderly, disruptive, or offensive language or actions.</li>
                                    <li>Please be mindful of others, and be quiet when using your cell phone.</li>
                                    <li>Audio players are not permitted throughout the museum.</li>
                                    <li>For the safety of the exhibits, please do not use flashlights or laser pointers in the museum.</li>
                                    <li>Appropriate attire is requested.</li>
                                    <li>Please do not lie down on seats or on the floor, or take off your shoes.</li>
                                </uL>
                        </div>
                    </Container>
                    {/* End Rules */}

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <MdFamilyRestroom className='family-icon me-2'/> Families with Children</h2>
                            </Container>
                        </div>
                    {/* Header End */}

                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>Children must be accompanied by an adult inside the museum at all times.</li>
                                    <li>For the safety of your children and of the exhibits, please make sure that children do not run or play, to prevent them from bumping into exhibits or visitors and causing injury or damage.</li>
                                </uL>
                        </div>
                    </Container>

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaCamera className='family-icon me-2'/> Photography</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>Private photography and video recordings are permitted inside the museum only after paying for the photography ticket fees</li>
                                    <li>Please refrain from taking photographs of other visitors or staff as it may violate their personal rights.</li>
                                    <li>Taking photographs and video recordings for commercial use (TV, cinema, programs, advertising, documentary clips, etc.) are permitted only after obtaining permission from the concerned authorities and paying the appropriate fees</li>
                                    <li>Please refrain from using flash photography.</li>
                                    <li>Please refrain from using tripods or monopods unless it is for commercial use.</li>
                                </uL>
                        </div>
                    </Container>

                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <FaRegPenToSquare className='family-icon me-2'/> Sketching</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                            <p className='p-2'>Faculty of Arts students should conform to the following regulations:</p>
                                <uL>
                                    <li>The use of pens and pen markers is prohibited in all galleries: only pencils may be used for sketching or taking notes.</li>
                                    <li>Sketchbooks should not exceed 18 x 24 inches in size.</li>
                                    <li>Please do not hinder visitor traffic flow in the galleries.</li>
                                </uL>
                        </div>
                    </Container>


                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'> <MdEmergencyShare className='family-icon me-2'/> Emergencies</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                        <div className={ smallWidth < 768 ? "rules-data p-1" : "rules-data p-5"}>
                                <uL>
                                    <li>In the case of an emergency such as fire or an earthquake, please follow the instructions of the museum staff.</li>
                                    <li>In the advent of an earthquake, please move away from large sculptures, display cases, and other objects that may fall down.</li>
                                </uL>
                        </div>
                    </Container>


                    {/* Header Start */}
                    <div className='visit-date pt-3 pb-3'>
                            <Container fluid>
                                <h2 Items className='p-3 rules-header'>  Visitors with Special Needs</h2>
                            </Container>
                        </div>
                    {/* Header End */}
                    <Container fluid>
                    <div className='p-4 visit-policy-p'>
                                <p className={smallWidth > 768 ? "p-1" : "p-4"}>The Sohag National Museum aims to enhance the societal role in achieving sustainable development, and the museum provides all the necessary tools that visitors with special needs need to ensure that they enjoy the experience of visiting the museum.</p>
                            </div>
                    </Container>


                </section>

            </div>
            <Footer/>
        </>
    )
}

export default Visit

