import React from 'react';
import { Route, Routes as AllRoutes } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <AllRoutes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Login />} />
    </AllRoutes>
  );
}
