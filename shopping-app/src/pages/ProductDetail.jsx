import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormSelect, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    const url = `http://my-json-server.typicode.com/rslivepark/hnm-react-router-practice/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col md={6} className='product-image'>
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col md={6}>
          <p className='choice-text'>{product?.new ? 'New' : ''}</p>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <p className='choice-text'>{product?.choice ? 'Choice' : ''}</p>
          <div className='select-size'>
            <FormSelect name='' id=''>
              {product?.size?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </FormSelect>
          </div>
          <div className='add-product-button'>
            <Button className='custom-button' variant='danger'>
              추가하기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
