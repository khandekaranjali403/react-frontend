import React, { useState, useEffect } from 'react';
import './ModalAdsTable.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ModalAdsTable = ({ onClose }) => {
  const [data, setData] = useState([]);
  const [editingTeamMember, setEditingTeamMember] = useState(null)
  const [showAddForm, setShowAddForm] = useState("")
  const [editedFormData, setEditedFormData] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    add: null,

  });
  const [newItem, setNewItem] = useState({
    id: "",
    name: '',
    image_url: [],

    url: '',
    isEditing: true,
    isNew: true,
  });

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:4000/adds/getall');
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    setEditedFormData(id);

    setEditingTeamMember(true)

    setData((prevData) =>
      prevData.map((item) =>
        item._id === id ? { ...item, isEditing: true } : { ...item, isEditing: false }
      )
    );

  };

  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prevData) =>
          prevData.map((item) =>
            item._id === id ? { ...item, image_url: reader.result } : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };


  const handleAddItem = async () => {
    setShowAddForm(true);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newItemWithId = {
      ...newItem,
      id: uuidv4(), // Generate a unique id for the new item
    };

    try {

      // Create a FormData object to send both the file and other form data
      const formDataToSend = new FormData();

      formDataToSend.append('add', formData.add);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('url', formData.url);

      console.log("88", formData)
      console.log("89", formDataToSend)

      const response = await axios.post('http://localhost:4000/adds/add', formDataToSend);
      console.log("Status:", response);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        window.alert(response.data.message)
        fetchData();
      } else {
        window.alert(response.data.message)

        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }

    setNewItem({
      id: "",
      name: '',
      image_url: [],
      url: '',
      isEditing: true,
      isNew: true,
    });

    setShowAddForm(false);
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, team: file }));
  };

  const handleSubmitFormEditTeam = async (e) => {
    e.preventDefault();

    console.log("formdara146", formData)
    console.log("formdara147", editedFormData)

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id', editedFormData);
      formDataToSend.append('add', formData.team);
      formDataToSend.append('name', formData.title);
      formDataToSend.append('url', formData.des);
      console.log("formDataToSend", formDataToSend)
      const response = await axios.post('http://localhost:4000/adds/update', formDataToSend);
      if (response.status >= 200 && response.status < 300) {
        setEditingTeamMember(false)
        window.alert(response.data.message);
        // Reload the team data after successful update

      } else {
        setEditingTeamMember(false)
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.post('http://localhost:4000/adds/delete', { id });
      console.log("Status:", response.status);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        fetchData(); // Fetch data again after successful deletion
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }

  };
  const handleCancel = () => {
    setShowAddForm(false);
    setEditingTeamMember(false);
  }
  return (
    <div className="modalAdss">
      <br />
      <h1>Feed Ads</h1>
      <br />
      {showAddForm && (
        <div className='blurBackground'>

          <div className="blurForml">
            <form onSubmit={handleSubmitForm}>
              <label>
                name:
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />
              </label>
              <label>
                url:
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                />
              </label>
              <label>
                Add Image:
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, add: e.target.files[0] })}
                />
              </label>
              <button type="submit">Submit</button>
              <button style={{ backgroundColor: "orange" }} onClick={handleCancel}>Cancel</button>
            </form>
          </div>

        </div>
      )}
      {editingTeamMember && (
        <div className='blurBackground'>

          <div className="blurForml">

            <form onSubmit={handleSubmitFormEditTeam}>
              <label>
                Name:
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <br />
              </label>
              <label>
                Url:
                <input
                  type="text"
                  value={formData.des}
                  onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <button type="submit">Submit</button>
              <button style={{ backgroundColor: "orange" }} onClick={handleCancel}>Cancel</button>
            </form>

          </div>
        </div>
      )}
      <div className="modal-content-Ads">

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>

                  {item.name}

                </td>

                <td>

                  {item.url}

                </td>

                <td>

                  <img src={`http://localhost:4000/add/${item.image_url}`} style={{ width: '100px' }} />

                </td>
                <td>

                  <React.Fragment>
                    <button onClick={() => handleEdit(item._id)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </React.Fragment>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddItem}>Add Item</button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>



    </div>
  );
};

export default ModalAdsTable;
