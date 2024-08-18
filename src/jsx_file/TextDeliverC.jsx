import React from 'react';

function TextDeliverC(props) {
    return (
        <div>
            <h2>I'm Child</h2>
            <h1>{props.message}</h1>
        </div>
    );
}

export default TextDeliverC;