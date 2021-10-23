import { Col, Card } from 'react-bootstrap';
import { IProduct } from '../../interfaces/Product';

interface IProductCardProps {
  cartItems: IProduct[]
};

const CartSummary = (props: IProductCardProps) => (
  <>
    { props.cartItems.map((product: IProduct) => (
      <Col xs={1} sm={2} md={3}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {product.quantity}
          </Card.Body>
        </Card>
      </Col>
    )) }
  </>
);

export default CartSummary;