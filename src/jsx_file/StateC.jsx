import React from 'react';

function StateC(props) {

    const handleUpClick=(event)=>{
        props.onUp(event.target.value);
    }
    const handleDownClick=(event)=>{
        props.onDown(event.target.value);
    }
    return (
        <div>
            <button onClick={handleUpClick}>Up</button>
            <button onClick={handleDownClick}>Down</button>
        </div>
    );
}

export default StateC;