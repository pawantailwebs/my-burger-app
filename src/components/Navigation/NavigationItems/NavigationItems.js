import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => {
    return <ul className="NavigtionItems">
    <NavigationItem link="/">Burger Builder</NavigationItem>
<NavigationItem link="/">Check out</NavigationItem>
</ul> ;
}

export default navigationItems;
