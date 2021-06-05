import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
// import UserContext from '../context/UserContext';
// import firebase from '../firebase.js';

const Login = (onLogin) => {
    const [loginCreds, setLoginCreds] = useState({});

    const history = useHistory();

    const handleLogin = () => {
        // Write a function to handle authentication in firebase and then save that to userContext;
        setLoginCreds({});
    }

    return (
        <Container className="Login" fluid>
            <Container>
                <Form id="login-form">
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control 
                            type="email" 
                            onChange={(event) => setLoginCreds({
                                email: event.target.value,
                                password: loginCreds.password,
                            })}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={(event) => setLoginCreds({
                                email: loginCreds.email,
                                password: loginCreds.password,
                            })}
                        />
                    </Form.Group>
                    <br />
                    <Button id="login-button" className="btn btn-success">
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