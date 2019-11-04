import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];




const buildControl = (props) => {

    return ( < div className = "BuildControl" >
        <
        p > Current Price: < strong > { props.price }
        $ < /strong></p > {
            controls.map(ctrl => ( <
                BuildControl key = { ctrl.label }
                label = { ctrl.label }
                added = {
                    () => props.ingredientAdded(ctrl.type)
                }
                removed = {
                    () => props.ingredientRemove(ctrl.type)
                }
                />
            ))
        } <
        button className = "OrderButton"
        onClick = { props.orderClicked }
        disabled = {!props.purchasable } > ORDER NOW < /button> <
        /div>
    );
}




export default buildControl;