// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './app.css'
import { AuthProvider } from './contexts/AuthContext.jsx'; // <-- Impor AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider> {/* <-- Bungkus App dengan AuthProvider */}
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);