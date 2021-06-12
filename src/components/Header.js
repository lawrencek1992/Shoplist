import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import SignupForm from './SignupForm';
import AccountSuccess from './AccountSuccess';
import firebase from '../firebase';

const Header = ({ user, setUser, onLogout }) => {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showAccountSuccess, setShowAccountSuccess] = useState(false);

    const history = useHistory();

    const handleShowSignupForm = () => {
        setShowSignupForm(true);
    }

    const handleHideSignupForm = () => {
        setShowSignupForm(false);
    }

    const handleShowAccountSuccess = () => {
        setShowAccountSuccess(true);
    }

    const handleHideAccountSuccess = () => {
        setShowAccountSuccess(false);
    }

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
            { !user.uid
                ? (
                    <>
                        <Button 
                            className="btn-danger text-right"
                            style={{ "marginRight": "10px", }}
                            onClick={handleShowSignupForm}
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
                    </>
                )
                : (
                    <Button
                    className="btn text-right"
                    variant="outline-danger"
                    style={{ "marginRight": "10px", }}
                    onClick={onLogout}
                >
                    Logout
                </Button>
                )
            }
            </Nav>
            <SignupForm 
                showSignupForm={showSignupForm}
                handleHideSignupForm={handleHideSignupForm}
                handleShowAccountSuccess={handleShowAccountSuccess}
                user={user}
                setUser={setUser}
            />
            <AccountSuccess
                showAccountSuccess={showAccountSuccess}
                handleHideAccountSuccess={handleHideAccountSuccess}
                user={user}
            />
        </Navbar>
    );
}

export default Header;