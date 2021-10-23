import { Container, Row, Col } from 'react-bootstrap';
import ProductCardList from './ProductCardList';
import Search from './Search';
import CartQuantitySummary from './CartQuantitySummary';
import CartSummary from './CartSummary';
import {IProduct} from '../interfaces/Product';

// Container
const App = () => {
  const siteName = 'Mi tiendita';
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
        <Col><h1>{siteName}</h1></Col>
      </Row>
      <Row>
        <Col><Search /></Col>
        <Col><CartQuantitySummary items={0}/></Col>
      </Row>
      <Row>
        <h2>Cart Summary</h2>
        <CartSummary cartItems={cartItems} />
      </Row>
      <Row>
      <h2>Products</h2>
        <ProductCardList products={products}/>
      </Row>
    </Container>
  );
};

export default App;
