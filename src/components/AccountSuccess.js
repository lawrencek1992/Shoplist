import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const AccountSuccess = ({ showAccountSuccess, handleHideAccountSuccess, user }) => {
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
                    Thank you for creating a Shoplist Account {user.name}! Please log in to add items to your shopping list. 
            </Modal.Body>
            <Modal.Footer id="success-modal">
                    <Button
                        onClick={() => {
                            handleHideAccountSuccess();
                        }}
                    >
                        Login
                    </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AccountSuccess;