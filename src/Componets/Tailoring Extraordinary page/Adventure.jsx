import React, { useState, useEffect } from 'react';
import './Adventure.css';

import extraOdi1 from './picccc/Rectangle 174.png';
import extraOdi2 from './picccc/Rectangle 174.jpg';
import extraOdi3 from './picccc/Rectangle 174 (1).png';
import extraOdi4 from './picccc/Rectangle 174 (2).png';
import axios from "axios";
import showNotification from '../../helpers/show_notification';

const Adventure = () => {

  const [data, setData] = useState([

    {
      id: 1,

      name: 'Aghori',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TG_gnIWcJDShUfM4p9zvHiPSVvHSajp5k7Nhv9tGsbrw0pHjzGLWg8Dr4eRbDcRwpo0&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },

    {
      id: 2,

      name: 'Raj Kamal',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwHFfzRnRm6kcgE-qzWWXsWIe1Ipl_rycf67UO5wpILy_7Sdz_Oa8Jv9q3K8ENFNCP2U&usqp=CAU',
      locUrl: 'https://gaana.com/podcast/ek-kahani-aisi-bhi-season-1',
    },
    // Add more data items here if needed
  ]);

  const handleToggleImage = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, showImage: !item.showImage } : item
      )
    );
  };

  const handleDeleteRow = async (id) => {
    try {
      console.log("Deleting item with ID:", id);
      const response = await axios.post('http://localhost:4000/adventure/delete', { id: id });
      showNotification(response.data.message, "Success");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return;
  };

  useEffect(() => {


    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:4000/adventure/getall');
      console.log("Status:", response.status);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        setData(response.data.data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log("58", data)
  return (
    <>
      <div className='myAdvantureContainerr'>
        <table>
          <thead className='ag11'>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Location URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item) => (
              <tr key={item._id}>
                <td>{item.location_name}</td>
                <td>
                  {<img src={`http://localhost:4000/adventure/${item.image_url}`} alt={item.location_name} style={{ width: '100px' }} />}
                </td>

                <td>{item.location_url}</td>
                <td>
                  <button onClick={() => handleDeleteRow(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>




    </>
  )
}

export default Adventure

