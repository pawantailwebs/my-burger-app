import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li  className="NavigtionItem">
    <a href={props.link}>{props.children}</a>
    </li>
    
);



export default navigationItem;
