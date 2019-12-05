import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import Button from 'react-bootstrap/Button';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom'
 
class Navbar extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<IoIosArrowDown className="mobile-menu-button" />}
        menuCloseButton={<IoIosArrowUp className="mobile-menu-button" />}
        changeMenuOn="701px"
        largeMenuClassName="large-menu list-group list-group-horizontal"
        smallMenuClassName="small-menu"
        menu={
            <ul className="menu-list my-0 px-0">
            <li className="px-lg-5"><Link to="/"><Button variant="link">Home</Button></Link></li>
            <li className="px-lg-5"><Link to="/who-am-i"><Button variant="link">Who am I?</Button></Link></li>
            <li className="px-lg-5"><Link to="/interesting-things"><Button variant="link">Interesting things</Button></Link></li>
            <li className="px-lg-5"><Link to="/theatre"><Button variant="link">Theatre</Button></Link></li>
            <li className="px-lg-5"><Link to="/what-i-write"><Button variant="link">What I write</Button></Link></li>
            </ul>
        }
      />
    );
  }
}

export default Navbar
