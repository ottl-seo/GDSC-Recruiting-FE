import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; 
import CoreApplyPage from './pages/CoreApplyPage';
import ApplyPage from './pages/ApplyPage';
import InfoPage from './pages/InfoPage';
import MainPage from './pages/MainPage';

const App = () => {
    return(
      <>
        <Routes>
          <Route element={<MainPage/>} path="/"/>
          <Route element={<InfoPage/>} path="/apply"/>
          <Route element={<ApplyPage/>} path="/apply/general"/>
          <Route element={<CoreApplyPage/>} path="apply/core"/>
        </Routes>
      </>
    );
}

export default App;
