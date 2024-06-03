import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import BtnReadMore from '../Components/BtnReadMore';

function Fourth_Hall() {

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>
                            How it Began: The exhibit begins by showcasing artifacts illustrating the early stages of the ancient Egyptian alphabet, chosen or shaped by ancient Egyptians from their surrounding environment,
                                <BtnReadMore
                                    content="such as the owl, chick, and more. Writing Techniques: The ancient Egyptians initially used reed pens and small dishes forming the 'writing palette' for ink or inkwells. They wrote on ostraca, stone or clay tablets using pens made from plants like papyrus or reed. Ink : Initially, black ink dominated, with red ink introduced in the modern state era for headings and paragraph beginnings. Alternatively, they used duck feathers for writing on papyrus, made from the ancient papyrus plant found in the Delta region. The ancient Egyptian loved music, so he was the first person to make musical instruments in order to enjoy himself in his spare time.The Nile River played an important role in the lives of The Ancient Egyptians, As it was the largest factor influencing trade. "
                                />
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
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>
                        <SwiperSlide className='halls-Fourth'></SwiperSlide>

                
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Fourth_Hall


