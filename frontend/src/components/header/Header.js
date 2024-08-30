import { Link } from "react-router-dom";

import './Header.css';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a to="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a to="/volunteer" class="nav-link">Order a Drink</a>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item right">
                    <a to="/opportunity " class="nav-link">Queue</a>
                </li>
            </ul>

        </nav>

    );

}
/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>



*/


export default Header;