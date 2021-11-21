import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
import { IStore } from '../redux/initialState';
import { updateProducts, IUpdateProductsAction } from '../redux/actions/productActions';

interface IHomePageProps {
  products: IProduct[];
  updateProducts: (products: IProduct[]) => IUpdateProductsAction;
}

class HomePage extends React.Component<IHomePageProps> {
  state = {
    cartItems: []
  };

  componentDidMount() {
    const { products, updateProducts } = this.props;
    // If products don't exist in redux, I should make my api call
    // and update products in redux.

    if (products.length === 0) {
      axios.get('https://61101b8dc848c900171b3a84.mockapi.io/products')
        .then((res: any) => {
          const _products: IProduct[] = res.data
            .map((product: IProduct) => {
              product.quantity = 0;
              return product;
            });
          // update products in redux
          updateProducts(_products);
      });
    }
  }

  addToCart = (product: IProduct): void => {
    product.quantity += 1;
    this.updateProduct(product);
  };

  removeFromCart = (product: IProduct): void => {
    product.quantity -= 1;
    this.updateProduct(product);
  };

  updateProduct = (product: IProduct) => {
    // Commenting to migrate to redux.
    console.log('trying to update', product);
    // const products: IProduct[] = this.state.products.map((_product: IProduct) => {
    //   if (product.id === _product.id) {
    //     _product = product;
    //   }
    //   return _product;
    // });
    // const cartItems = products.filter((product: IProduct) => product.quantity > 0);
    // this.setState({ cartItems });
    // this.setState({ products });
  };

  getCartItemsTotal = (): number => {
    return this.state.cartItems.reduce((acc: number, val: IProduct) => acc + val.quantity, 0);
  };

  render() {
    const { products } = this.props;
    const { cartItems } = this.state;
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
          <CartSummary cartItems={cartItems} />
        </Row>
        <Row>
          <h2>Products</h2>
          <ProductCardList products={products} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
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
const mapStateToProps = (state: IStore) => ({
  products: state.productReducer.products
});

const mapDispatchToProps = (dispatch: any) => ({
  updateProducts: bindActionCreators(updateProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
