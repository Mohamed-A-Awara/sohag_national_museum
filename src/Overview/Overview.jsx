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
import { useTranslation } from 'react-i18next'


function Overview() {
    const {t} = useTranslation()
    return (
        <>
        {/* all-parent will be in App.css as Global Style */}
        <div className="all-parent">

        {/* Start Overview Header */}
        <div className='head_section pt-3 pb-3'>
                <p>{t('overviewHeader')}</p>                
        </div>
        {/* End Overview Parent */}

        {/* Start Section One */}
        <section className='section1'>
        <div className='top'>
            <div className='text'>
                <p>{t('overviewPageText')}
                    <BtnReadMore content={t('overviewTextMore')} />
                </p>

            </div>
            <div className='image'>
                <Image src={img1_overview} thumbnail />
            </div>
        </div>
        <div className='bottom'>
            <div className='text'>
                <p>{t('overvviewText2')}
                    <BtnReadMore content= {t('overviewTextMore2')} />
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
                <p>{t('Exhibitionheader')}</p>                
        </div>

        <section className='section2'>
        <div className='top'>
            <div className='text'>
                <p>{t('extext1')} 
                    <BtnReadMore content={t('extextmore')} />    
                </p>
                
            </div>
            <div className='image'>
                <Image src={img3_overview} thumbnail/>
            </div>
        </div>
        </section>
        {/* ////////////////////////////////////////////////////section3/////////////////////////////////////////////////////////////////////// */}

        <div className='head_section pt-3 pb-3'>
                <p>{t('MuseumDisplay')}</p>
        </div>


        <section className='section3'>
        <div className='top'>
            <div className='text'>
                <p>{t('MuseumDisplayText')}

                    <BtnReadMore content={t('MuseumDisplayTextmore')} />
                </p>
            </div>

            <div className='image'>
                <Image src={img4_overview} thumbnail/>
            </div>
        </div>

        <div className='bottom'>
            <div className='text'>
                <p>{t('MuseumDisplayText2')} 
                    <BtnReadMore content={t('MuseumDisplayTextmore2')} /> 
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
