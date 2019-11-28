import React, { Component } from 'react';
import logo from '../images/logo.png';
import Dropdown from 'react-bootstrap/Dropdown'

const Heading = props => {
    return (
        <div className="container-fluid header-bg">
            <div className="row-12 no-gutters">
                <img src={logo} className="w-75" alt="Sketches, Scratches and Scattered Thoughts"></img>
                <div className="col-3"></div>
                <div className="col-auto" id="Navigation">
                    <nav className="nav navbar-expand">
                        <ul className="navbar-nav">
                            <li className="nav-item active px-5"><a href="/">Home</a></li>
                            <li className="nav-item active px-5"><a href="/">Who am I?</a></li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Interesting things
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Art and Artists</a>
                                    <a class="dropdown-item" href="#">Science and Time Travel</a>
                                    <a class="dropdown-item" href="#">Animals and Nature</a>
                                </div>
                            </li>
                            <li class="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </li>
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