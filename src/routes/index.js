import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../views/Homepage"
import Login from "../views/Login"
import Movies from '../views/Movies'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="movies-list" element={<Movies/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  </BrowserRouter>
);

export default Router;