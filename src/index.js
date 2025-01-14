import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app';
import { BrowserRouter, Route, Routes } from 'react-router';
import Auth from './pages/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/auth" element={<Auth />} />
  </Routes>
</BrowserRouter>
);