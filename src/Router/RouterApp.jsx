import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';

function RouterApp(props) {
    return (
        <BrowserRouter>
        <nav>
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
        </nav>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;