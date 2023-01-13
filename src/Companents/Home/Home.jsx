import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss"
import Git from "../../Assets/img/github.png"
import LinkK from "../../Assets/img/Link.png"
import telegram from "../../Assets/img/telegram.png"
import gmail from "../../Assets/img/gmail.jpg"
import { t } from 'i18next';
import Skills from '../skills/skills';
const Home = () => {
    return (
        <div className='Home'>

            <div  className='Home__bar'>
             <p className='Home__bar__text'>Assalomu alaykum dasturlashga oid blog saytimga hush kelibsiz</p>
            <h2 data-text="Contact" className='Home__bar__contact'>Contact</h2>

            <a className='Home__bar__git' href="https://github.com/orgs/Jasurbek002/dashboard">
                <img src={Git} alt="" /> {t('gitHub')}
            </a>

            <a className='Home__bar__git' href="https://www.linkedin.com/in/jasurbek-turgunov-157b48235/">
                <img src={LinkK} alt="" /> {t("Linkedin")}
            </a>

            <a className='Home__bar__git' href="https://t.me/jasurbekitblog">
                <img src={telegram} alt="" /> {t('telegram')}
            </a>

            <a className='Home__bar__git' href="https://mail.google.com/mail/u/1/#inbox">
                <img src={gmail} alt="" /> {t('gmail')}
            </a>

           <Link className='Home__bar__service' to='/xizmatlar'>Services</Link>
            </div>
          
            <div className='Home__box'>
                <Skills />       
            </div>

        </div>
    );
}

export default Home;
