import React, { useState  } from 'react';
import Modal from './ModalAdsTable.jsx';

import ModalHome from './ModelAdsTableHome.jsx';
import './Ads.css';


const Ads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [ isModalOpenHome, setIsModalOpenHome] = useState(false);
  const handleHomeClick = () => {
    setIsModalOpenHome(true);
    setIsModalOpen(false);
  };
  

  const handleFeedsClick = () => {
    setIsModalOpen(true);
    
    setIsModalOpenHome(false);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpenHome(false);
  };

  return (
    <div className='myBtnAdss'>
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={handleFeedsClick}>Feeds</button>
<div style={{display:'flex' , flexDirection:'column'}}>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
      
      {isModalOpenHome && <ModalHome onClose={handleCloseModal} />}

</div>
    </div>
  );
};

export default Ads;
