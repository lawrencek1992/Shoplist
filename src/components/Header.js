import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            className="justify-content-between"
            fixed="top">
            <Navbar.Brand href="/">
                <FontAwesomeIcon 
                    icon={faShoppingBag} id="shopping-icon" 
                    style={{ "marginLeft": "10px", "marginRight": "5px",}}
                />
                Shoplist
            </Navbar.Brand>
            <Nav>
                <Button 
                    className="btn-danger text-right"
                    style={{ "marginRight": "10px", }}
                >
                    Sign Up
                </Button>
                <Button 
                    variant="outline-success"
                    style={{ "marginRight": "10px", }}
                >
                    Login
                </Button>
            </Nav>
        </Navbar>
    );
}

export default Header;