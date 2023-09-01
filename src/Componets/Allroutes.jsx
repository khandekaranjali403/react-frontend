import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home page/Home';
import Images from './Images page/Images';
import BirHorizons from './Bir Horizons page/BirHorizons';
import UltimateTextile from './Ultimate Textile Page/UltimateTextile';
import TailoringExtra from './Tailoring Extraordinary page/Adventure';
import Brand from './Brand page/Contents';
import TecnoTextile from './Technology Of Textile page/Ads';
import ContactUs from './ContactUs/contact.jsx'
import Login from './login signup/Login.jsx'

import Comment from './comment/Comment'
import AboutAdmin from './about/AboutAdmin'
import Post from './Post/post';
import Review from './review/Review';
const Allroutes = () => {
  return (
    <>
      <Routes>

        {localStorage.getItem("user") && <Route path='/' element={<Images />} />}
        <Route path='/images' element={<Images />} />
        <Route path='/birHorizons' element={<BirHorizons />} />
        <Route path='/UltimateTextileBrand' element={<UltimateTextile />} />
        {/* <Route path='/TailoringExtraordinary' element={<TailoringExtra/>} /> */}
        {/* <Route path='/brand' element={<Brand/>} /> */}
        {/* <Route path='/TechnologyOfTextile' element={<TecnoTextile/>} /> */}
        <Route path='/Contact' element={<ContactUs />} />
        {!localStorage.getItem("user") && <Route path='/' element={<Login />} />}
        <Route path='/Adventure' element={<TailoringExtra />} />
        <Route path='/Contents' element={<Brand />} />
        <Route path='/Ads' element={<TecnoTextile />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/post' element={<Post />} />
        <Route path='/aboutAdmin' element={<AboutAdmin />} />
        <Route path='/review' element={<Review />} />

      </Routes>




    </>
  )
}

export default Allroutes