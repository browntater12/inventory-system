/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Truck} from "./truck.svg"

class NavBar extends React.Component {
    render(){
        return (<nav class="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link class="navbar-brand" to='/'>
                {/*image*/}
                <div style= {{height:40, width:30}} alt ="truck svg" class="d-inline-block align-middle">
                    <Truck/>
                </div>
                Inventory <b>Beta</b>
            </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="d-flex align-items-end">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link {% if about %}active{% endif %}" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link {% if about %}active{% endif %}" aria-current="page" to="/inventory">Inventory</Link>
                        </li>
                        {/*Page 2*/}
                        <li class="nav-item">
                            <Link class="nav-link {% if portfolio %}active{% endif %}" to="/projects">Projects</Link>
                        </li>
                        {/*Page 3*/}
                        <li class="nav-item">
                            <Link class="nav-link {% if impossible %}active{% endif %}" to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </nav>);
    }
}
export default NavBar