import React from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to the "/" route

    navigate('/');
    window.location.reload();
  };


  return (
    <>
      <div className='sideBarContainerr'>
        <p id='dashboarddd'>Dashboard</p>
        {/* <Link to='/' style={{textDecoration:'none',color:'white'}}> <p >Home</p></Link> */}
        <Link to='/images' style={{ textDecoration: 'none', color: 'white' }}><p>Image</p> </Link>
        {/* <Link to='/birHorizons' style={{textDecoration:'none',color:'white'}}><p>Bir Horizons</p>  </Link> */}

        {/* <Link to='/UltimateTextileBrand' style={{textDecoration:'none',color:'white'}}> <p>Ultimate Textile Brand</p> </Link> */}
        {/* <Link to='/TailoringExtraordinary' style={{textDecoration:'none',color:'white'}}><p>Tailoring Extraordinary </p>  </Link> */}
        {/* <Link to='/brand' style={{textDecoration:'none',color:'white'}}><p>Brand</p>  </Link> */}
        {/* <Link to='/TechnologyOfTextile' style={{textDecoration:'none',color:'white'}}><p>Technology Of Textile</p>  </Link> */}

        <Link to='/Contact' style={{ textDecoration: 'none', color: 'white' }}><p>Contact Us</p>  </Link>

        <Link to='/comment' style={{ textDecoration: 'none', color: 'white' }}><p>Comment</p>  </Link>
        <Link to='/review' style={{ textDecoration: 'none', color: 'white' }}><p>Review</p>  </Link>
        <Link to='/Adventure' style={{ textDecoration: 'none', color: 'white' }}><p>Adventure  </p>  </Link>
        <Link to='/post' style={{ textDecoration: 'none', color: 'white' }}><p>Feed/Post </p>  </Link>
        <Link to='/Contents' style={{ textDecoration: 'none', color: 'white' }}><p>Contents</p>  </Link>
        <Link to='/Ads' style={{ textDecoration: 'none', color: 'white' }}><p>Ads</p>  </Link>

        <Link to='/aboutAdmin' style={{ textDecoration: 'none', color: 'white' }}><p>About</p>  </Link>
        {!localStorage.getItem('user') ? <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p>Login</p>  </Link> : <Link to='/' style={{ textDecoration: 'none', color: 'white' }} onClick={handleLogout}><p>Logout</p>  </Link>}
      </div>



    </>
  )
}

export default Sidebar