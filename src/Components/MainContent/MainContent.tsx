import React,{useEffect, useState} from "react";
import stylesMainContent from './MainContent.module.css';
import {Button} from "../../Ui/Button/Button";

export const MainContent = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth
        })
    };

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);


    return (
        <section className={stylesMainContent.content}>
            <div className={stylesMainContent.glass}>
                <div className={stylesMainContent.container}>
                    <div className={stylesMainContent.titleContainer}>
                        <h1 className={stylesMainContent.title}>Зарабатывайте{'\n'}больше{'\n'}<span className={stylesMainContent.titleSpan}>с&nbsp;WELBEX</span></h1>
                        <p className={stylesMainContent.subtitle}>Развиваем и&nbsp;контролируем{'\n'}продажи за&nbsp;вас</p>
                    </div>
                    <div className={stylesMainContent.infoContainer}>
                        <p className={stylesMainContent.infoTitle}>Вместе с&nbsp;<span className={stylesMainContent.infoSpan}>{'бесплатной'.toUpperCase()}{'\n'}</span><span className={stylesMainContent.infoSpanOrange}>{'консультацией'.toUpperCase()}</span> мы&nbsp;дарим:</p>
                        {screenSize.dynamicWidth <= 690
                            ?
                            <ul className={stylesMainContent.grid}>
                                <li className={stylesMainContent.gridItem}>
                                    <div className={stylesMainContent.mobileLine}></div>
                                    <p className={stylesMainContent.gridItemTextMobile}>{'skype аудит'.toUpperCase()}</p>
                                </li>
                                <li className={stylesMainContent.gridItem}>
                                    <div className={stylesMainContent.mobileLine}></div>
                                    <p className={stylesMainContent.gridItemTextMobile}>{'30 виджетов'.toUpperCase()}</p>
                                </li>
                                <li className={stylesMainContent.gridItem}>
                                    <div className={stylesMainContent.mobileLine}></div>
                                    <p className={stylesMainContent.gridItemTextMobile}>{'Dashboard'.toUpperCase()}</p>
                                </li>
                                <li className={stylesMainContent.gridItem}>
                                    <div className={stylesMainContent.mobileLine}></div>
                                    <p className={stylesMainContent.gridItemTextMobile}>{'Месяц\u00A0аmoCRM'.toUpperCase()}</p>
                                </li>
                            </ul>
                            :
                            <>
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
                            <p className={stylesMainContent.gridItemTitle}>{'Skype\u00A0Аудит'.toUpperCase()}</p>
                            <p className={stylesMainContent.gridItemText}>отдела продаж{'\n'}и&nbsp;CRM системы</p>
                            </li>
                            <li className={stylesMainContent.gridItem}>
                            <p className={stylesMainContent.gridItemTitle}>{'35\u00A0дней'.toUpperCase()}</p>
                            <p className={stylesMainContent.gridItemText}>использования{'\n'}CRM</p>
                            </li>
                            </ul>
                            <Button text={'Получить консультацию'}/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}