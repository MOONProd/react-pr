import React from 'react';

function StateC(props) {

    return (
        <div>
            <button onClick={props.onUp}>Up</button>
            <button onClick={props.onDown}>Down</button>
        </div>
    );
}

export default StateC;