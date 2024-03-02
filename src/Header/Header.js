import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import logoImage from '../Tools/Imgs/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
function New_Header() {
    const sign_link = useNavigate()
    const book_link = useNavigate()
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary  nav-height">
                <Container >
                    <Navbar.Brand href="#">
                        <Image src={logoImage} style={{width :"100%", height:"80px"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=' nav-small'>
                    <Nav
                        className="m-auto my-2 my-lg-0 p-2 header-links"
                        style={{ maxHeight: 'auto' }}
                        navbarScroll
                    >
                        <Nav.Link > 
                            <NavLink to='/home'>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/overview'>overview</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/visit'>Visit</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/halls'>halls</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/programs_and_events'>programs & events</NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to='/virtual_tour_guide'>virtual tour guide</NavLink>
                        </Nav.Link>
                        
                    </Nav>
                    <Form className="d-flex">
                        
                        <Button variant="outline-success me-2 btn-sign" onClick={ ()=> sign_link("/sign_in")}>Sign up</Button>
                        <Button variant="outline-success btn-book" onClick={ ()=> book_link('/book_ticket')}>Book Ticket</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default New_Header