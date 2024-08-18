import { useState } from 'react';
import InputC from './InputC';

function InputP(props) {
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <h1>Step4. Data Flow</h1>
            <hr/>
            <input type="text" onChange={(e)=>{setInputText(e.target.value)}} value={inputText}/>
            <InputC deliver={inputText}/>
        </div>
    );
}

export default InputP;