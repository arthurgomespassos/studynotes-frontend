import React from 'react';
import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Login />} />
      </AllRoutes>
    </BrowserRouter>
  );
}
