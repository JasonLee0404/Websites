import React from 'react';
import './ClearButton.css';

//<Button>7</Button> anything you pass between the tags are children


export const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
);