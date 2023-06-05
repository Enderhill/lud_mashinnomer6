import React from 'react'
import '../Workes/Workers.css'
import Navbar from '../Navbar/Navbar'
const Grafic = () => {
    return (
        <>
          <div className="container">
            <div className="header-text">Облік продажів квітків</div>
            <div className="content">
            <div className='navbar'>
              <Navbar />
              </div>
              <div className="table-container">
                <table className="centered-table">
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Назва фільму</th>
                      <th>Час</th>
                      <th>Кількість зайнятих місць</th>
                      <th>Кількість вільних місць</th>
                      <th>№Залу </th>
                      {/* <th>Посада</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>


                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>
                    </tr><tr>
                    <td>5,02,2023</td>
                      <td>Фильм</td>
                      <td>3:00</td>
                      <td>11</td>
                      <td>8</td>
                      <td>№3</td>
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

export default Grafic
