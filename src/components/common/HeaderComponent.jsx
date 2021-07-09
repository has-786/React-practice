import React from "react";
import { Link } from "react-router-dom";

import Routes from "../../routes.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const HeaderComponent = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">           
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-items'>
                            <Link exact="true" to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="/about"  className='nav-link'>About</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="/counter"  className='nav-link'>Counter</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="/products"  className='nav-link'>Products</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="/fileupload"  className='nav-link'>Upload Images</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="/form"  className='nav-link'>Upload Form</Link>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
        <div className="container-fluid" >
        {Routes}
        </div>
    </div>
);

export default HeaderComponent;