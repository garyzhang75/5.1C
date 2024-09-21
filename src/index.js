// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles for the body, code, etc.
import './App.css';   // Specific styles for the form and post container
import NewPostPage from './NewPostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NewPostPage />
  </div>
);
