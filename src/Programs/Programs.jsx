import React from 'react'
import './Programs.css'
import img1 from'../Tools/Imgs/img1_programs .png'
import img2 from '../Tools/Imgs/img2_programs .png'
import img3 from '../Tools/Imgs/img3_programs .png'
import img4 from '../Tools/Imgs/img4_programs .png'
import img5 from '../Tools/Imgs/img5_programs .png'
import img6 from '../Tools/Imgs/img6_programs .png'
import img7 from '../Tools/Imgs/img7_programs .png'
import img8 from '../Tools/Imgs/img8_programs  .png'
import img9 from '../Tools/Imgs/img9_programs .png'
import img10 from '../Tools/Imgs/img10_programs .png'
import img11 from '../Tools/Imgs/img11_programs .png'
import img12 from '../Tools/Imgs/img12_programs .png'
import img13 from '../Tools/Imgs/img13_programs .png'
import img14 from '../Tools/Imgs/img14_programs .png'
import img15 from '../Tools/Imgs/img15_programs  .png'
import img16 from '../Tools/Imgs/img16_programs.png'
import img17 from '../Tools/Imgs/img17_programs.png'
import img18 from '../Tools/Imgs/img18_programs.png'
import img19 from '../Tools/Imgs/img19_programs.png'
import img20 from '../Tools/Imgs/img20_programs.png'
import img21 from '../Tools/Imgs/img21_programs.png'
import img22 from '../Tools/Imgs/img22_programs.png'
import img23 from '../Tools/Imgs/img23_programs.png'
import img24 from '../Tools/Imgs/img24_programs.png'
import img25 from '../Tools/Imgs/img25_programs.png'
import img26 from '../Tools/Imgs/img26_programs .png'
import img27 from '../Tools/Imgs/img27_programs .png'
import img28 from '../Tools/Imgs/img28_programs .png'
import img29 from '../Tools/Imgs/img29_programs .png'
import { Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import BtnReadMore from '../Components/BtnReadMore'


function Programs() {
    return (
        //////////////////////////section1/////////////////////////////
        <>
        {/* All Parent as Global Style  */}
            <div className="all-parent">

                    <div className='head_section'>
                            <p>Activities</p>
                    </div>
                    <section className='sec1'>
                        <p className='sec1_p1'>The museum administration seeks to enrich the museum display, 
                        and a committee has been formed to select artifacts from Sohag’s stores to enrich the display.</p>
                        <p className='sec1_p2'>The general register of the Sohag National Museum is also being written</p>
                        <p className='sec1_p3 pb-3 pt-3'>Achievements of Sohag National Museum 2022 </p>
                    </section>

                {/* //////////////////////////////////section2////////////////////////////////////  */}
                    <div className='head_section'>
                            <p>Exhibitions</p>
                    </div>
                    <section className='sec2'>
                        <div className='top'>
                            <div className='text'>
                                <p>Implementing the museum sector’s plan aimed at holding temporary annual exhibitions in each museum
                                    <BtnReadMore content=' Renewing the museum display through these temporary exhibitions to provide a renewed view of the museum to attract visitors. It also serves as a window for the stored artifacts to see the light through these exhibitions,
                                        as well as linking the artifacts to national events and local and international occasions.' />
                                </p>

                                
                            </div>
                            <div className='image'>
                                <Image src={img1} thumbnail/>
                            </div>
                        </div>
                        {/* ////////////////////////////////////////////////////////////////// */}
                        <div className='mid'>
                        <div className='text'>
                            <p>Continuous training for museum curators on museum display, writing archaeological and historical proposals,
                                    display cards, and selecting artifacts that serve the topics.
                                        <BtnReadMore content='Informing visitors that our antiquities are the subject of the world’s admiration and talk, 
                                                    and it is our duty to preserve them in order to hand them over to those after us, just as we received them before us.' />         
                            </p>
                            
                        </div>
                            <div className='image'>
                            <Image src={img2} thumbnail/>
                            </div>
                        </div>
                        {/* ////////////////////////////////////////////////////////////////// */}
                        <div className='bottom'>
                        <div className='text'>
                            <p>Maximizing the societal role of the museum through these exhibitions to increase archaeological awareness and introduce cultural heritage through seminars,
                                <BtnReadMore content='lectures and workshops that will be held on the sidelines of the exhibition during the three-month life of the exhibition.' /> 
                            </p>
                        </div>
                            <div className='image'>
                            <Image src={img3} thumbnail/>
                            </div>
                        </div>
                    </section>

                {/* ////////////////////////////////section3///////////////////////////////////////// */}
                <div className='head_section'>
                            <p>Educational Department Activities</p>
                </div>
                <div className='text-before-sec'>
                    <p className='sec1_p1'>Highlighting the role of museums as enlightening and educational institutions by linking the museum to society in all its categories and by participating in all local and international events.</p>
                    <p className='sec1_p2'>This is done by participating in a group of technical and educational workshops and educational lectures for all groups, students of all educational levels, and university students.</p>
                </div>
                <section className='sec3'>
                    <div className='sec3_div'>
                        <Image src={img4}/>
                        <p>Celebrating Antiquities Day</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img5}/>
                        <p>Celebrating World Cancer Day</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img6}/>
                        <p>An individual drawing workshop for </p>
                        <p>one of the gifted children</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img7}/>
                        <p>Jewelry and beadwork workshop</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img8}/>
                        <p>Celebrating Mother's Day</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img9}/>
                        <p>Coloring workshop for children on the occasion of International Museum Day</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img10}/>
                        <p>Mawlid al-Nabawi workshop</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img11}/>
                        <p>A workshop for making Eid sheep figures</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img12}/>
                        <p>Heritage day lectures</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img13}/>
                        <p>Teaching Hajj rituals</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img14}/>
                        <p>Workshop on teaching hieroglyphic writing</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img15}/>
                        <p>An artistic segment and a historical presentation in Pharaonic costume</p>
                    </div>
                    
                </section>
            {/* ///////////////////////////////////////section4//////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='head_section'>
                            <p>Activities of the Museum Education Department</p>
                </div>
                <div className='text-before-sec'>
                    <p className='sec1_p1'>Many workshops, entertainment activities and lectures were held
                            Through it, people of determination are integrated into the museum,and attention is paid to providing all means of safety. Special badges have been placed and the museum is prepared to receive them.</p>
                </div>
                <section className='sec4'>
                    <div className='sec4_div'>
                            <Image src={img16}/>
                            <p>A lecture on the rights of people with disabilities in ancient Egypt</p>
                    </div>
                    <div className='sec4_div'>
                            <Image src={img17}/>
                            <p> Celebrating World Braille Language Day</p>
                    </div>
                    <div className='sec4_div'>
                        <Image src={img18}/>
                        <p>Humanitarian Action Day </p>
                    </div>
                    <div className='sec4_div'>
                        <Image src={img19}/>
                        <p>Sign language workshop </p>
                    </div>
                </section>
            {/* ///////////////////////////////////////section5//////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='head_section'>
                    <p>Training</p>
                </div>
                <div className='text-before-sec'>
                    <p className='sec1_p1'>Providing training programs for university students in the departments of Egyptian antiquities, Islamic antiquities, and restoration departments, to introduce the role of museums in society, to increase archaeological awareness, to introduce museum management and management of museum collections, 
                        <BtnReadMore content='to give trainees an idea of the role and importance of the museum in society, the origin and development of museums, and an explanation of museum holdings, management of museum collections, temporary exhibitions, the role of museum trustees, and tours. 
                            Internal and external, as well as the role of the restoration department' />
                    </p>
                    <p className='sec1_p2'>As well as lectures for archaeological field workers from various sectors.</p>
                </div>
                <section className='sec5'>
                    <div className='sec5_div1'> 
                        <Image src={img20}/>
                        <p id='p1'>An educational symposium (a series of lectures entitled Museums and archaeological sites between reality and aspiration)</p>
                        <p>In partnership with the Luxor Museum of Ancient Art</p>
                    </div>
                    <div className='sec5_div1'>
                        <Image src={img21}/>
                        <p>Summer training for fine arts students (Restoration Department)</p>
                    </div>
                    <div className='sec5_div2'>
                    <Image src={img22}/>
                    <Image src={img23}/>
                    </div>
                    <div className='sec5_div3'>
                        <p>Training for students of Egyptian and Islamic antiquities</p>
                    </div>
                    <div className='sec5_div2'>
                    <Image src={img24}/>
                    <Image src={img25}/>
                    </div>
                    <div className='sec5_div3'>
                        <p>Training for students of Egyptian antiquities</p>
                    </div>
                </section> 
                {/* ///////////////////////////////////////section11//////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='head_section'>
                    <p>Official visits</p>
                </div>
                <section className='sec11'>
                    <div className='sec11_div'>
                        <Image src={img26}/>
                        <p>Advisor to the Minister of Tourism</p>
                    </div>
                    <div className='sec11_div'>
                    <Image src={img27}/>
                        <p>Italian Ambassador</p>
                    </div>
                    <div className='sec11_div'>
                    <Image src={img28}/>
                        <p>Former director of the Berlin Museum and former director of the Munich Museum</p>
                    </div>
                    <div className='sec11_div'>
                    <Image src={img29}/>
                        <p>Director of the French Institute of Oriental Archaeology</p>
                    </div>

                </section>

                <Footer/>
            </div>

        </>
    )
}

export default Programs


