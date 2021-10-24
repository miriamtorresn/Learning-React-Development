import { Col } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { IProduct } from '../../interfaces/Product';

interface IProductCardListProps {
  products: IProduct[]
}

const ProductCardList = (props: IProductCardListProps) => {
  return (
    <>
      {props.products.map((product: IProduct) => (
        <Col xs={12} sm={6} md={4} lg={3}><ProductCard product={product}/></Col>
      ))}
    </>
  );
};

export default ProductCardList;