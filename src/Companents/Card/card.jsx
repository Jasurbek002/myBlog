import React from 'react';
import './card.scss'
import git from './../../Assets/img/github.png'
const Card = ({img,title,link,git1,git2,status}) => {
    return (
        <div className='card'>
           <p className='card__status'>
              {status}
           </p>
            <img className='card__img' src={img} alt="icon" />
            <h4 className='card__title'>{title}</h4>
            <div className='card__btns'>
                <a href={git1}>
                <img src={git} alt="icon" />
                </a>
                <a style={{display: git2 ? 'flex' : 'none'}} href={git2}>
                <img src={git} alt="icon" />
                </a>
                <a className='card__btns__btn' href={link}>Link</a>
            </div>
            
        </div>
    );
}

export default Card;
