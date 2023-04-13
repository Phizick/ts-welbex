import React from "react";
import stylesMainContent from './MainContent.module.css';
import {Button} from "../../Ui/Button/Button";

export const MainContent = () => {
    return (
        <section className={stylesMainContent.content}>
            <div className={stylesMainContent.glass}>
                <div className={stylesMainContent.container}>
                    <div className={stylesMainContent.titleContainer}>
                        <h1 className={stylesMainContent.title}>Зарабатывайте{'\n'}больше{'\n'}<span className={stylesMainContent.titleSpan}>с&nbsp;WELBEX</span></h1>
                        <p className={stylesMainContent.subtitle}>Развиваем и&nbsp;контролируем{'\n'}продажи за&nbsp;вас</p>
                    </div>
                    <div className={stylesMainContent.infoContainer}>
                        <p className={stylesMainContent.infoTitle}>Вместе с&nbsp;<span className={stylesMainContent.infoSpan}>БЕСПЛАТНОЙ{'\n'}КОНСУЛЬТАЦИЕЙ</span> мы&nbsp;дарим:</p>
                        <ul className={stylesMainContent.grid}>
                            <li className={stylesMainContent.gridItem}>
                                <p className={stylesMainContent.gridItemTitle}>{'Виджеты'.toUpperCase()}</p>
                                <p className={stylesMainContent.gridItemText}>30&nbsp;готовых{'\n'}решений</p>
                            </li>
                            <li className={stylesMainContent.gridItem}>
                                <p className={stylesMainContent.gridItemTitle}>{'Dashboard'.toUpperCase()}</p>
                                <p className={stylesMainContent.gridItemText}>с&nbsp;показателями
                                    вашего бизнеса</p>
                            </li>
                            <li className={stylesMainContent.gridItem}>
                                <p className={stylesMainContent.gridItemTitle}>{'Skype Аудит'.toUpperCase()}</p>
                                <p className={stylesMainContent.gridItemText}>отдела продаж{'\n'}и&nbsp;CRM системы</p>
                            </li>
                            <li className={stylesMainContent.gridItem}>
                                <p className={stylesMainContent.gridItemTitle}>{'35\u00A0дней'.toUpperCase()}</p>
                                <p className={stylesMainContent.gridItemText}>использования{'\n'}CRM</p>
                            </li>
                        </ul>
                        <Button text={'Получить консультацию'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}