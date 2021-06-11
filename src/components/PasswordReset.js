import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PasswordReset = ({ showPasswordReset, setShowPasswordReset }) => {
    const handleClose = () => {
        setShowPasswordReset(false);
    }

    return (
        <Modal
            show={showPasswordReset}
            onhide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Send Password Reset Email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="btn"
                >
                    Submit
                </Button>
                <Button
                    className="btn"
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PasswordReset;