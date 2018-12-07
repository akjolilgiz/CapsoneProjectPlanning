import React, { Component } from 'react';

const Navbar = () => {
    let navbarStyle = {
        height: '40px', 
        backgroundColor: 'black',
        textAlign: 'right', 
        margin: '10px',
        color: 'white', 
        opacity: '.7',
        fontFamily: 'Didot'    }
    return (
        <div style={navbarStyle}>
            <h4>Log In | Sign Up</h4>
        </div>
    );
}  
 
export default Navbar;
