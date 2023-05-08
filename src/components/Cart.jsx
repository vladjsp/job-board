import CartItem from './CartItem';

const Cart = ({ products }) => {
  return products.map((text, index) => <CartItem text={text} />);
};
export default Cart;
