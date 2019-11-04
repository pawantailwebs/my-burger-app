import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';





const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
return  <BurgerIngredient type1={igKey}  key={igKey+i}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformIngredients.length ===0){
        transformIngredients = <p>Please start adding igredients.</p>
    }
    return ( 
        <div className = "Burger">
        <BurgerIngredient type1 = "burger-top"/>
        {transformIngredients}
        <BurgerIngredient type1 = "burger-bottom"/>
        </div>
    );
}


export default burger;
