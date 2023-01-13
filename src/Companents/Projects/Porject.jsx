import React from 'react';
import "./Project.scss";
import Card from '../Card/card';

import hh from './../../Assets/img/hh.png';
import tdtu from './../../Assets/img/tdtu.png';
import asmo from './../../Assets/img/asmo.png';


const Porject = () => {
 
  return (
    <div className='Projects'>
      <h1 className='Projects__title'>PROJECTS</h1>


      <Card
        status={'Production'}
        img={hh}
        title={'React js, Scss ,javascript, Node js, Express js postgresql'}
        link={'https://hillhouse-capital.org/'}
        git1={'https://github.com/Jasurbek002/hh.front.app.git'}
        git2={'https://github.com/Jasurbek002/node-js-postgress-template.git'}
      />

      <Card
        status={'Development'}
        img={tdtu}
        title={'Next js, Scss,Taliwind css,javascript, Node js, Express js, postgresql'}
        link={'https://tdtu-ilmiy-uz.vercel.app/'}
        git1={'https://github.com/Jasurbek002/tdtu-dev.git'}
        git2={'https://github.com/Jasurbek002/tdtu.server.app.git'}
      />

      <Card
        status={'Production'}
        img={asmo}
        title={'html, scss, bootstap, javascript'}
        link={'https://www.asmoclinic.uz/ru/index.html'}
        git1={'https://github.com/Jasurbek002/project.cl.app'}
        git2={''}
      />



    </div>
  );
}

export default Porject;
