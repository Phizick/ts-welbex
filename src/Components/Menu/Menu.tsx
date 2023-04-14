import React, {FC, useEffect, useState} from "react";
import stylesMenu from './Menu.module.css'

export const Menu: FC = () => {
    const [screenSizeMin, getDimension] = useState({
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
    }, [screenSizeMin]);

    return (
        <>
        {screenSizeMin.dynamicWidth <= 650
                ?
                <ul className={stylesMenu.container}>
                    <li className={stylesMenu.item}>Расчёт{`\n`}стоимости</li>
                    <li className={stylesMenu.item}>Услуги</li>
                    <li className={stylesMenu.item}>Виджеты</li>
                    <li className={stylesMenu.item}>Интеграции</li>
                    <li className={stylesMenu.item}>Наши клиенты</li>
                    <li className={stylesMenu.item}>Благодарность{`\n`}клиентов</li>
                    <li className={stylesMenu.item}>Кейсы</li>
                    <li className={stylesMenu.item}>Сертификаты</li>
                    <li className={stylesMenu.item}>Блог на Youtube</li>
                    <li className={stylesMenu.item}>Вопрос / Ответ</li>
                </ul>
                :
                <ul className={stylesMenu.container}>
                    <li className={stylesMenu.item}>Расчёт стоимости</li>
                    <li className={stylesMenu.item}>Услуги</li>
                    <li className={stylesMenu.item}>Виджеты</li>
                    <li className={stylesMenu.item}>Интеграции</li>
                    <li className={stylesMenu.item}>Наши клиенты</li>
                    <li className={stylesMenu.item}>Кейсы</li>
                    <li className={stylesMenu.item}>Благодарственные письма</li>
                    <li className={stylesMenu.item}>Сертификаты</li>
                    <li className={stylesMenu.item}>Блог на Youtube</li>
                    <li className={stylesMenu.item}>Вопрос / Ответ</li>
                </ul>
        }
        </>


    )
}