import { useState } from 'react';

function UserInput(props) {
    let [userInfo, setUserInfo] = useState('');


    return (
        <div>
            <h1>Step 2. UserInput</h1>
            <hr/>
            <input type="text" onChange={(e)=>{setUserInfo(e.target.value)}}  value={userInfo}/>
            <h5>{userInfo}</h5>
        </div>
    );
}

export default UserInput;