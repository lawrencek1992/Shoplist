import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ showSignupForm, handleHideSignupForm }) => {
    const [user, setUser] = useState({});

    const handleSignUp = () => {
        // create a user
    }

    const clearForm = () => setUser({})

    return (
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
                    }}
                >
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
    )
}

export default SignupForm;