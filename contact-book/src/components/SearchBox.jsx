import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SEARCH_BY_NAME',
      payload: { keyword },
    });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type='text'
            placeholder='이름을 입력하면 검색할 수 있습니다.'
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  );
}
