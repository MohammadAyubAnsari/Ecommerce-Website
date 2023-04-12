import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row xs={1} md={2} lg={4}>
        {productsArr.map((item, index) => (
          <Col key={index}>
            <ProductCard
              title={item.title}
              image={item.imageUrl}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
