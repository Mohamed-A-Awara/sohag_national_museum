import React from "react";
import {Image} from "react-bootstrap"
import TeamLogo from "../Tools/Imgs/teamImg.png"
import { useTranslation } from "react-i18next";



function HomeDesign() {
    const [t] = useTranslation()
    return(
        <>
            <section className="homeDesign ">
                <div className="homeDesign-overlay">
                    <div className="homeDesign-parent">
                        <h1 className="text-center p-4 title-wel">{t('Welcome')}</h1>
                        <div className="homeDesign-header">
                            <span className="leftLine"></span>
                            <h1 className="text-center">{t('to')}</h1>
                            <span className="rightLine"></span>
                        </div>
                        <h1 className="text-center title-sohag">{t('title')}</h1>
                        <p className="text-center pt-2">{t('text')}</p>
                        <Image src={TeamLogo} /> 
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeDesign; 
