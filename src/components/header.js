import React, { Component } from 'react';
import logo from '../images/logo.png';

const Heading = props => {
    return (
        <div className="container-fluid header-bg">
            <div className="row-12 no-gutters">
                <img src={logo} className="w-75" alt="Sketches, Scratches and Scattered Thoughts"></img>
                <div className="col-3"></div>
                <div className="col-auto" id="Navigation">
                    <nav className="nav navbar-expand justify-content-center">
                        <ul className="navbar-nav navlinks">
                            <li className="nav-item active px-5"><a href="/">Home</a></li>
                            <li className="nav-item active px-5"><a href="/">Who am I?</a></li>
                            <li className="nav-item active px-5"><a href="/">Interesting things</a></li>
                            <li className="nav-item active px-5"><a href="/">Theatre</a></li>
                            <li className="nav-item active px-5"><a href="/">What I write</a></li>
                        </ul>

                    </nav>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

class Header extends Component {
    render() {
        return (
            <Heading />
        )
    }
}

export default Header