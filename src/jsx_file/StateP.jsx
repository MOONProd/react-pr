import { useState } from 'react';
import StateC from './StateC';


function StateP(props) {
    let [number, setNumber] = useState(0);

    function handleUpNum() {
        setNumber(prevnum => prevnum+1);
    }

    function handleDownNum() {
        setNumber(prevnum => prevnum-1);
    }

    return (
        <div>
            <h1>Step2. State Manage</h1>
            <hr/>
            <h5>{number}</h5>
            <StateC onUp={handleUpNum} onDown={handleDownNum}/>
        </div>
    );
}

export default StateP;