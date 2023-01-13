import React from 'react';
import './widjet.scss'

const Widjet = ({text}) => {
    return (
        <div className='Widget'>
            <p className='widget__text'>
                  {text}
            </p>
        </div>
    );
}

export default Widjet;
