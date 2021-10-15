import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    return (
        <Row>
            <Col xs={{ span: 6, offset: 3 }}>
                <Card>
                    <Card.Body>
                        <h1>Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange} />
                                {submitted && !email &&
                                    <span className="alert-danger">Email is required</span>
                                }
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                                {submitted && !password &&
                                    <span className="alert-danger">Password is required</span>
                                }
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export { Login };