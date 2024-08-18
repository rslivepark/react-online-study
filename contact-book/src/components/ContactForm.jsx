import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumer] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber },
    });
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>이름</Form.Label>
          <Form.Control
            type='text'
            placeholder='이름을 입력하세요.'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formContact'>
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type='number'
            placeholder='전화번호를 입력하세요.'
            onChange={(e) => setPhoneNumer(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          등록하기
        </Button>
      </Form>
    </div>
  );
}
