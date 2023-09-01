import React, { useEffect, useState } from 'react';
import Styles from "./contact.module.css";

import Tabel from './tabel.jsx';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';

const Contact = () => {

  const [phone, setPhone] = useState();
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`http://localhost:4000/contact/update`, {
        id: "64be1c01f97339d830791fde",
        phone: phone,
        whatsapp: whatsapp,
        email: email
      },)
      showNotification("updated successfully", "Success")
      window.location.reload();
      console.log(data);
      // Optionally, you can handle success/failure or show a message to the user upon successful form submission.
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle error state or display an error message to the user.
    }
  };

  return (
    <>
      <div className={Styles.contain}>
        <form>
          <div className={Styles.main}>
            <h1>Let's Get in Touch</h1>
            <div className={Styles.linea}></div>
            <p>Fill out the form below, and we'll be in touch shortly</p>
            <div className={Styles.inp}>
              {/* <div>
              <label>Title</label>
              <br />
              <div style={{display:'flex', padding:21 ,borderRadius:5 , width:"250%" ,minWidth:'187px', border:'solid 2px' ,borderColor:'black'}}>
 
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
 <option value="">Select an option</option>
  <option value="WhatsApp">WhatsApp</option>
  <option value="Number">Number</option>
  <option value="Agent Number">Agent Number</option>
  <option value="Email">Email</option>
 
</select>
</div>

            </div> */}
              <div>
                <label>Phone</label>
                <br />
                <input type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label>Whatsapp</label>
                <br />
                <input type='text' placeholder='Whatsapp' value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              </div>
              <div>
                <label>Email</label>
                <br />
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {/* <div>
              <label>Logo</label>
              <br />
              <div style={{display:'flex', padding:21 ,borderRadius:5 , width:"250%" ,minWidth:'187px', border:'solid 2px' ,borderColor:'black'}}>
 
              <input type='file' onChange={(e) => setLogo(e.target.files[0])} />
            </div>
            </div> */}
            </div>
            <br />

            <br />

            <button style={{ marginBottom: '20px' }} onClick={handleSubmit} className={Styles.btn}>Update</button>
          </div>
        </form>
        {/* edit contact */}
        <div className=''>
          <Tabel />
        </div>
      </div>

    </>
  );
};

export default Contact;
