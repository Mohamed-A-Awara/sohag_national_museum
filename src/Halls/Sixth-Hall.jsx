
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halls.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import BtnReadMore from '../Components/BtnReadMore';

function Sixth_Hall() {

    return (
        <>
            <div className='halls-text pt-3 pb-3'>
                    <Container fluid>
                        <ul className='Sixth-list'>
                            <li>The museum's curatorial team excels in highlighting the magical and religious beliefs of the Egyptian people throughout their ancient and contemporary history. 
                                <BtnReadMore content= "The inclusion of a meticulously preserved Qur'an from the Ottoman era as a central piece in this showcase underscores the Egyptians' steadfast adherence to their cultural traditions, religious beliefs, and natural devotion, symbolized by the revered Qur'an." />
                            </li>
                            <li>
                                This archaeological piece describes an ancient copy of the Quran written in Kufic script, one of the oldest Arabic calligraphic styles.                                 
                                <BtnReadMore  content= "The manuscript is adorned with beautiful floral and geometric decorations, dating back to the Umayyad period in the eighth century AD.The piece is in good condition, with minor damage to some pages. It measures approximately 30 cm in length and 20 cm in width. The text includes the opening verses of Surah Al-Fatiha, written in a large and clear Kufic script. Remarkably, the manuscript is made of papyrus, a material used in ancient Egypt for writing. It is embellished using the gilding technique, involving the use of gold in decoration, showcasing the beauty and artistry of Arabic Calligraphy during the Umayyad Era." />
                            </li>
                            <li>
                                This showcase explores the realm of magic and religious beliefs in Egyptian society, spanning from the Pharaonic era through Islamic times to the present day.
                                <BtnReadMore  content=" Displays include amulets, talismans, a magical painting of Horus, wooden dolls, various magical objects, and scrolls inscribed with different scripts and geometric shapes symbolizing stars and planets, reflecting astronomical and astrological knowledge.
                                    The museum's curatorial team excels in highlighting the magical and religious beliefs of the Egyptian people throughout their ancient and contemporary history." />

                            </li>
                            <li>
                                Illuminate the rituals and customs of marriage, particularly during the Islamic Eras.
                                <BtnReadMore  content="They feature items related to the bride, such as brass trays and pitchers, silver jewelry, wooden caskets decorated with silver, hand mirrors, and glass bottles for preserving perfumes. Notably, there's a marriage contract from the Mamluk era written on linen." />
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
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        <SwiperSlide className='halls-Sixth'></SwiperSlide>
                        
                    </Swiper>
                </Container>
            
            </div>
        </>
    )
}

export default Sixth_Hall





