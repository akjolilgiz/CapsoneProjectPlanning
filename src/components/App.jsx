import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sounds  from './Sounds';
import Navbar from './Navbar';
import Header from './Header';


function App(){
  let background = {
    height: '100%',
    backgroundImage: 'url(http://img.villreal.com/img246/futvoeridsiekguwlrkk.jpg)'
  }
  return (
    <div style={background}>
      <Navbar />
      <Header />
       <Sounds />
    </div>
  );
}


export default App;
