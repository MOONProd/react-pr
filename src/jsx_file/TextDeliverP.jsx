import React from 'react';
import TextDeliverC from './TextDeliverC';


function TextDeliverP(props) {
    let message = 'Hello React!'

    return (
        <div>
            <h1>Step1. Parent to Child</h1>
            <TextDeliverC message={message}/>
        </div>
    );
}

export default TextDeliverP;