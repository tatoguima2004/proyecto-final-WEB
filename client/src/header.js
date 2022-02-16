import React from 'react';
import './header.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import home from '../src/imagenes/home.png';
import menulogo from '../src/imagenes/menulogo.jpg';

const Header = () => {
    return(
    <div>
        <div className="contenedornav">
                <Link to="/" className="logo"><img src={home} alt="" /></Link>
                    <input type="checkbox" id="menu-button" />
                    <label for="menu-button" className="menu-logo"><img src={menulogo}/></label>
                    <nav className="navegador">
                    <ul className="show">
                <li><Link to="/contador">Contador de dolares</Link></li>
                <li><Link to="/login">Manejo de Cuenta</Link></li>
            </ul>
            </nav>
        </div>
    </div>
)
}

export default Header;