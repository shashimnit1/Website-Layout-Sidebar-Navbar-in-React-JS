import React from 'react'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom';
import "./Nav.css"
import Homepage from "./Homepage"
import Page_1 from './Page_1.jsx';
import Page_2 from './Page_2.jsx';
import Page_3 from './Page_3.jsx';
import Page_4 from './Page_4.jsx';


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
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/page_1" element={<Page_1 />} />
        <Route exact path="/page_2" element={<Page_2 />} />
        <Route exact path="/page_3" element={<Page_3 />} />
        <Route exact path="/page_4" element={<Page_4 />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App
