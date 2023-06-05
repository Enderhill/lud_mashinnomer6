import React from 'react'
import './Workers.css'
import Navbar from '../Navbar/Navbar'

const Workers = () => {
  return (
    <>
      <div className="container">
        <div className="header-text">Облік співроітників</div>
        <div className="content">
        <div className='navbar'>
          <Navbar />
          </div>
          <div className="table-container">
            <table className="centered-table">
              <thead>
                <tr>
                  <th>ПІБ</th>
                  <th>Дата:зміни</th>
                  <th>Місце</th>
                  {/* <th>Посада</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Яроменко Віктор Іванович</td> 
                   <td>02,03,2023</td>
                 <td>Головний зал</td>
                 
                </tr>
                <tr>
                  <td>Петренко Віктор Шевченко</td>
                  <td>02,03,2023</td>
                 <td>Кладова</td>
              
                </tr>
                <tr>
                 <td>Шмадо Степан Акаметов</td>
                     <td>02,04,2023</td>
                  <td>Касса:№1</td>
                 
                 
                </tr>
                 
              </tbody>
            </table>
            <div className="buttons-container">
              <button className="add-button">Додати</button>
              <button className="delete-button">Видалити</button>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Workers;