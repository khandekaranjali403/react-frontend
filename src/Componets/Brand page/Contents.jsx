import React, { useState } from 'react';

import './Contents.css';

import StateModal from './StateModel';


const statesData = [
  // Replace with your state data
  { name: 'Manipur', image: '', text: '' },
  { name: 'Assam', image: '', text: '' },
  { name: 'Jammu & Kashmir', image: '', text: '' },
  { name: 'MP', image: '', text: '' },
  { name: 'West Bengal', image: '', text: '' },
  { name: 'Jharkhand', image: '', text: '' },
  { name: 'Oddisa', image: '', text: '' },
  { name: 'Auranchal Pradesh', image: '', text: '' },
  { name: 'Sikkim', image: '', text: '' },
  { name: 'Bihar', image: '', text: '' },
  { name: 'Delhi', image: '', text: '' },
  { name: 'Rajsthan', image: '', text: '' },
  { name: 'Gujarat', image: '', text: '' },
  { name: 'Chhatishgarh', image: '', text: '' },
  { name: 'Panjab', image: '', text: '' },
  { name: 'Maharastra', image: '', text: '' },
  { name: 'Goa', image: '', text: '' },
  { name: 'Kerala', image: '', text: '' },
  { name: 'Tamli Nadu', image: '', text: '' },
  { name: 'Andra Pradesh', image: '', text: '' },
  { name: 'Karnataka', image: '', text: '' },
  { name: 'Telangana', image: '', text: '' },
  { name: 'Naga Land', image: '', text: '' },
  { name: 'Uttar Pradesh', image: '', text: '' },
  { name: 'Haryana', image: '', text: '' },
  { name: 'Mizoram', image: '', text: '' },
  { name: 'Meghalaya', image: '', text: '' },
  { name: 'Uttrakhand', image: '', text: '' },
  // Add more states here
];

const Contents = () => {

  const [selectedState, setSelectedState] = useState(null);


  const handleStateClick = (state) => {
    setSelectedState(state);
  };

 
  return (
    <>
    <div className='stateDivCente'>
      <h1>States of India</h1>
      <ul className='ulSatate'>
        {statesData.map((state, index) => (
          <li key={index} onClick={() => handleStateClick(state)}>
            {state.name}
          </li>
        ))}
      </ul>
      {selectedState && <StateModal state={selectedState} closeModal={() => setSelectedState(null)} />}
    </div>
    
    </>
  )
}

export default Contents;


