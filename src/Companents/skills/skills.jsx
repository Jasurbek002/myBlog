import React from 'react';
import './skills.scss'

import images from './../../Assets/img'

const Skills = () => {
    return (
        <div className='Skills'>
            <p className='Skills__title'>Skills</p>
            <div className='Skills__items'>
                <img src={images.htmlimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.cssimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.scssimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.jsimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.reactimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.reduximg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.nextimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.tailimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.tsimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.nodeimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.eximg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.sqlimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.mongoimg} alt="item" />
            </div>
            <div className='Skills__items'>
                <img src={images.graphimg} alt="item" />
            </div> 

        </div>
    );
}

export default Skills;
