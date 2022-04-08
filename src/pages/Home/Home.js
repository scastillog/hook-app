import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Hooks App</p>
        <ul>
          <li>
            <Link to="/use-state">Learn about useState</Link>
          </li>
          <li>
            <Link to="/use-form">Learn useState with a Form</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Home;
