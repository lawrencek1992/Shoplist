import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import AccountSuccess from './AccountSuccess';

const SignupForm = ({ showSignupForm, handleHideSignupForm }) => {
    const [user, setUser] = useState({});
    const [showAccountSuccess, setShowAccountSuccess] = useState(false);

    const handleSignUp = () => {
        // Create a user in firebase with email and password
        // Create a folder in the realtime database for the user's email address (you'll use this later to store their shopping list). 
    }

    const clearForm = () => setUser({});

    const handleHideAccountSuccess = () => {
        setShowAccountSuccess(false);
    }

    return (
        <>
            <Modal
                show={showSignupForm}
                onHide={() => {
                    handleHideSignupForm();
                    clearForm();
                }}
                centered
            >
                <Modal.Header id="signup-modal">
                    <Modal.Title id="signup-title"> 
                        <FontAwesomeIcon 
                            icon={faShoppingBag} 
                            id="shopping-icon" 
                            style={{ "marginLeft": "10px", "marginRight": "2px",}}
                        />
                        Shoplist Free Account Signup!
                    </Modal.Title>
                    <Button 
                        type="close" 
                        className="btn btn-close" 
                        id="btn-close" 
                        ariaLabel="Close"
                        onClick={() => { 
                            handleHideSignupForm();
                            clearForm();
                        }} 
                    />
                </Modal.Header>
                <Modal.Body id="signup-modal">
                    <Form onSubmit={() => {
                            handleSignUp();
                            clearForm();
                            handleHideSignupForm();
                            setShowAccountSuccess(true);
                        }}
                    >
                        <Form.Group>
                            <Form.Label>
                                Name:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={user.name}
                                defaultValue={user.name}
                                onChange={(event) => {
                                    setUser({
                                        name: event.target.value,
                                        email: user.email,
                                        password: user.password,
                                        confirmPassword: user.confirmPassword,
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Email Address:
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                value={user.email}
                                defaultValue={user.email} 
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: event.target.value,
                                        password: user.password,
                                        confirmPassword: user.confirmPassword,
                                    })
                                }}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>
                                Create Password:
                            </Form.Label>
                            <Form.Control 
                                type="text"
                                value={user.password}
                                defaultValue={user.password}
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: user.email,
                                        password: event.target.value,
                                        confirmPassword: user.confirmPassword,
                                    })
                                }}
                            />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>
                                Confirm Password:
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                value={user.confirmPassword}
                                defaultValue={user.confirmPassword}
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: user.email,
                                        password: user.password,
                                        confirmPassword: event.target.value,

                                    })
                                }}
                            />
                        </Form.Group>
                        <br />
                    </Form>
                </Modal.Body>
                <Modal.Footer id="signup-modal">
                    <Button
                        className="btn btn-success"
                        type="submit"
                        onClick={() => {
                            handleSignUp();
                            handleHideSignupForm();
                            clearForm();
                            setShowAccountSuccess(true);
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        className="btn btn-secondary"
                        type="cancel"
                        onClick={() => {
                            setUser({});
                            handleHideSignupForm();
                        }}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <AccountSuccess 
                    showAccountSuccess={showAccountSuccess}
                    handleHideAccountSuccess={handleHideAccountSuccess}
                    user={user}
            />
        </>
    )
}

export default SignupForm;