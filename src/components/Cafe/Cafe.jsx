import React from 'react'
import '../Workes/Workers.css'
import Navbar from '../Navbar/Navbar'
const Cafe = () => {
    return (
        <>
          <div className="container">
            <div className="header-text">Облік продажів Кафе</div>
            <div className="content">
            <div className='navbar'>
              <Navbar />
              </div>
              <div className="table-container">
                <table className="centered-table">
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Назва товару</th>
                      <th>Кількість товару</th>
                      <th>Ціна</th>
                      <th>Пакетів </th>
                      {/* <th>Посада</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>3</td>
                      <td>1100грн</td>
                      <td>8</td>
                    


                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>33</td>
                      <td>1100грн</td>
                      <td>8</td>
                  
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>3</td>
                      <td>1100грн</td>
                      <td>8</td>
                  
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>3</td>
                      <td>1100грн</td>
                      <td>8</td>
                    
                    </tr>
                    <tr>
                    <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>3</td>
                      <td>1100грн</td>
                      <td>8</td>
                 
                    </tr><tr>
                    <td>5,02,2023</td>
                      <td>Коктель</td>
                      <td>3</td>
                      <td>1100грн</td>
                      <td>8</td>
                   
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

export default Cafe
