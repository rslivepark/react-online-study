import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ContactItem() {
  return (
    <Row>
      <Col lg={1}>
        <img
          src='https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png'
          alt='userPhoto'
          width={50}
        />
      </Col>
      <Col lg={11}>
        <div>Name</div>
        <div>010-1234-6789</div>
      </Col>
    </Row>
  );
}
