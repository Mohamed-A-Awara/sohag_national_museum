import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import BtnReadMore from '../Components/BtnReadMore';

function Fifth_Hall() {

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>
                            A piece of linen adorned with the hieroglyphs of King Pepi I from the Sixth Dynasty. It is preceded by the titular epithet and some flirtatious phrases that were used in the spinning process.
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>First Showcase</span> <br/> <br/>
                                This display presents textiles dating back to the Islamic era, adorned with botanical and geometric patterns, depictions of birds, animals, and verses from the Quran.
                                    <BtnReadMore  content= "Various tools used in the weaving process, such as combs for cleaning and aligning threads and a weaving beater, are also showcased." /> 
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>Second Showcase</span> <br/> <br/>
                                In this exhibit, Coptic textiles take center stage, showcasing a diversity of colors and decorations featuring crosses, saints, monks, as well as botanical and geometric motifs.
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>Third  Showcase</span> <br/> <br/>
                                Here, a collection of textiles from the Pharaonic era is on display. It includes a large piece, part of a robe made from linen, and another large piece whose weaving process remains incomplete.                            
                                <BtnReadMore  content= "This textile exhibition offers visitors a glimpse into the rich history and craftsmanship of the textile industry in Akhmim, highlighting its cultural significance and the artistic expression embedded in each piece." />     
                            </li>
                        </ul>
                    </Container>
                </div>


                
            <div>
                <Container>
                    <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper2"
                    >
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        <SwiperSlide className='halls-Fifth'></SwiperSlide>
                        
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Fifth_Hall




