import { Home } from './Home/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Create } from './Create/Create';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create/:id" element={<Create />} />
    </Routes>
  );
};
