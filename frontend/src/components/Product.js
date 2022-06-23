import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="height100">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product.slug}`}>
          <Card.Title className="no-wrap">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button className="mt-auto">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
