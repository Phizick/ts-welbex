import React from "react";
import stylesFooter from './Footer.module.css'
import {Menu} from '../Menu/Menu';
import socialTg from '../../images/tg.png'
import socialWts from '../../images/wts.png'
import socialPhone from '../../images/phone.png'


export const Footer = () => {
    return (
        <footer className={stylesFooter.container}>
            <div className={stylesFooter.about}>
                <div className={stylesFooter.companyStory}>
                    <p className={stylesFooter.footerTitle}>{'О компании'.toUpperCase()}</p>
                    <p className={stylesFooter.text}>Партнёрская программа</p>
                    <p className={stylesFooter.text}>Вакансии</p>
                </div>
                <div className={stylesFooter.footerMenu}>
                    <p className={stylesFooter.footerTitle}>{'Меню'.toUpperCase()}</p>
                    <Menu/>
                </div>
            </div>
            <div className={stylesFooter.contacts}>
                <p className={`${stylesFooter.footerTitle} ${stylesFooter.footerTitleLast}`}>{'Контакты'.toUpperCase()}</p>
                <p className={stylesFooter.footerPhoneText}>+7&nbsp;555&nbsp;555-55-55</p>
                <div className={stylesFooter.socialContainer}>
                    <img src={socialTg} alt={'tg img'}/>
                    <img src={socialPhone} alt={'phone img'}/>
                    <img src={socialWts} alt={'wts img'}/>
                </div>
                <p className={stylesFooter.address}>Москва, Путевой проезд 3с1, к 902</p>
                <div className={stylesFooter.copyrightContainer}>
                <p className={stylesFooter.copyRight}>©WELBEX 2022. Все права защищены.</p>
                <p className={stylesFooter.policy}>Политика конфиденциальности</p>
                </div>
            </div>
        </footer>
    )

}