import React from 'react';

function ArrayC(props) {
    return (
        <div>
            <ul>
                {props.fruit.map((data)=><li>{data}</li>)}
            </ul>
        </div>
    );
}

export default ArrayC;