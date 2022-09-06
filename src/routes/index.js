import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../views/Homepage"
import Login from "../views/Login"
import Movies from '../views/Movies'
import ROUTES from 'constants/routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.Home} element={<Homepage/>}/>
      <Route path={ROUTES.Login} element={<Login/>}/>
      <Route path={ROUTES.Movies} element={<Movies/>}/>
      <Route path={ROUTES.Default} element={<Navigate to={ROUTES.Home} />}/>
    </Routes>
  </BrowserRouter>
);

export default Router;