import { Container, Row, Col } from 'react-bootstrap';
import MainMenu from '../components/MainMenu';

const Cart = () => (
  <Container>
    <Row>
      <Col>
        <MainMenu />
      </Col>
    </Row>
    <Row>
      <Col>
        <h1>Cart elements</h1>
      </Col>
    </Row>
  </Container>
);

export default Cart;