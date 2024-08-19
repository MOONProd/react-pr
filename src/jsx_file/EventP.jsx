import { useState } from 'react';
import EventC from './EventC';

function EventP(props) {
    const [message, setMessage] = useState('저.. 실례가 안된다면..');

    const handleOnClick = () =>{
        setMessage('아이스크림 하나만 사주십시오')
    }

    return (
        <div>
            <h1>Step5: Event to Components</h1>
            <hr/>
            <h3>{message}</h3>
            <EventC handleEvent={handleOnClick}/>
        </div>
    );
}

export default EventP;