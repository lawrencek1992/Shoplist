import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../firebase.js';

const Login = ({ user, setUser }) => {
    const [validated, setValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

    const history = useHistory();

    const email = useRef(null);
    const password = useRef(null);

    const onLogin = (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
              setUser({
                email: response.user["email"],
                isAuthenticated: true,
    
                // ?????
                // set userID from the uid in firebase (or something?)
              });
              console.log(user.email + " has been logged in successfully!");
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
        if (user.email && user.password) {
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
                            ref={email}
                            onChange={(event) => setUser({
                                name: user.name,
                                email: event.target.value,
                                password: user.password,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                                Email required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Overlay 
                            target={email.current}
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
                            ref={password}
                            onChange={(event) => setUser({
                                name: user.name,
                                email: user.email,
                                password: event.target.value,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                                Password required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Overlay 
                            target={password.current}
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
                        id="login-button" 
                        className="btn btn-success"
                        onClick={(event) => handleLogin(event)}
                    >
                        Login
                    </Button>
                    <Button 
                        className="btn btn-secondary"
                        onClick={() => history.push("/")}
                    >
                        Cancel
                    </Button>
                </Form>
            </Container>
        </Container>
    );
}

export default Login;