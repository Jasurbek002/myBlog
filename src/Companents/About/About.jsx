import React from 'react';
import "./About.scss"
import my from './../../Assets/img/my.jpg'
const About = () => {
    return (
        <div className='About'>
            <div className='About__ground'>

                <div className='About__ground__bar'>

                    <img src={my} alt="" loading='lazy' />

                    <div className='About__ground__bar__box'>
                        <h1 className='About__ground__bar__box__title'>Jasurbek Turg'unov</h1>
                        <p className='About__ground__bar__box__text'>
                            Education: Najot ta'lim IT academy,

                        </p>
                        <h2 className='About__ground__bar__box__job'>
                            Full stack javascript developer
                        </h2>
                    </div>

                </div>

                <div className='About__ground__card'>

                    <div className='About__ground__card__item'>
                        <h3 className='About__ground__card__item__title'>Ko'nikmalar:</h3>
                        <p className='About__ground__card__item__text'>
                            Html, css, scss, bootstarap5, javaScript,
                             React js, Next js, Tailwind css , Redux,
                             Redux-tolkit ,Typescript ,Node js, Express js, postgresql,
                             MongoDB,Redis,ORM,  
                        </p>
                    </div>

                    <div className='About__ground__card__item'>
                        <h3 className='About__ground__card__item__title'>Tajriba:</h3>
                        <p className='About__ground__card__item__text'>
                           Frontend dasturlash bo'yicha metor <br />
                           Full stack web dasturchi
                        </p>
                    </div>

                    <div className='About__ground__card__item'>
                        <h3 className='About__ground__card__item__title'>Ish joyi:</h3>
                        <p className='About__ground__card__item__text'>
                           Najot ta'lim: Front end mentor <br />
                           offline <br />
                           TDTU: Full stack dasturchi <br />
                           online

                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default About;
