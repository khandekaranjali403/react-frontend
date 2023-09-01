import React, { useState } from 'react';
import "./review.css"
import axios from 'axios';
import { useEffect } from 'react';
import showNotification from '../../helpers/show_notification';

const Review = () => {
  const [data, setData] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    loadReview();
  }, [])
  const loadReview = async () => {

    const { data } = await axios.get(`http://localhost:4000/review/getall`,
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setData(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };


  const handleRemove = async (id) => {
    const { data } = await axios.delete(`http://localhost:4000/review/delete/${id}`,
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      showNotification("deleted successfully", "Success")
      loadReview();
    }
    else {
      showNotification(data.message, "Error")

    }
  };

  return (
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th >User</th>
          <th>Review</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item) => (

          <tr className='tra' key={item.id}>
            <td>{item.userId.first_name}</td>
            <td>{item.caption}</td>
            <td>
              <div>
                <button className='button' onClick={() => {
                  handleRemove(item._id)
                }}>Remove</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Review;