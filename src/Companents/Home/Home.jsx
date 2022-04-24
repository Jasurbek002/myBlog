import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.scss"
import MyImage from "../../Assets/img/Myimg2.jpg"
import Git from "../../Assets/img/github.png"
import LinkK from "../../Assets/img/Link.png"
import telegram from "../../Assets/img/telegram.png"
import gmail from "../../Assets/img/gmail.jpg"
import Xizmatlar from '../../Page/Xizmatlar';
import { t } from 'i18next';
const Home = () => {
    return (
        <div className='Home'>
            <Link className='Home__Myimg' to='/' >
                <img src={MyImage} alt="" />
                </Link>  
                <a className='Home__git' href="https://github.com/orgs/jasurbek-2002/dashboard">
                    <img src={Git} alt="" /> {t('gitHub')}
                </a>
                <a className='Home__git' href="https://www.linkedin.com/in/jasurbek-turgunov-157b48235/">
                    <img src={LinkK} alt="" /> {t("Linkedin")}
                </a>
                <a className='Home__git' href="https://t.me/jasurbekblog_uz">
                    <img src={telegram} alt="" /> {t('telegram')}
                </a>
                <a className='Home__git' href="https://mail.google.com/mail/u/1/#inbox">
                    <img src={gmail} alt="" /> {t('gmail')}
                </a>
                <Xizmatlar />
        </div>
    );
}

export default Home;
