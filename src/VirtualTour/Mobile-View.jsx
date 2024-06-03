import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Statue_1 from '../Tools/Imgs/Statue-1.png'
import { TbUserScan } from "react-icons/tb";
import { FaFaceSmileWink } from "react-icons/fa6";

function Mobile_View() {
    return (
        <section>
            <Container fluid className='lab-view'>
                <Row>
                    <Col lg='12' md='10' sm='12' className='mobile-view'>
                        <div className='lab-view-statue' style={{margin: "0 auto"}}>
                            <Image src={Statue_1} />
                            <div className='watch-visible'>
                                <Button className='btn btn-secondary '> <TbUserScan style={{fontSize : "22px" , color :"#e9d844"}}/>  Scan Me <FaFaceSmileWink style={{fontSize : "22px" , color : "#e9d844"}} /> </Button>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Mobile_View