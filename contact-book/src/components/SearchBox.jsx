import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

export default function SearchBox() {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type='text' placeholder='검색어를 입력하세요.' />
      </Col>
      <Col lg={2}>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
}
