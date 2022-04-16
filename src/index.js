import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './contexts/FormProvider';

import Home from './pages/Home/Home';
import UseState from './pages/UseState/UseState';
import UseForm from './pages/UseForm/UseForm';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-form" element={<UseForm />} />
        </Routes>
      </Router>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
