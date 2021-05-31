import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const AccountSuccess = () => {
    return (
        <Modal>
            <Modal.Header>
                <Button 
                    type="close"
                    className="btn btn-close" 
                    id="btn-close" 
                    ariaLabel="Close"
                    onClick={() => { 
                        // function to clear the form 
                        handleHideSignupForm();
                    }} 
                />
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default AccountSuccess;