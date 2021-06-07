import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
// import firebase from '../firebase.js';

const Login = (onLogin) => {
    const [loginCreds, setLoginCreds] = useState({});
    const [validated, setValidated] = useState(false);

    const history = useHistory();

    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            event.preventDefault();
            setValidated(true);
        }



        // Write a function to handle authentication in firebase and then save that to userContext;
        setLoginCreds({});
    }

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
                            onChange={(event) => setLoginCreds({
                                email: event.target.value,
                                password: loginCreds.password,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                                Email required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="validationCustom06">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                            required
                            type="text" 
                            onChange={(event) => setLoginCreds({
                                email: loginCreds.email,
                                password: loginCreds.password,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                                Password required
                        </Form.Control.Feedback>
                    </Form.Group>
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