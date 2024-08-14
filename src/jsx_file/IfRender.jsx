import { useState } from 'react';

function IfRender(props) {
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <div>
            <h1>Step6. If Rendering</h1>
            <hr/>
            {isLoggedIn && <span>Hello,User! </span>}
            {isLoggedIn ? 
            <button onClick={onClickLogout}>Logout</button>
            :
            <button onClick={onClickLogin}>Login</button>}
            
        </div>
    );
}

export default IfRender;