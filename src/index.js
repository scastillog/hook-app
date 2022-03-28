import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import UseState from './pages/UseState/UseState';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
