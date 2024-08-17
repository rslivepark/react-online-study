import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export default function ProductAll() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    const url = `https://my-json-server.typicode.com/rslivepark/hnm-react-router-practice//products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  //rslivepark/react-online-study/tree/main/shopping-app
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3} xl={3} md={6} xs={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
