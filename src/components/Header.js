import React from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const history = useHistory();

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
                    className="btn"
                    variant="outline-success"
                    style={{ "marginRight": "10px", }}
                    onClick={() => history.push('/login')}
                >
                    Login
                </Button>
            </Nav>
        </Navbar>
    );
}

export default Header;