import { useParams } from "react-router-dom";
import CartContext from "../Context/Context";
import { useContext } from "react";
import React from "react";
import { items } from "../Products/ProductList";
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";

const ProductDetails = () => {
  const params = useParams();
  const id = params.productID;
  const ctx = useContext(CartContext);
  const product = items.filter((item) => item.id === id)[0];

  const orderList = [...ctx.orderList];
  const buttonClickHandler = () => {
    const n = orderList.length;
    for (let i = 0; i <= n; i++) {
      if (i < n && orderList[i].id === id) {
        orderList[i].quantity += 1;
        break;
      } else if (i === n) {
        const obj = { ...product, quantity: 1 };
        orderList.push(obj);
      }
    }
    ctx.setOrderList(orderList);
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.imageSrc} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <ListGroup>
                <ListGroup.Item>Price: {product.price}</ListGroup.Item>
              </ListGroup>
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" onClick={buttonClickHandler}>
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">
        <h3>Product Reviews</h3>
        {product.reviews.map((review, index) => (
          <div key={index}>
            <h4>{review.author}</h4>
            <h5>{review.title}</h5>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
