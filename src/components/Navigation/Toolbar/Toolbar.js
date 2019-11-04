import React from 'react';
import Logo from '../../Logo/Logo.js';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => {
    return ( <
        header className = "Toolbar" >
        <
        div > MENU < /div> <
        Logo / >
        <
        nav > < NavigationItems / > < /nav> < /
        header >
    );
}


export default toolbar;