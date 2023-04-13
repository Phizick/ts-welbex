import React from 'react'
import stylesMainPage from './MainPage.module.css'
import {Header} from "../../Components/Header/Header";
import {MainContent} from "../../Components/MainContent/MainContent";

export const MainPage = () => {
    return (
        <div className={stylesMainPage.balls}>
            <section className={stylesMainPage.content}>
            <Header/>
                <MainContent/>
            </section>


        </div>
    )
}