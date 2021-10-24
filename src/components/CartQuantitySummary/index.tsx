// npm install node-sass --save
import './styles.scss';

interface ICartQuantitySummaryProps {
  items: number;
}

const CartQuantitySummary = (props: ICartQuantitySummaryProps) => (
  <div className="cart-quantity-summary">
    <h3> {props.items} Elementos en el carrito</h3>
  </div>
);

export default CartQuantitySummary;