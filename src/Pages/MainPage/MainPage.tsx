import React from 'react'
import stylesMainPage from './MainPage.module.css'
import {Header} from "../../Components/Header/Header";
import {MainContent} from "../../Components/MainContent/MainContent";
import {Footer} from "../../Components/Footer/Footer";
import redBallImg from '../../images/red_ball.png'
import purpleBallImg from '../../images/purple_ball.png';


export const MainPage = () => {
    return (
        <div className={stylesMainPage.balls}>
            <section className={stylesMainPage.content}>
            <Header/>
                <MainContent/>
            </section>
            <Footer/>
            <div className={stylesMainPage.ballRedFirst}>
                <img className={stylesMainPage.ballImgRed} src={redBallImg} alt={'red ball'}/>
            </div>
            <div className={stylesMainPage.ballPurpleFirst}>
                <img className={stylesMainPage.ballImgPurple} src={purpleBallImg} alt={'purple ball'}/>
            </div>
            <div className={stylesMainPage.ballRedSecond}>
                <img className={stylesMainPage.ballImgRedSmall} src={redBallImg} alt={'red ball'}/>
            </div>
            <div className={stylesMainPage.purpleLight}>
                <svg width="1043" height="980" viewBox="0 0 1043 980" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_0_11)">
                        <circle cx="521.5" cy="459.5" r="129.5" fill="#833AB4"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_0_11" x="0" y="-62" width="1043" height="1043" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="196" result="effect1_foregroundBlur_0_11"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className={stylesMainPage.redLight}>
                <svg width="1095" height="980" viewBox="0 0 1095 980" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" filter="url(#filter0_f_0_10)">
                        <circle cx="547.5" cy="547.5" r="155.5" fill="#961A1A"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_0_10" x="0" y="0" width="1095" height="1095" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="196" result="effect1_foregroundBlur_0_10"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}