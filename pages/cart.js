import Header from 'components/Header/Header.component';
import CartItemsContainer from 'components/Cart/CartPage/CartItemsContainer.component';
import PageTitle from 'components/Title/PageTitle.component';

const Cart = () => {
  return (
    <>
      <Header title="- Cart" />
      <PageTitle title="Cart" />
      <CartItemsContainer />
    </>
  );
};

export default Cart;
