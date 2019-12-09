import React, { Component } from 'react';
import logo from '../images/logo.png';
import Navbar from './navbar';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid header-bg p-0 mb-3">
                <img src={logo} className="p-0 w-75" alt="Sketches, Scratches and Scattered Thoughts"></img>
                <Navbar />
                </div>
        )
    }
}

export default Header