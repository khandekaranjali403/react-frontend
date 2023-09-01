import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [inputs, setInputs] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    image: null,
    imagePreview: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log(inputs);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputs({
          ...inputs,
          image: file,
          imagePreview: reader.result
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setInputs((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleEdit = (field) => {
    if (field !== 'image') {
      const updatedValue = prompt(`Enter new ${field}`);
      if (updatedValue) {
        setInputs((prevData) => ({
          ...prevData,
          [field]: updatedValue
        }));
      }
    }
  };
  return (
    <>
      <div className='HOmeConatinerr'>
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input type="file" name="image" onChange={handleChange} />
            {inputs.imagePreview && (
              <img src={inputs.imagePreview} alt="Preview" id='imgUploaded' />
            )}
            <button onClick={() => handleEdit('image')} id='imgBtnn'>Edit</button>
          </div>

          <div className='allInputBoxs'>
            <div>
              <label>First Name:</label>
              <button onClick={() => handleEdit('fname')}>Edit</button>
              <br />
              <input
                type="text"
                name="fname"
                value={inputs.fname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Last Name:</label>
              <button onClick={() => handleEdit('lname')}>Edit</button>
              <br />
              <input
                type="text"
                name="lname"
                value={inputs.lname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email:</label>
              <button type="button" onClick={() => handleEdit('email')}>
                Edit
              </button>
              <br />
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone:</label>
              <button onClick={() => handleEdit('phone')}>Edit</button>
              <br />
              <input
                type="text"
                name="phone"
                value={inputs.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Address:</label>
              <button onClick={() => handleEdit('address')}>Edit</button>
              <br />
              <input
                type="text"
                name="address"
                value={inputs.address}
                onChange={handleChange}
                id='myAddress'
              />
            </div>
          </div>

          <button type="submit" id='myBtnSubmit'>Submit</button>
</form>
      </div>
    </>
  );
};

export default Home;
