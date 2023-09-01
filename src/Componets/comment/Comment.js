import React, { useState } from 'react';
import "./comment.css"
import axios from 'axios';
import { useEffect } from 'react';
import showNotification from '../../helpers/show_notification';

const Comment = () => {
  const [data, setData] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    loadComment();
  }, [])
  const loadComment = async () => {

    const { data } = await axios.post(`http://localhost:4000/user/comment/getAll`,
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
    const { data } = await axios.post(`http://localhost:4000/user/comment/delete`, { userId: userId, commentId: id },
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      showNotification("deleted successfully", "Success")
      loadComment();
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
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item) => (

          <tr className='tra' key={item.id}>
            <td>{item.userId}</td>
            <td>{item.comment}</td>
            <td>
              <div onClick={() => {
                setUserId(item.userId)
              }}>
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

export default Comment;