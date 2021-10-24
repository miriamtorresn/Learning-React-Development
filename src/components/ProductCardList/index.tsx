import { Col } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { IProduct } from '../../interfaces/Product';

interface IProductCardListProps {
  products: IProduct[];
  addToCart: (product: IProduct) => void;
}

const ProductCardList = (props: IProductCardListProps) => {
  return (
    <>
      {props.products.map((product: IProduct, index: number) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}><ProductCard product={product} addToCart={props.addToCart} /></Col>
      ))}
    </>
  );
};

export default ProductCardList;