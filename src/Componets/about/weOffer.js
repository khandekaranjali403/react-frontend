import React, { useState, useEffect } from 'react';
import './about.css';



import axios from 'axios';
import '../Technology Of Textile page/ModalAdsTable.css';
const AboutAdmin = () => {
  // Assuming you have the useState hook to manage formData
  const [formData, setFormData] = useState({
    title: '',
    des: '',

    team: null, // Assuming the initial value for the 'team' field is null
  });



  const [data, setData] = useState();

  const [editingTeamMember, setEditingTeamMember] = useState(null);

  useEffect(() => {
    loadTeam();
  }, [])
  const loadTeam = async () => {

    const { data } = await axios.post(`http://localhost:4000/about/offer/getAll`,
    )
    if (data) { console.log(data.success, "jk") }
    if (data.status === true) {
      console.log(data.data, "data")
      setData(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };


  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editingMember.id ? { ...editingMember } : item
      )
    );
    setEditingMember(null);
  };

  const handleDelete = async (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    const response = await axios.delete(`http://localhost:4000/about/offer/delete/${id}`);
    if (response.status >= 200 && response.status < 300) {

      window.alert(response.data.message);
      // Reload the team data after successful update
      loadTeam();
    } else {
      setEditingTeamMember(false)
      window.alert(response.data.message);
      throw new Error('Network response was not ok.');

    }
  };

  const handleAdd = () => {
    setEditingMember(true)
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0]; // Get the selected image file
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     // After the image is read, update the editingMember object with the selected image data
  //     setEditingMember((prevMember) => ({ ...prevMember, image: reader.result }));
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file); // Read the selected image as a data URL
  //   }
  // };




  const [editingMember, setEditingMember] = useState(null);
  const [editedFormData, setEditedFormData] = useState({
    id: '',
    title: '',
    des: '',
    team: null,
  });

  useEffect(() => {
    loadTeam();
  }, []);

  // const loadTeam = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/about/team/getAll');
  //     const { data } = response;
  //     if (data.status === true) {
  //       setData(data.data);
  //     } else {
  //       console.log(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error loading team:', error);
  //   }
  // };

  const handleEdit = async (_id) => {
    console.log("id", _id)
    const memberToEdit = await data.find((item) => item._id === _id);
    console.log("memberToEdit", memberToEdit)
    console.log("formdara", formData)

    setEditedFormData({
      id: memberToEdit._id,
      title: formData.title,
      des: formData.des,
      team: formData.team,
    });
    setEditingMember(_id);
    setEditingTeamMember(true);
  };

  const handleCancel = () => {
    setEditingMember(null);
    setEditedFormData({
      id: '',
      title: '',
      des: '',
      team: null,
    });

    setEditingTeamMember(false)
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setEditedFormData((prevFormData) => ({ ...prevFormData, team: reader.result }));
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file); // This reads the selected image as a data URL
  //   }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, team: file }));
  };

  const handleSubmitFormEditTeam = async (e) => {
    e.preventDefault();
    console.log("formdara146", editedFormData)
    console.log("formdara146", formData)
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id', editedFormData._id);
      formDataToSend.append('offer', formData.team);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('des', formData.des);
      console.log("formDataToSend", formDataToSend)
      const response = await axios.post('http://localhost:4000/about/offer/update', formDataToSend);
      if (response.status >= 200 && response.status < 300) {
        setEditingTeamMember(false)
        window.alert(response.data.message);
        // Reload the team data after successful update
        loadTeam();
        setEditingMember(null);
      } else {
        setEditingTeamMember(false)
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');

      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };



  const handleSubmitForm = async (e) => {
    e.preventDefault();

    console.log("formData before submission:", formData);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('offer', formData.team); // Assuming 'team' contains the binary data of the file.
      formDataToSend.append('title', formData.title);
      formDataToSend.append('des', formData.des);
      // formDataToSend.append('name', formData.name);
      // formDataToSend.append('url', formData.url);
      console.log("formDataToSend:", formDataToSend);
      const response = await axios.post('http://localhost:4000/about/offer/add', formDataToSend);
      console.log("Status:", response);

      // Check for a successful response (status code 200-299)
      if (response.status >= 200 && response.status < 300) {
        window.alert(response.data.message);
        loadTeam();
      } else {
        window.alert(response.data.message);
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }

    setEditingMember(false);
  };
  // const handleCancel =() => {

  //     setEditingMember(false);
  //     setEditingTeamMember(false);
  //    }

  return (
    <>

      <div className='col1'>

        <div
          className='row'
          style={{
            fontWeight: '500',
            color: 'white',
            padding: '5px',
            backgroundColor: 'blue',
          }}
        >
          Our Offer
        </div>
        <div className='row roww '>
          <div>
            <button style={{ width: '350px' }} onClick={handleAdd}>
              Add Offer
            </button>
          </div><br /><br />
          {editingMember && (
            <div className='blurBackground'>

              <div className="blurForml">

                <form onSubmit={handleSubmitForm}>
                  <label>
                    title:
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <br />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      value={formData.des}
                      onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                    />
                  </label>
                  <label>
                    Offer:
                    <input
                      type="file"
                      onChange={(e) => setFormData({ ...formData, team: e.target.files[0] })}
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
                    title:
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                    <br />
                  </label>
                  <label>
                    des:
                    <input
                      type="text"
                      value={formData.des}
                      onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                    />
                  </label>
                  <label>
                    team:
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
          <table className='table '>
            <thead>
              <tr className='tr'>
                {/* <th>SR</th> */}
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => (
                <tr className='tr' key={item.id}>
                  {/* <td>{item.sr}</td> */}
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={`http://localhost:4000/offer/${item.logo}`}
                      alt={item.title}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td>{item.des}</td>
                  <td>
                    <button onClick={() => handleEdit(item._id)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default AboutAdmin;
