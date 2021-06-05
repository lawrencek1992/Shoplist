import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ showSignupForm, handleHideSignupForm, handleShowAccountSuccess, user, setUser }) => {
    const [validated, setValidated] = useState(false);

    const handleSignUp = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
        }
        if (user.name && user.email && user.password && user.confirmPassword) {
            if (user.password !== user.confirmPassword) {
                console.log("Passwords do not match!");
                // Show tooltip that passwords don't match
            } else {
                console.log("Passwords match!");
                // All of the functions to close the AccountSignup modal, clear the form, save user in Firebase, and open the AccountSuccess modal go here
                    // clearForm();
                    // handleHideSignupForm();
                    // handleShowAccountSuccess();
                    // firebase functions
            }
        }   
        }
        // STEP 2:
            // Check to see if the password and confirmPassword strings (stored in state) match
            // Show tool tip if they don't
        // Createuserwithemailandpassword

    const clearForm = () => setUser({});

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
                    <Form 
                        noValidate 
                        validated={validated}
                        onSubmit={handleSignUp}
                    >
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>
                                Name:
                            </Form.Label>
                            <Form.Control
                                required
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
                                placeholder="e.g. Maria"
                            />
                            <Form.Control.Feedback type="invalid">
                                Name required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>
                                Email Address:
                            </Form.Label>
                            <Form.Control 
                                required
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
                                placeholder="example@gmail.com"
                            />
                            <Form.Control.Feedback type="invalid">
                                Email required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>
                                Create Password:
                            </Form.Label>
                            <Form.Control 
                                required
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
                            <Form.Control.Feedback type="invalid">
                                Password required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>
                                Confirm Password:
                            </Form.Label>
                            <Form.Control 
                                required
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
                            <Form.Control.Feedback type="invalid">
                                Please confirm password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                    </Form>
                </Modal.Body>
                <Modal.Footer id="signup-modal">
                    <Button
                        className="btn btn-success"
                        type="submit"
                        onClick={(event) => {
                            handleSignUp(event);
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
        </>
    )
}

export default SignupForm;