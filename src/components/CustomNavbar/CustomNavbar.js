import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Berlin</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/">
                            Home
                         </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/">
                            Creative Speakers
                         </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/">
                            Tips
                         </NavItem>
                    </Nav>
                </Navbar.Collapse>




            </Navbar>

        )
    }
}



export default CustomNavbar;















