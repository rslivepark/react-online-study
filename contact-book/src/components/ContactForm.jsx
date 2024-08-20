import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    if (name.trim() === '' || name.trim() === '') {
      alert('이름과 번호를 모두 입력해주세요.');
      return;
    }
    if (phoneNumber.length !== 11) {
      alert('전화번호는 11자리 숫자로 입력해야 합니다.');
      phoneNumberRef.current.focus();
      return;
    }
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber },
    });
    setName('');
    setPhoneNumber('');
    nameRef.current.focus();
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>🏷️ 이름</Form.Label>
          <Form.Control
            type='text'
            placeholder='이름을 입력하세요.(예: 홍길동)'
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPhoneNumber'>
          <Form.Label>☎️ 전화번호</Form.Label>
          <Form.Control
            type='text'
            placeholder="전화번호를 입력하세요.(예: 01012346789 ('-'제외))"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            ref={phoneNumberRef}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          등록하기
        </Button>
      </Form>
    </div>
  );
}
