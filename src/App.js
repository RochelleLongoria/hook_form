import React, { useState } from  'react';
import './App.css';
import UserForm from './components/UserForm';


function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <hr/>
      <UserForm/>
    </div>
  );
}

export default App;
