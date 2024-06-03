import React from 'react'
import './Overview.css'
import Footer from '../Footer/Footer'
import img1_overview from '../Tools/Imgs/img1_overview.png'
import img2_overview from '../Tools/Imgs/img2_overview.png'
import img3_overview from '../Tools/Imgs/img3_overview .png'
import img4_overview from '../Tools/Imgs/img4_overview .png'
import img5_overview from '../Tools/Imgs/img5_overview.png'
import {  Image } from 'react-bootstrap'
import BtnReadMore from '../Components/BtnReadMore'


function Overview() {
    return (
        <>
        {/* all-parent will be in App.css as Global Style */}
        <div className="all-parent">

        {/* Start Overview Header */}
        <div className='head_section pt-3 pb-3'>
                <p>An Overview of The Museum</p>                
        </div>
        {/* End Overview Parent */}

        {/* Start Section One */}
        <section className='section1'>
        <div className='top'>
            <div className='text'>
                <p>The location of the Sohag Museum on the shore of the Nile was chosen to emphasize the role of the Nile River in the stability and prosperity of civilization.
                    <BtnReadMore content='The museum is located on an area of ​​approximately 5,600 square meters and consists of two floors and a basement.The museum displays the most important artifacts excavated from various sites in the governorate amounting to more than 7,000 artifacts. The museum is unique in displaying a number of rare mummies. ' />
                </p>

            </div>
            <div className='image'>
                <Image src={img1_overview} thumbnail />
            </div>
        </div>
        <div className='bottom'>
            <div className='text'>
                <p>The museum display deals with the most important Pharaonic kings of Egypt who emerged from the land of Sohag. It also sheds light on the ancient Egyptian religion and the ritual pilgrimage to Abydos .
                    <BtnReadMore content='in addition to the popular heritage of the governorate and its most important crafts and industries. 
                    The Sohag Museum was designed from the outside in the shape of the Temple of Seti I, Babidos, the center of the Balina. The museum was opened on August 12, 2018 in the presence of Mr. Abdel Fattah El-Sisi ,  President of the Arab Republic of Egypt, Dr. Mostafa Madbouly, Prime Minister, and some ministers. The total cost of the museum amounted to 72 million pounds. ' />
                </p>
                
            </div>
            <div className='image'>
            <Image src={img2_overview} thumbnail/>
            </div>
        </div>
        </section>
        {/* End Section One */}

        {/* ////////////////////////////////////////////////////section2/////////////////////////////////////////////////////////////////////// */}

        <div className='head_section pt-3 pb-3'>
                <p>Museum Exhibition Halls</p>                
        </div>

        <section className='section2'>
        <div className='top'>
            <div className='text'>
                <p>The museum contains eight halls for displaying antiquities. These halls contain 963 antiquities, including antiquities inside the two showcases and pieces displayed on an external display, 

                    <BtnReadMore content='in addition to an antiquities store in the basement containing approximately 2,100 antiquities. All the artifacts were extracted from archaeological sites in Sohag Governorate, such as Abydos, Al-Raqaqnah, Al-Mansha’a, Akhmim,
                    Al-Hawaweesh, Sheikh Hamad, and the village of Edfa.' />    
                </p>
                
            </div>
            <div className='image'>
                <Image src={img3_overview} thumbnail/>
            </div>
        </div>
        </section>
        {/* ////////////////////////////////////////////////////section3/////////////////////////////////////////////////////////////////////// */}

        <div className='head_section pt-3 pb-3'>
                <p>Museum Display</p>
        </div>


        <section className='section3'>
        <div className='top'>
            <div className='text'>
                <p>The display in the museum depends on the thematic display method, meaning that each hall talks about a topic in itself, 
                    as artifacts from different historical eras were chosen for one topic.

                    <BtnReadMore content='A statue of the goddess Sekhmet was placed on the right and left of the interior of the museum’s antiquities display halls as a form of protection and strength for the place where Sekhmet
                        (the goddess of war and power among the ancient Egyptians) lived. ' />
                </p>
            </div>

            <div className='image'>
                <Image src={img4_overview} thumbnail/>
            </div>
        </div>

        <div className='bottom'>
            <div className='text'>
                <p>The second floor contains the changing exhibition hall and is reached through the ascending stairs to the right of the entrance. 
                    <BtnReadMore content='This hall has been designated for holding four archaeological exhibitions throughout the year through the artifacts stored in the museum’s 
                    warehouse or for holding exhibitions that keep pace with events that may occur on the local and international scene.' /> 
                </p>
            </div>
            <div className='image'>
            <Image src={img5_overview} thumbnail/>
            </div>
        </div>
        </section>

        <Footer/> 

        </div>
        {/* ALl Parent */}
        </>
    )
}

export default Overview
