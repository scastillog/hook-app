import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../../contexts/FormProvider';

import logo from '../../assets/logo.svg';
import './Home.css';

const Home = () => {
  const context = useContext(FormContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Hooks App</p>
        <p>bienvenido {context.state}</p>
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
