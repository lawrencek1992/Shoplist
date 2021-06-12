import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../firebase.js';
import PasswordReset from './PasswordReset';
import ResetSuccess from './ResetSuccess';

const Login = ({ user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
    const [showPasswordReset, setShowPasswordReset] = useState(false);
    const [showResetSuccess, setShowResetSuccess] = useState(false);

    const history = useHistory();

    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const onLogin = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
              setUser({
                  email: email,
                  uid: firebase.auth().currentUser.uid,
              });
              console.log(user);
              history.push("/");
          })
          .catch((error) => {
            if (error.code === "auth/wrong-password") {
                setErrorMessage("Invalid password");
                setShowPasswordTooltip(true);
                setTimeout(() => {
                    setShowPasswordTooltip(false);
                }, 3000);
            } else if (error.code === "auth/user-not-found") {
                setErrorMessage("Email address not found");
                setShowEmailTooltip(true);
                setTimeout(() => {
                    setShowEmailTooltip(false);
                }, 3000);
            }
        })
      };

    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
        }
        if (email && password) {
            onLogin(user.email, user.password);
        }
    };

    return (
        <Container className="Login" fluid>
            <Container>
                <Form 
                    id="login-form"
                    noValidate 
                    validated={validated}
                    onSubmit={handleLogin}>
                    <Form.Group controlId="validationCustom05">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control
                            required
                            type="email"
                            ref={emailInput}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                                Email required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Overlay 
                            target={emailInput.current}
                            show={showEmailTooltip} 
                            placement="top">
                            {(props) => (
                                <Tooltip {...props}>
                                    {errorMessage}
                                </Tooltip>
                            )}
                    </Overlay>
                    <br />
                    <Form.Group controlId="validationCustom06">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                            required
                            type="password"
                            ref={passwordInput}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                                Password required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Overlay 
                            target={passwordInput.current}
                            show={showPasswordTooltip} 
                            placement="top">
                            {(props) => (
                                <Tooltip {...props}>
                                    {errorMessage}
                                </Tooltip>
                            )}
                    </Overlay>
                    <br />
                    <Button  
                        className="btn btn-success m-1"
                        onClick={(event) => handleLogin(event)}
                    >
                        Login
                    </Button>
                    <Button 
                        className="btn btn-secondary m-1"
                        onClick={() => history.push("/")}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="btn btn-warning m-1"
                        onClick={()=> setShowPasswordReset(true)}
                    >
                        Forgot Password
                    </Button>
                </Form>
                <PasswordReset 
                    showPasswordReset={showPasswordReset}
                    setShowPasswordReset={setShowPasswordReset}
                    setShowResetSuccess={setShowResetSuccess}
                />
                <ResetSuccess 
                    showResetSuccess={showResetSuccess}
                    setShowResetSuccess={setShowResetSuccess}
                />
            </Container>
        </Container>
    );
}

export default Login;