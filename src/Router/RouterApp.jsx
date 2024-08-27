import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Home from './page/Home';
// import About from './page/About';
// import Contact from './page/Contact';
// import UserList from './page/UserList';
// import UserListItem from './page/UserListItem';
import Dashboard from './page/Dashboard';

function RouterApp(props) {
    // const users = [
    //     {id:1, name:'Moon', age:25},
    //     {id:2, name:'So', age:24},
    //     {id:3, name:'Yeon', age:26},
    // ]

    return (
        <BrowserRouter>
        {/* <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav> */}

            <Routes>
                <Route path='/dash/*' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;