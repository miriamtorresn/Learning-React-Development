import React from 'react';
// npm install axios --save
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCardList from '../components/ProductCardList';
import Search from '../components/Search';
import CartQuantitySummary from '../components/CartQuantitySummary';
import CartSummary from '../components/CartSummary';
import MainMenu from '../components/MainMenu';
import PaginationNav from '../components/PaginationNav';
import { IProduct } from '../interfaces/Product';


class HomePage extends React.Component {
  state = {
    products: [],
    cartItems: []
  };

  componentDidMount() {
    axios.get('https://61101b8dc848c900171b3a84.mockapi.io/products')
      .then((res: any) => {
        const products: IProduct[] = res.data;
        products.map((product: IProduct) => {
          product.quantity = 0;
          return product;
        });

        this.setState({ products });
      });
  }

  addToCart = (product: IProduct): void => {
    product.quantity += 1;
    this.updateProduct(product);
  };

  updateProduct = (product: IProduct) => {
    const products: IProduct[] = this.state.products.map((_product: IProduct) => {
      if (product.id === _product.id) {
        _product = product;
      }
      return _product;
    });
    const cartItems = products.filter((product: IProduct) => product.quantity > 0);
    this.setState({ cartItems });
    this.setState({ products });
  };

  getCartItemsTotal = (): number => {
    return this.state.cartItems.reduce((acc: number, val: IProduct) => acc + val.quantity, 0);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col><MainMenu /></Col>
        </Row>
        <Row>
          <Col xs={12} md={7}><Search /></Col>
          <Col xs={12} md={5}><CartQuantitySummary items={this.getCartItemsTotal()}/></Col>
        </Row>
        <Row>
          <h2>Cart Summary</h2>
          <CartSummary cartItems={this.state.cartItems} />
        </Row>
        <Row>
          <h2>Products</h2>
          <ProductCardList products={this.state.products} addToCart={this.addToCart}/>
        </Row>
        <Row>
          <Col>
            <PaginationNav />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
