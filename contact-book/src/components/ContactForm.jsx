import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    if (artist.trim() === '' || title.trim() === '') {
      alert('이름과 번호를 모두 입력해주세요.');
      return;
    }
    dispatch({
      type: 'ADD_CONTACT',
      payload: { artist, title },
    });
    setArtist('');
    setTitle('');
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className='mb-3' controlId='formArtist'>
          <Form.Label>🏷️ 이름</Form.Label>
          <Form.Control
            type='text'
            placeholder='이름을 입력하세요.'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formTitle'>
          <Form.Label>☎️ 전화번호</Form.Label>
          <Form.Control
            type='text'
            placeholder='전화번호를 입력하세요.'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          등록하기
        </Button>
      </Form>
    </div>
  );
}
