import React, { useState } from 'react';
import './statemodel.css';

const StateModal = ({ state, closeModal }) => {
  const [image, setImage] = useState(state.image);
  const [text, setText] = useState(state.text);
  const [editMode, setEditMode] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the uploaded image and set the image state
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    // Save the updated data to the stateData array or an external API
    // and close the modal
    state.image = image;
    state.text = text;
    closeModal();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <h2>{state.name}</h2>
      {image && <img src={image} alt={state.name} style={{ maxWidth: '300px', maxHeight: '300px' }} />}
      {editMode ? (
        <div>
          <input type="file" onChange={handleImageChange} />
          <textarea value={text} onChange={handleTextChange} />
        </div>
      ) : (
        <div>
          <p>{text}</p>
        </div>
      )}
      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default StateModal;
