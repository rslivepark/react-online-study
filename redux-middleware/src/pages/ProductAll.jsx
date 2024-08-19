import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductAll() {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    dispatch(productAction.getProducts(searchQuery));
  };

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
