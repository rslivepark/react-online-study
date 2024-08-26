import React, { useState } from 'react';
import { Col, Row, Form, Button, Modal, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm';

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleKeywordChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === '') {
      dispatch({ type: 'SHOW_ALL_CONTACTS' });
    } else {
      dispatch({ type: 'SEARCH_BY_NAME', payload: { keyword: value } });
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container style={{ marginTop: '1rem' }}>
      <Form>
        <Row className='title-header'>
          <div className='second-title '>
            <span style={{ fontWeight: '600' }}>연락처를 등록하세요</span>
            {/* 기본 색상 버튼 (xs) */}
            <Button
              className='btn-sm btn-primary d-block d-sm-none text-light fw-bold basic-btn'
              onClick={handleShow}
            >
              추가
            </Button>

            {/* 작은 화면 (sm) */}
            <Button
              className='btn-sm btn-success d-none d-sm-block d-md-none text-light fw-bold'
              onClick={handleShow}
            >
              추가
            </Button>

            {/* 중간 화면 (md) */}
            <Button
              className='btn-sm btn-warning d-none d-md-block d-lg-none text-light fw-bold'
              onClick={handleShow}
            >
              추가
            </Button>

            {/* 큰 화면 (lg) */}
            <Button
              className='btn-sm btn-danger d-none d-lg-block d-xl-none text-light fw-bold'
              onClick={handleShow}
            >
              추가
            </Button>

            {/* 매우 큰 화면 (xl) */}
            <Button
              className='btn-sm btn-info d-none d-xl-block text-light fw-bold'
              onClick={handleShow}
            >
              추가
            </Button>
          </div>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className='search-area'
              type='text'
              placeholder='이름을 입력하세요.'
              style={{ fontSize: '13px' }}
              value={keyword}
              onChange={handleKeywordChange}
            />
          </Col>
        </Row>
      </Form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
