import React from 'react';
import './Navbar.css'; // Подключение стилей для компонента
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to = "/workers">
      <button className="nav-button">Облік співроітників</button>
      </Link>
      <Link to="/tickets">
      <button className="nav-button">Облік продажів квитків</button>
      </Link>
      <Link to="/cafe">
      <button className="nav-button">Облік продажів Кафе</button>
      </Link>
<Link to="/grafic">
      <button className="nav-button">Графік сансів</button></Link>
      {/* <button className="nav-button">Планування залу</button> */}
    </div>
  );
};

export default Navbar;
