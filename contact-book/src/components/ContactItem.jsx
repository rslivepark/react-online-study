import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ContactItem({ item }) {
  console.log('item?', item);
  return (
    <Row className='item-list'>
      <Col lg={2}>
        <img
          src='https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png'
          alt='userPhoto'
          width={50}
        />
      </Col>
      <Col lg={10} className='singer-info'>
        <div>{item.artist}</div>
        <div>{item.title}</div>
      </Col>
    </Row>
  );
}
