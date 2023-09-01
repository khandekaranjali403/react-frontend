import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import "./Carousel.css"; // Add any custom CSS if needed
import axios from "axios";
import showNotification from "../../../helpers/show_notification";

const reviews = [
  {
    image: process.env.PUBLIC_URL + "/static/media/Rectangle 168.22f30ff43c80a06bdf75.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/static/media/Rectangle 168.22f30ff43c80a06bdf75.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/static/media/Rectangle 167.d33db2488e4d14209bb2.png",
  },
  // Add more reviews here with image URLs
];


const SimpleCarousel = () => {
  useEffect(() => {
    loadslider();
  }, [])
  const [images, setImages] = useState();
  console.log(images);
  const loadslider = async () => {

    const { data } = await axios.post(`http://localhost:4000/slider/getAll`,
    )
    console.log(data.status, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setImages(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  const [selectedFile, setSelectedFile] = useState(null);

  // const addImage = () => {
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const newImage = {
  //         image: reader.result,
  //       };
  //       setImages([...images, newImage]);
  //     };
  //     reader.readAsDataURL(selectedFile);
  //     setSelectedFile(null);
  //   }
  // };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('slider', selectedFile);



    try {
      const response = await axios.post(`http://localhost:4000/slider/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.status);
      if (response.data.status === true) {
        showNotification(response.data.message, "Success");
        loadslider();
      } else {
        showNotification(response.data.message, "Error");

      }
      setSelectedFile("");
    } catch (error) {
      console.error(error);
    }


  };
  const removeImage = async (id) => {
    const { data } = await axios.post(`http://localhost:4000/slider/delete`, { id: id },
    )
    console.log(data.success, "jk");
    if (data.status === true) {
      showNotification("deleted successfully", "Success")
      loadslider();
    }
    else {
      showNotification(data.message, "Error")

    };

  }

  return (
    <div className="">
      <div className="">
        <div className="">
          <Carousel interval={2000} controls={false} ride="carousel">
            {images && images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="imgs">
                  <img
                    src={`http://localhost:4000/slider/${image.image_url}`}
                    alt={`Review ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <br />
                  <br />
                  <br />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="btn">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"

          />
          <button onClick={(e) => handleSubmit(e)}>Add Image</button>
        </div>
        <div className="btn">
          {images && images.map((item, index) => (
            <button key={item._id} onClick={() => removeImage(item._id)}>
              Remove Image {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
