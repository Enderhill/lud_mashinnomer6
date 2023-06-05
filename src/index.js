import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Workers from './components/Workes/Workers';
import Tickets from './components/Tickets/Tickets';
import Cafe from './components/Cafe/Cafe';
import Grafic from './components/Grafic/Grafic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/*' element={<App/>}/>
      <Route path='/workers' element={<Workers/>}/>
      <Route path='/tickets' element={<Tickets/>}/>
      <Route path='/cafe' element={<Cafe/>}/>
      <Route path='/grafic' element={<Grafic/>}/>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
