import React from 'react';
import './BirHorizons.css';

import birpic1 from './imgg/Rectangle 171.png';
import birpic2 from './imgg/Rectangle 171 (1).png';
import birpic3 from './imgg/Rectangle 171 (2).png';
import birpic4 from './imgg/Rectangle 171 (3).png';



const BirHorizons = () => {
  return (
    <>
    <div className='birHorozonsConatinerr'>
        <h2>BIR HORIZONS</h2>

        <div className='BirCArdss'>
            <div className='BirCArdss1'>
                <img src={birpic1} alt="" id='birLogo1' />
                <p>500</p>
                <p>Tons / Months</p>
                <p>KNITTED FABRIC</p>
            </div>

            <div className='BirCArdss2'>
                <img src={birpic2} alt="" id='birLogo1' />
                <p>50000</p>
                <p>Meters / Day</p>
                <p>ROTARY PRINTING </p>
            </div>

            <div className='BirCArdss3'>
                <img src={birpic3} alt="" id='birLogo1' />
                <p>15000</p>
                <p>Kgs / Day</p>
                <p> DYEING </p>
            </div>

            <div className='BirCArdss4'>
                <img src={birpic4} alt="" id='birLogo1' />
                <p>4000</p>
                <p>Kgs / Day</p>
                <p> SUEDING </p>
            </div>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default BirHorizons