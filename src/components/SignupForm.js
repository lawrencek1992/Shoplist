import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import firebase from '../firebase.js';

const SignupForm = ({ showSignupForm, handleHideSignupForm, handleShowAccountSuccess, user, setUser }) => {
    const [validated, setValidated] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
    const [showAlertTooltip, setShowAlertTooltip] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signUpButton = useRef(null);
    const passwordConfirmation = useRef(null);

    const database = firebase.database();

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
                setShowPasswordTooltip(true);
                setTimeout(() => {
                    setShowPasswordTooltip(false);
                }, 2000);
            }
            if (user.password === user.confirmPassword) {
                    // Create user with email and password in firebase
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then((userCredential) => {
                            // Create object in the realtime database to store the shopping list for newUser.
                            const newUser = firebase.auth().currentUser.uid;
                            database.ref('users/' + newUser).set({
                                name: user.name,
                                email: user.email,
                                items: '',
                            });
                            handleHideSignupForm();
                            handleShowAccountSuccess();
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            setErrorMessage(errorMessage);
                            setShowAlertTooltip(true);
                            setTimeout(() => {
                                setShowAlertTooltip(false);
                            }, 3000);
                        })
        }   
    }
}

    return (
        <>
            <Modal
                show={showSignupForm}
                onHide={() => {
                    handleHideSignupForm();
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
                                onChange={(event) => {
                                    setUser({
                                        name: event.target.value,
                                        email: user.email,
                                        password: user.password,
                                        confirmPassword: user.confirmPassword,
                                    });
                                    setErrorMessage(null);
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
                                type="email"
                                value={user.email}
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: event.target.value,
                                        password: user.password,
                                        confirmPassword: user.confirmPassword,
                                    });
                                    setErrorMessage(null);
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
                                ref={passwordConfirmation}
                                type="password"
                                value={user.password}
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: user.email,
                                        password: event.target.value,
                                        confirmPassword: user.confirmPassword,
                                    });
                                    setErrorMessage(null);
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
                                ref={passwordConfirmation}
                                type="password" 
                                value={user.confirmPassword}
                                onChange={(event) => {
                                    setUser({
                                        name: user.name,
                                        email: user.email,
                                        password: user.password,
                                        confirmPassword: event.target.value,
                                    });
                                    setErrorMessage(null);
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please confirm password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Overlay 
                            target={passwordConfirmation.current}
                            show={showPasswordTooltip} 
                            placement="top">
                            {(props) => (
                                <Tooltip {...props}>
                                    Passwords do not match!
                                </Tooltip>
                            )}
                        </Overlay>
                        <br />
                    </Form>
                </Modal.Body>
                <Modal.Footer id="signup-modal">
                    <Button
                        ref={signUpButton}
                        className="btn btn-success"
                        type="submit"
                        onClick={(event) => {
                            handleSignUp(event);
                        }}
                        
                    >
                        Sign Up
                    </Button>
                    <Overlay 
                        target={signUpButton.current}
                        show={showAlertTooltip} 
                        placement="top">
                        {(props) => (
                            <Tooltip {...props}>
                                {errorMessage}
                            </Tooltip>
                        )}
                    </Overlay>
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