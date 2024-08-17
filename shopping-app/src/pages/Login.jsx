import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate('/');
  };
  return (
    <Container className='login-page'>
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>ID</Form.Label>
          <Form.Control type='text' placeholder='Enter your ID' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button className='custom-button' variant='danger' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
}
