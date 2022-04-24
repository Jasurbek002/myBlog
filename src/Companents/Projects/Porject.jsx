import React from 'react';
import "./Project.scss"
import {useTranslation} from 'react-i18next'
const Porject = () => {
    const {t} = useTranslation()
    return (
        <div className='Projects'>
           
           <div className='Projects__card'>
               <a href="https://gifted-goldberg-cd6959.netlify.app/">tranquil-sunburst-f9070b.netlify.app</a>
               <p className='Projects__card__text'>{t('filim_site')}</p>
           </div>
           <div className='Projects__card'>
               <a href="https://tourmaline-snickerdoodle-fb9509.netlify.app/">https://tourmaline-snickerdoodle-fb9509.netlify.app/</a>
               <p className='Projects__card__text'>{t('watch_site')}</p>
           </div>
           <div className='Projects__card'>
               <a href="https://tranquil-sunburst-f9070b.netlify.app/">tranquil-sunburst-f9070b.netlify.app</a>
               <p className='Projects__card__text'>{t('alan_bot')}</p>
           </div>
           <div className='Projects__card'>
               <a href="https://symphonious-bublanina-c0cd79.netlify.app/">tranquil-sunburst-f9070b.netlify.app</a>
               <p className='Projects__card__text'>{t('new_site')}</p>
           </div>
           <div className='Projects__card'>
               <a href="https://guileless-bienenstitch-f4fff8.netlify.app/">tranquil-sunburst-f9070b.netlify.app</a>
               <p className='Projects__card__text'>{t('todos_site')}</p>
           </div>

        </div>
    );
}

export default Porject;
