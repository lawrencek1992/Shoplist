import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ResetSuccess = ({ showResetSuccess, setShowResetSuccess }) => {
    const history = useHistory();

    const closeModal = () => {
        setShowResetSuccess(false);
    }

    return (
        <Modal show={showResetSuccess} onHide={closeModal} centered>
            <Modal.Header id="modal">
                <Modal.Title>
                    Email sent!
                </Modal.Title>
                <Button 
                        type="close" 
                        className="btn btn-close" 
                        id="btn-close" 
                        ariaLabel="Close" 
                        onClick={() => {
                            closeModal();
                            history.push("/login");
                        }} 
                />
            </Modal.Header>
            <Modal.Body id="modal">
                <p>
                    Check for an email from Google Firebase to reset your password! If you can't find the email, refresh your inbox and check your spam folder. 
                </p>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button
                    className="btn"
                    variant="outline-success"
                    onClick={() => {
                        closeModal();
                        history.push("/login");
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ResetSuccess;