import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
// import firebase from '../firebase.js';

const Login = () => {
    const history = useHistory();

    // login function

    return (
        <Container className="Login" fluid>
            <Container>
                <Form id="login-form">
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="text" />
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