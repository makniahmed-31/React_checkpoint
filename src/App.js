import React from 'react';
import './App.css';
import MyProfilePhoto from './Components/Profile/ProfilePhoto'
import FullName from './Components/Profile/FullName'
import MyAdress from './Components/Profile/Address'

function App() {
  return (
    <div className="App">
      <MyProfilePhoto />
      <FullName />
      <MyAdress />
    </div>
  );
}

export default App;
