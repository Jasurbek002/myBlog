import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss"
import Tele from "../Assets/img/telegram.png"
import insta from "../Assets/img/instaimg.jpg"
import face from "../Assets/img/faceIcon.png"
import phone from "../Assets/img/phoneimg.png"
import {useTranslation} from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className='Footer'>

         <div className='Footer__nav'>

         <ul className='Footer__nav__menu'> 
         <Link className='Footer__nav__menu__link' to='/' >{t('home')}</Link>
         <Link className='Footer__nav__menu__link' to='/About' >{t('about')}</Link>
         <Link className='Footer__nav__menu__link' to='/Projects' >{t('project')}</Link>
         <a    className='Footer__nav__menu__link' href="tel:+998337253002"> +998337253002</a>
         </ul>

         <div className='Footer__nav__box '>
             <a className='Footer__nav__box__link' href="https://t.me/admeral_off">
                 <img src={Tele} alt="" /> {t('telegram')}
             </a>
             <a className='Footer__nav__box__link' href="https://t.me/admeral_off">
                 <img src={insta} alt="" /> {t('insta')}
             </a>
             <a className='Footer__nav__box__link' href="https://www.facebook.com/jasurbek.turgunov.1460">
                 <img src={face} alt="" /> {t('face')}
             </a>
             <a className='Footer__nav__box__link' href="tel:+998916869917">
                 <img src={phone} alt="" /> {t('phone')}
             </a>
         </div>

         </div>

         <div className='Footer__bar bar'>
             <h3 className='bar__title' >{t('about_me')}</h3>
             <p className='bar__text'>{t('about_me_dicription')}</p>
             <Link className='bar__link' to='/Projects'>{t('my_project')}</Link>
         </div>

        </div>
    );
}

export default Footer;
