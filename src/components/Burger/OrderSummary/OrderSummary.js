import React from 'react';
import Aux from '../../../hoc/Aux.jsx';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
        return ( < li key = { igKey } > < span > { igKey } < /span>: {props.ingredients[igKey]}</li > );
    });
    return ( <
        Aux >
        <
        h3 > Your order < /h3> <
        p > A delicious food with following ingredients: < /p> <
        ul > { ingredientsSummary } <
        /ul> <
        button onClick = { props.orderCancel } > CANCEL < /button> <
        button onClick = { props.orderContinue } > CONTINUE < /button> < /
        Aux >
    );

}

export default orderSummary;