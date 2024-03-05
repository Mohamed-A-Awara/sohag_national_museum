import React from 'react'
import Main_Header from './Main-Header'
// import Lab_View from './Lab-View'
import {  Container } from 'react-bootstrap'
import Mobile_View from './Mobile-View'
import Lab_View from './Lab-View'
import Footer from '../Footer/Footer'

function Virtual() {



    return (
        <>
            <Main_Header /> 

            <section className='tour-guide mt-5'>
                <Container>
                    <h2>Learn about some of the museum's pieces</h2>
                </Container>
            </section>
            
            <section>
                {ViewTour()}
            </section>
            <Footer/>
        </>
    )
}

function ViewTour (){
    if (window.screen.availWidth <= 768){
        return <Mobile_View />
    }
    else {
        return <Lab_View />
    }
}
export default Virtual
