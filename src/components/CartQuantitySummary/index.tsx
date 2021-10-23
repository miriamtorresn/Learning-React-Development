interface ICartQuantitySummaryProps {
  items: number;
}

const CartQuantitySummary = (props: ICartQuantitySummaryProps) => (
  <h3> {props.items} Elementos en el carrito</h3>
);

export default CartQuantitySummary;