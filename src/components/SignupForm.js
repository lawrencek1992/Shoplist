import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ showSignupForm, handleHideSignupForm, handleShowAccountSuccess, user, setUser }) => {
    const [validated, setValidated] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
    const target = useRef(null);

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
                // All of the functions to close the AccountSignup modal, clear the form, save user in Firebase, and open the AccountSuccess modal go here
                    handleHideSignupForm();
                    handleShowAccountSuccess();
                    // firebase functions
                        // Createuserwithemailandpassword
            }
        }   
    };

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
                                type="email"
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
                                ref={target}
                                type="password"
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
                                ref={target}
                                type="password" 
                                value={user.confirmPassword}
                                defaultValue={user.confirmPassword}
                                onChange={(event) => {
                                    event.preventDefault();
                                    setUser({
                                        name: user.name,
                                        email: user.email,
                                        password: user.password,
                                        confirmPassword: event.target.value,
                                    });
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please confirm password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Overlay 
                        target={target.current}
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