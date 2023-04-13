import React from "react";
import stylesHeader from './Header.module.css'
import logoImg from '../../images/logo.png'
import {NavItems} from "../Constants/NavItems";
import socialTg from '../../images/tg.png'
import socialWts from '../../images/wts.png'
import socialPhone from '../../images/phone.png'

export const Header = () => {
    return (
        <header className={stylesHeader.header}>
            <div className={stylesHeader.mainHeaderContent}>
            <div className={stylesHeader.logoContainer}>
                <img className={stylesHeader.headerLogo} src={logoImg} alt={'welbex logo'}/>
            </div>
            <ul className={stylesHeader.headerNav}>
                {NavItems?.map((item: string) => {
                    return (
                        <li className={stylesHeader.headerNavItem}>{item}</li>
                    )
                })}
            </ul>
            <div className={stylesHeader.contacts}>
                <p className={stylesHeader.contactsText}>+7&nbsp;555&nbsp;555-55-55</p>
                <div className={stylesHeader.socialContainer}>
                    <img src={socialTg} alt={'tg img'}/>
                    <img src={socialPhone} alt={'phone img'}/>
                    <img src={socialWts} alt={'wts img'}/>
                </div>
            </div>
            </div>

                <div className={stylesHeader.textContainer}>
            <p className={stylesHeader.logoText}>крупный интегратор CRM{`\n`} в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах</p>
                </div>

        </header>
    )
}