import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../firebase';

const PasswordReset = ({ showPasswordReset, setShowPasswordReset }) => {
    const [email, setEmail] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showResetSuccess, setShowResetSuccess] = useState(false);
    
    const emailInput = useRef(null);
    
    const handleClose = () => {
        setShowPasswordReset(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = firebase.auth();
        // Firebase function to sent password reset email:
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setShowPasswordReset(false);
                setShowResetSuccess(true);
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    let errorMessage = "Email address not found!";
                    setErrorMsg(errorMessage);
                    setShowTooltip(true);
                    setTimeout(() => {
                        setShowTooltip(false);
                    }, 3000);
                } else if (error.code === "auth/invalid-email") {
                    let errorMessage = "Invalid email format.";
                    setErrorMsg(errorMessage);
                    setShowTooltip(true);
                    setTimeout(() => {
                        setShowTooltip(false);
                    }, 3000);
                } else {
                    console.log("Code: " + error.code);
                    console.log(error.message);
                }
            });
    }

    return (
        <Modal
            show={showPasswordReset}
            onHide={handleClose}
            centered
        >
            <Modal.Header id="modal">
                <Modal.Title>
                    Send Password Reset Email
                </Modal.Title>
                <Button 
                    type="close" 
                    className="btn btn-close" 
                    id="btn-close" 
                    ariaLabel="Close" 
                    onClick={() => handleClose()} 
                />
            </Modal.Header>
            <Modal.Body id="modal" className="pt-3 pb-4">
                <Form
                    onSubmit={handleSubmit}
                >
                    <Form.Group>
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Form.Control
                            type="text"
                            ref={emailInput}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Overlay
                            target={emailInput.current}
                            show={showTooltip}
                            placement="top"
                        >
                            {(props) => (
                                <Tooltip {...props}>
                                    {errorMsg}
                                </Tooltip>
                            )}
                        </Overlay>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button
                    className="btn btn-success"
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                    disabled={!email}
                >
                    Submit
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={() => setShowPasswordReset(false)}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PasswordReset;