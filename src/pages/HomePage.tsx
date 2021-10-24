import { Container, Row, Col } from 'react-bootstrap';
import ProductCardList from '../components/ProductCardList';
import Search from '../components/Search';
import CartQuantitySummary from '../components/CartQuantitySummary';
import CartSummary from '../components/CartSummary';
import MainMenu from '../components/MainMenu';
import PaginationNav from '../components/PaginationNav';
import { IProduct } from '../interfaces/Product';

// Container
const HomePage = () => {
  const product: IProduct = {
    color: 'blue',
    currency: 'MXN',
    description: 'Producto bonito',
    id: '1',
    image: 'https://i.picsum.photos/id/1077/400/300.jpg?hmac=N3fxrHFjEpSLk3VMjVPbuaMcq1cuBi3pykH3QbVR_Bw',
    name: 'Product name',
    price: '$50',
    quantity: 1
  };

  // Reemplazar con los elementos que se agregan en el carrito
  const cartItems = [
    product,
    product
  ];

  // Reemplazar con los productos que se traen del API
  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ];

  return (
    <Container>
      <Row>
        <Col><MainMenu /></Col>
      </Row>
      <Row>
        <Col xs={12} md={7}><Search /></Col>
        <Col xs={12} md={5}><CartQuantitySummary items={0}/></Col>
      </Row>
      <Row>
        <h2>Cart Summary</h2>
        <CartSummary cartItems={cartItems} />
      </Row>
      <Row>
        <h2>Products</h2>
        <ProductCardList products={products}/>
      </Row>
      <Row>
        <Col>
          <PaginationNav />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
