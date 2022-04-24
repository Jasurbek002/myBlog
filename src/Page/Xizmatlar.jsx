import React from 'react';
import "./Xizmatlar.scss"
import bot from "../Assets/img/bot.jpg"
import site from "../Assets/img/site.png"
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next'
const Xizmatlar = () => {
    const {t} = useTranslation()
    return (
        <div className='Xizmatlar'>
            <h2 className='Xizmatlar__title'>{t('servises_to')}</h2>
            <div className='Xizmatlar__box box'>
               
                <Link to='/' className='box__card'>
                    <img className='box__card__img' src={site} alt="" />
                    <p className='box__card__title'>{t('carate_website')}</p>
                </Link>

                <Link to='/' className='box__card'>
                    <img className='box__card__img' src={bot} alt="" />
                    <p className='box__card__title'>{t('create_bot')}</p>
                </Link>
                
            </div>
            
        </div>
    );
}

export default Xizmatlar;
