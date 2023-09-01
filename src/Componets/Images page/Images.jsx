import React from 'react';
import './Images.css';

import imgPg1 from './img/Rectangle 167.png';
import imgPg2 from './img/Rectangle 168.jpg';
import imgPg3 from './img/Rectangle 169.png';
import Carousel from './carasoul/Carousel';



const Images = () => {
  return (
    <>
    <div className='imgConatiner'>
        <h1>Our Images</h1>

        <div className='myImgg'>

          <Carousel />
            {/* <img src={imgPg1} alt="" id='imgPg1' />
            <img src={imgPg2} alt="" id='imgPg1' />
            <img src={imgPg3} alt="" id='imgPg1' /> */}
        </div>
    </div>
    
    
    
    </>
  )
}

export default Images