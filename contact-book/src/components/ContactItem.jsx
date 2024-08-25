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
    <Col xs={12} sm={6} md={3} xl={2}>
      <Row className='item-list'>
        <Row className='justify-content-center'>
          <img
            src='https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png'
            alt='userPhoto'
            className='img-fluid '
            style={{ width: '100px', height: 'auto' }}
          />
          <Row className='justify-content-center'>{item.name}</Row>
          <Row className='justify-content-center'>
            {formatPhoneNumber(item.phoneNumber)}
          </Row>
        </Row>
      </Row>
    </Col>
  );
}
