import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export const items = [
  {
    id: "a1",
    title: "Colors",
    description: "Collection 1",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: [
      {
        id: "1",
        title: "Not so good collection",
        rating: "2",
        author: "Samantha",
        date: "2023-03-01",
      },
      {
        id: "2",
        title: "Not so good collection",
        rating: "1",
        author: "Sam",
        date: "2023-03-05",
      },
      {
        id: "3",
        title: " good collection",
        rating: "4",
        author: "Samuel",
        date: "2023-03-20",
      },
    ],
  },
  {
    id: "a2",
    title: "Black and white Colors",
    description: "Collection 2",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: [
      {
        id: "1",
        title: "Not so good collection",
        rating: "2",
        author: "Samantha",
        date: "2023-03-01",
      },
      {
        id: "2",
        title: "Not so good collection",
        rating: "1",
        author: "Sam",
        date: "2023-03-05",
      },
      {
        id: "3",
        title: " good collection",
        rating: "4",
        author: "Samuel",
        date: "2023-03-20",
      },
    ],
  },
  {
    id: "a3",
    title: "Yellow and Black Colors",
    description: "Collection 3",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: [
      {
        id: "1",
        title: "Not so good collection",
        rating: "2",
        author: "Samantha",
        date: "2023-03-01",
      },
      {
        id: "2",
        title: "Not so good collection",
        rating: "1",
        author: "Sam",
        date: "2023-03-05",
      },
      {
        id: "3",
        title: " good collection",
        rating: "4",
        author: "Samuel",
        date: "2023-03-20",
      },
    ],
  },
  {
    id: "a4",
    title: "Blue Color",
    description: "Collection 4",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: [
      {
        id: "1",
        title: "Not so good collection",
        rating: "2",
        author: "Samantha",
        date: "2023-03-01",
      },
      {
        id: "2",
        title: "Not so good collection",
        rating: "1",
        author: "Sam",
        date: "2023-03-05",
      },
      {
        id: "3",
        title: " good collection",
        rating: "4",
        author: "Samuel",
        date: "2023-03-20",
      },
    ],
  },
];

const ProductList = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row xs={1} md={2} lg={4}>
        {items.map((items, index) => (
          <Col key={index}>
            <ProductCard item={items} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
