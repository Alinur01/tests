import React from 'react';
import logo from './media/logo.jpg';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="centered-block">
    <h1>ALA-TOO</h1>
    <img className='logo' src={logo} alt="Логотип" />
      <App />
    </div>
  </React.StrictMode>
);
