import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
// root.render(<App />);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
