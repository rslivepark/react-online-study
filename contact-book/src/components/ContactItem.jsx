import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ContactItem({ item }) {
  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 11) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        7
      )}-${phoneNumber.slice(7)}`;
    }
    return phoneNumber;
  };

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
        <div>{item.name}</div>
        <div>{formatPhoneNumber(item.phoneNumber)}</div>
      </Col>
    </Row>
  );
}
