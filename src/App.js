import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App =(props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path="/profile" element={<Profile />}/> 
          <Route path="/dialogs/*" element={<DialogsContainer />}/>
          <Route path="/users" element={<UsersContainer />} />
        </Routes>  
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
