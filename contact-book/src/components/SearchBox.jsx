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
          <div className='second-title'>
            <span style={{ fontWeight: '600' }}>Favorite Artist</span>
            <Button className='addBtn btn-sm' onClick={handleShow}>
              추가
            </Button>
          </div>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className='search-area'
              type='text'
              placeholder='가수 이름을 입력하면 검색할 수 있습니다.'
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
