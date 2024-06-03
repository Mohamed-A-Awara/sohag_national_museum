import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Statue_1 from '../Tools/Imgs/Statue-1.png'
import Statue_2 from '../Tools/Imgs/Statue-2.png'
import Statue_3 from '../Tools/Imgs/Statue-3.png'
function Lab_View() {
    return (
        <section>
            <Container fluid className='lab-view'>
                <Row>
                    <div className='view-lab-parent'> 
                            
                            <Col lg='4' md='6' sm='12' >
                                <div className='lab-view-statue' style={{margin : "0 auto"}}>
                                    <Image src={Statue_1} />
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary '>Watch Video</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg='4' md='6' sm='12' className='phone-margin'>
                            <div className='lab-view-statue ' style={{margin : "0 auto"}}>
                                    <Image src={Statue_2} style={{width : "80%"}}/>
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary '>Watch Video</Button>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col lg='4' md='6' sm='12' >
                            <div className='lab-view-statue' style={{margin : "0 auto"}}>
                                    <Image src={Statue_3} style={{width : "80%"}} />
                                    <div className='watch-hidden'>
                                        <Button className='btn btn-secondary '>Watch Video</Button>
                                    </div>
                                </div>
                            </Col>
                    </div>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Lab_View