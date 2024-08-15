import { useState } from 'react';

function Form(props) {
    let [inputText, setInputText] = useState('');
    
    const handleSubmit = (e) => {
        alert("Your name is "+{inputText}+"Right?");
        e.preventDefault();
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Step8. Form Sumit Data</h1>
            <hr/>
            <input type="text" 
                   onChange={(e)=>{setInputText(e.target.value)}}
                   value={inputText}
                   placeholder='Put in the name'/>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;