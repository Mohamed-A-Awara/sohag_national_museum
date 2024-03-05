import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Virtual.css"
import { Container, Image } from 'react-bootstrap';
import TeamLogo from '../Tools/Imgs/teamImg.png'
import { MdOutlineQrCodeScanner } from "react-icons/md";



function Main_Header() {
    return (
        <section>
            <div className='virtual-Header'>
                    <Container>
                        <h2 className='p-3 virtual-h2'>Virtual tour guide </h2>
                    </Container>
            </div>
            <Container>
                <div className='virtual-header-data'>
                        <h3>Enjoy a unique experience inside the museum through the virtual tour guide feature. This feature allows you to have your own tour guide inside the museum by scanning the code on the antiquities, and then the guide begins to tell you the details and history of the pieces using augmented reality technology.</h3>
                        <Image src={TeamLogo}  />
                        <button><MdOutlineQrCodeScanner style={{fontSize :"25px"}}/> Virtual Tour Guide</button>

                </div>
            </Container>
            
        </section>
    )
}

export default Main_Header