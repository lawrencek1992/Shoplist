import React from 'react';
import { useHistory } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const AccountSuccess = ({ showAccountSuccess, handleHideAccountSuccess, user }) => {

    const history = useHistory();

    return (
        <Modal
            show={showAccountSuccess}
            onHide={() => {
                handleHideAccountSuccess();
            }}
            centered
        >
            <Modal.Header id="success-modal"> 
                <Button 
                    type="close"
                    className="btn btn-close" 
                    id="btn-close" 
                    ariaLabel="Close"
                    onClick={() => { 
                        handleHideAccountSuccess();
                    }} 
                />
            </Modal.Header>
            <Modal.Body id="success-modal">
                Thank you for creating a Shoplist account, <strong>{user.name}! </strong>
                Please log in to add items to your shopping list.
            </Modal.Body>
            <Modal.Footer id="success-modal">
                    <Button
                        className="btn btn-secondary"
                        id="login-redirect"
                        onClick={() => {
                            handleHideAccountSuccess();
                            history.push('/login');
                        }}
                    >
                        Login
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AccountSuccess;