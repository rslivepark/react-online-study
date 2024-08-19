import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

export default function Login({ setAuth }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate('/');
  };
  return (
    <Container className='login-page'>
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your ID'
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
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
