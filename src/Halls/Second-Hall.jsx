import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import BtnReadMore from '../Components/BtnReadMore';










function Second_Hall() {

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul>
                            <li>This hall explores the archaeological artifacts related to family life in general, showcasing a total of 139 exhibited pieces.</li>
                            <li><span style={{fontSize :"20px" , fontWeight : "700"}}>Main Artifact :</span> <br/> <br/> The Hall Lantern. A limestone naos belonging to a person named "Heka-Nefert" was discovered in Abydos. 
                                <BtnReadMore content="Inside, a statue of a man is accompanied by his wife. On the exterior sides of the naos, there is a family scene representing the owner of the naos, his wife, and their children."/>
                            </li>
                            <li><span style={{fontSize :"20px" , fontWeight : "700"}}>First Showcase : </span> <br/> <br/>The showcase contains artifacts representing the cohesion of Egyptian families.
                                <BtnReadMore content="A limestone panel depicts a man with his son in front of them, offering a table of offerings with various foods. In the scene, the man's wife and behind her, their daughter are also depicted. Additionally, there is a statue of a person named 'Antef' and his wife found in Abydos, resembling a commemorative image of a man and his wife. There is also a terracotta statue of a woman breastfeeding her child and other pieces representing children's toys, including terracotta figurines, dice, and some balls used for play."/>
                            </li>
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>Second Showcase : </span> <br/> <br/> A large collection of adornments is displayed, such as anklets, some with remains of kohl substance, anklets, and parts of combs made of ivory used for hair styling.
                                <BtnReadMore content="Glass bottles for preserving perfumes and boards made of schist, used for holding kohl and cosmetic powders, are also present. A wooden statue in the middle emphasizes the agility and concern of Egyptian women for their beauty."/>  
                            </li>                              
                            <li> <span style={{fontSize :"20px" , fontWeight : "700"}}>Third Showcase : </span> <br/> <br/>This showcase contains a diverse collection of jewelry that women used to enhance their beauty, 
                                <BtnReadMore content=' including bracelets made of ivory, bone, bronze, and others. There are also necklaces made of precious and semi-precious stones, with some featuring amulets or charms.' />
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
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>
                        <SwiperSlide className='halls-Second'></SwiperSlide>

                
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Second_Hall

