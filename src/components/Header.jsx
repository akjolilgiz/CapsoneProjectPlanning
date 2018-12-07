import React, { Component } from 'react';

const Header = () => {
    let headerStyle = {
        fontFamily: 'fantasy',
        color: 'white', 
        textAlign: 'center'
    }
    return ( 
        <div style={headerStyle}>
        <h1>Capstone Project</h1>
        </div>
     );
}
 
export default Header;