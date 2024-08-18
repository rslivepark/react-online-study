import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
export default function ContactForm() {
  return (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>이름</Form.Label>
          <Form.Control type='text' placeholder='이름을 입력하세요.' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formContact'>
          <Form.Label>전화번호</Form.Label>
          <Form.Control type='number' placeholder='전화번호를 입력하세요.' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          등록하기
        </Button>
      </Form>
    </div>
  );
}
