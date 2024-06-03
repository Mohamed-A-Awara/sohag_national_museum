import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import BtnReadMore from '../Components/BtnReadMore';

function Third_Hall() {

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>
                                Within these exhibits lies an extensive collection of culinary tools and utensils crafted from an array of materials,
                                <BtnReadMore
                                    content= "including alabaster, granite, basalt, and pottery. The varied sizes and shapes of these items hint at their manifold applications in the culinary practices of ancient Egyptians.These artifacts vividly illustrate the significant role museums play in seamlessly connecting the past with the present, emphasizing the continuous thread that ties the lifestyle of ancient Egyptians to that of contemporary humanity.Among the notable artifacts is the ' Hawan ' a commonplace item, particularly prevalent in Upper Egypt. The exhibits also spotlight advancements in serving dishes, water jugs, and more, showcasing the diverse materials used in their present-day manufacture. An intriguing aspect unfolds, revealing the ancient Egyptians' mastery in preserving food and beverages, including wine. This expertise is showcased through the use of Nile silt in crafting clay pots and granaries for storage.These artifacts not only offer valuable insights into the culinary practices of ancient Egyptians but also provide a glimpse into their daily lives, blending practical innovations with cultural traditions in a seamless narrative." />
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
                        <SwiperSlide className='halls-Third'></SwiperSlide>
                        <SwiperSlide className='halls-Third'></SwiperSlide>
                        <SwiperSlide className='halls-Third'></SwiperSlide>
                        <SwiperSlide className='halls-Third'></SwiperSlide>
                        <SwiperSlide className='halls-Third'></SwiperSlide>

                
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Third_Hall

