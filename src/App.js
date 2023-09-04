import React from 'react'
import "./App.css"
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Nav.css"
import Homepage from "./Homepage"
import Page_1 from './Page_1.jsx';
import Page_2 from './Page_2.jsx';
import Page_3 from './Page_3.jsx';
import Page_4 from './Page_4.jsx';
import Sidebar from './Sidebar';
import SideNav from './SideNav';


const ErrorPage = () => {
  return (
    <>
      <div className='body'>
        <h1>Hello this is Error Page</h1>
      </div>
    </>
  );

}


const App = () => {
  return (
    <div>
      <Nav />
      <div className='panel'>
        <SideNav />
        <div >
          <Routes>
            <Route exact path="/" Component={Homepage} />
            <Route exact path="/page_1" Component={Page_1} />
            <Route exact path="/page_2" Component={Page_2} />
            <Route exact path="/page_3" Component={Page_3} />
            <Route exact path="/page_4" Component={Page_4} />
            <Route path="/*" element={() => <ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App
