import { useState } from 'react';

function ToDoList(props) {
    let [inputText, setInputText] = useState('');
    let [lists, setLists] = useState([]);

    function handleInputOnClick() {
        setLists([...lists,inputText]);
        setInputText('');
    }
    const activeEnter = (e) => {
        if(e.key === "Enter") {
            handleInputOnClick();
        }
      }
    return (
        <div>
            <div>
                <h1>Step5: ToDoList</h1>
                <hr/>
                <input type="text" onChange={(e)=>{setInputText(e.target.value)}} onKeyDown={activeEnter} value={inputText}/>
                <button onClick={handleInputOnClick}>Add</button>
            </div>
            <div>
                <h5>List</h5>
                {lists.map((data,idx)=><li key={idx}>{data}</li>)}
            </div>
        </div>
    );
}

export default ToDoList;