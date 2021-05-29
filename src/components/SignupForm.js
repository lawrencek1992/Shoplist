import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SignupForm = ({ showSignupForm, handleHideSignupForm }) => {
    return (
        <Modal
            show={showSignupForm}
            onHide={() => {
                // function to clear the form
                handleHideSignupForm();
            }}
            centered
        >
            <Modal.Header id="modal">
                <Modal.Title>
                    Sign up for a Shoplist account!
                </Modal.Title>
                <Button 
                    type="close" 
                    className="btn btn-close" id="btn-close" 
                    ariaLabel="Close" 
                    onClick={() => { 
                        // function to clear the form 
                        handleHideSignupForm();
                    }} 
                />
            </Modal.Header>
            <Modal.Body id="modal">
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Email Address:
                        </Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Create Password:
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Confirm Password:
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <br />
                </Form>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button
                    className="btn"
                    variant="outline-danger"
                    type="submit"
                    onClick={() => {
                        // function to clear the form
                        // function to create new user with Firebase
                        handleHideSignupForm();
                    }}
                >
                    Sign Up
                </Button>
                <Button
                    className="btn"
                    variant="outline-secondary"
                    type="cancel"
                    onClick={() => {
                        // function to clear the form
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