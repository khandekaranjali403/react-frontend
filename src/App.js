import './App.css';
import Home from './Componets/Home page/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Componets/SideNavbar/Sidebar';
import Allroutes from './Componets/Allroutes';

function App() {
  return (
    <> 
      <BrowserRouter>
        <div className='mainAppDiv'>

          {/* {<Sidebar />} */}
          { localStorage.getItem('user') ?<Sidebar />:""}
          <Allroutes />

        </div>
      </BrowserRouter>





    </>
  );
}

export default App;
