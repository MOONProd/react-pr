import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div>
            <h3>DashBoard</h3>
            <nav>
                <ul>
                    <li>
                        <Link to='profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='setting'>Setting</Link>
                    </li>
                    <li>
                        <Link to='alarm'>Alarm</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='setting' element={<Setting/>}></Route>
                <Route path='alarm' element={<Alarm/>}></Route>
            </Routes>
        </div>
    );
}

function Profile()
{
    return(
        <div>
            Profile
        </div>
    );
}
function Setting()
{
    return(
        <div>
            Setting
        </div>
    );
}
function Alarm()
{
    return(
        <div>
            Alarm
        </div>
    );
}

export default Dashboard;