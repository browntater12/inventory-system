import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return (<nav class="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link class="navbar-brand" to='/'>
                {/*image*/}
                <img src="./public/logo192.png" alt="" width="40" height="30" class="d-inline-block align-middle"/>
                Title
            </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="d-flex align-items-end">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {/*Page 1*/}
                        <li class="nav-item">
                            <Link class="nav-link {% if about %}active{% endif %}" aria-current="page" to="/page1">Page 1</Link>
                        </li>
                        {/*Page 2*/}
                        <li class="nav-item">
                            <Link class="nav-link {% if portfolio %}active{% endif %}" to="/page2">Page 2</Link>
                        </li>
                        {/*Page 3*/}
                        <li class="nav-item">
                            <Link class="nav-link {% if impossible %}active{% endif %}" to="/page3">Page 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </nav>);
    }
}
export default NavBar