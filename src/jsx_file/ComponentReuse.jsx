import { useState } from 'react';

function ComponentReuse(props) {
    let [count, setCount] = useState(0);

    function handleOnClickUp() {
        setCount(count+1);
    }
    function handleOnClickDown() {
        setCount(count-1);
    }

    return (
        <div>
            <h1>Step7. ComponentReuse</h1>
            <hr/>
            <h5>{count}</h5>
            <br/>
            <button onClick={handleOnClickUp}>Up</button>
            <button onClick={handleOnClickDown}>Down</button>
        </div>
    );
}

export default ComponentReuse;