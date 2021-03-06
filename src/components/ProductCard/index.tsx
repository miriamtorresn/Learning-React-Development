import { Card, Button } from 'react-bootstrap';
import { IProduct } from '../../interfaces/Product';

interface IProductCardProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
};

const ProductCard = (props: IProductCardProps) => (
  <Card>
    <Card.Img variant="top" src={props.product.image} />
    <Card.Body>
      <Card.Title>{props.product.name}</Card.Title>
      <Card.Text>{props.product.description}</Card.Text>
      <Card.Text>{props.product.price} {props.product.currency}</Card.Text>
      <Button variant="secondary" onClick={() => props.addToCart(props.product)}>+</Button>
      {props.product.quantity}
      <Button variant="secondary" onClick={() => props.removeFromCart(props.product)}>-</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;