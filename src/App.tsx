import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Components/Home';
import { MonthStatistics } from './pages/MonthStatistics/Components/MonthStatistics';
import { Header } from './Shared/Header/Header';
import { Popup } from './Shared/Popup/Popup';

function App() {
  return (
    <div className='global-container'>
    <div className="container">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/MonthStatistics' element={<MonthStatistics/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
