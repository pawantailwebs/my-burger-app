import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux.jsx';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => {
return props.show  ? 
<Aux>
<Backdrop show={props.show}  clicked={props.closed}/>
    <div className="Modal">{props.children}</div>
    </Aux>
    : null;
}



export default modal;
