import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Container, Image } from 'react-bootstrap';
import TeamLogo from '../Tools/Imgs/teamImg.png'
import { MdOutlineQrCodeScanner } from "react-icons/md";



function Main_Header() {
    const smallWidth = window.screen.availWidth;


    return (
        <section>
            <div className='virtual-Header pt-3 pb-3'>
                    <Container fluid>
                        <h2 className={smallWidth < 768 ? "p-1 virtual-h2" : "p-3 virtual-h2"}>Virtual tour guide </h2>
                    </Container>
            </div>

            <Container fluid>
                <div className='virtual-header-data '>
                        <h3>Enjoy a unique experience inside the museum through the virtual tour guide feature. This feature allows you to have your own tour guide inside the museum by scanning the code on the antiquities, and then the guide begins to tell you the details and history of the pieces using augmented reality technology.</h3>
                        <Image src={TeamLogo}  />
                        <button><MdOutlineQrCodeScanner style={{fontSize :"25px"}}/> Virtual Tour Guide</button>

                </div>
            </Container>
            
        </section>
    )
}

export default Main_Header