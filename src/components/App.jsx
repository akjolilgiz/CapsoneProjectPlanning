import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sounds  from './Sounds';
import Navbar from './Navbar';
import Header from './Header';
import Waves from './Waves';
import Birds from './Birds'; 
import Fire from './Fire'; 
import Wind from './Wind'; 
import Thunder from './Thunder'; 
import Crickets from './Crickets'

function App(){
  let background = {
    height: '100%',
    backgroundImage: 'url(http://img.villreal.com/img246/futvoeridsiekguwlrkk.jpg)'
  }
  return (
    <div>
      <Navbar />
      <Header />
      <Birds />
      <Fire />
      <Wind />
      <Crickets />
      <Thunder />
      <Sounds />
      <Waves />
    </div>
  );
}


export default App;
