import React from 'react'
import './Ultimate.css';

import UltimateTextile1 from './picc/Rectangle 172.png';
import UltimateTextile2 from './picc/Rectangle 173.png';


const UltimateTextile = () => {
  return (
    <>
    <div className='UltimateTextileContainerr'>
        <h2>An Ultimate Textile Brand In Market Since 1970</h2>

        <div className='UltimateTextileDivMain'>

            <div className='UltimateTextileDiv1'>
                <img src={UltimateTextile1} alt="" id='ultimateImgg' />
                <p>Embraced the textile industry in the year 1988 to excel in the verticals of fabric processing business. The vertically integrated unit is dedicatedly engaged in processing of different types of fabrics for more than 25 years namely, S/J, Pique, Rib, Interlock, Honeycomb, Waffles, Fleeces, Rib etc. with the help of best in class and premium yarn quality.</p>
            </div>


            <div className='UltimateTextileDiv1'>
                <img src={UltimateTextile2} alt="" id='ultimateImgg' />
                <p>The manufacturing process includes utilization of regular as well as special types of yarns namely, Combined Grey Single, Viscose Grey Single, Organic, Dyed, Air Jet, Modal Slub, Cotton Slub, Bamboo, Lurex, etc..</p>
             
            </div>
        </div>

    </div>
    
    
    
    
    </>
  )
}

export default UltimateTextile