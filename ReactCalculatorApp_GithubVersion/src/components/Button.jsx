import React from 'react';
import './Button.css';

const isOperator = val => {
    
    //double negative : if it is a number, or any of these,
    //then we return the boolean (true of false)
    return !isNaN() || val === "." || val === "=";
}

export const Button = props => (

<div 
    className={`button-wrapper ${
    
        isOperator(props.children) ? null : "operator"
    
    }`}
        //this means that onClick do something inside
        //the curly braces {}, and we define the function directly inside
        //it as well
        //we were'nt executing it before, now we're executing it
        onClick={ () => props.handleClick(props.children) }  

>{props.children}</div>

);
