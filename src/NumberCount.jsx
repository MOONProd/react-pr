import { useState } from 'react';

function NumberCount(props){
    let [number, setNumber] = useState(0);

    return(
        <div>
            <h1>Step3. NumberCount</h1>
            <hr/>
            <h3>Number : {number}</h3>
            <button onClick={()=>setNumber(number+1)}>Up</button>
            <button onClick={()=>setNumber(number-1)}>Down</button>
        </div>
    );
}

export default NumberCount;