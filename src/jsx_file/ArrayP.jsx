import React from 'react';
import ArrayC from './ArrayC';

function ArrayP(props) {
    let fruits = ['Apple', 'Banana', 'Cherry'];
    return (
        <div>
            <h1>Step3. List Rendering</h1>
            <hr/>
            <ArrayC fruit={fruits}/>
        </div>
    );
}

export default ArrayP;