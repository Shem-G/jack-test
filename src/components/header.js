import React, { Component } from 'react';
import logo from '../images/logo.png';
import Navbar from './navbar';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid header-bg p-0">
                <img src={logo} className="w-100 p-0" alt="Sketches, Scratches and Scattered Thoughts"></img>
                <Navbar />
                </div>
        )
    }
}

export default Header