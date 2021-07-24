import Header from 'components/Header/Header.component';
import CheckoutForm from 'components/Checkout/CheckoutForm.component';
import PageTitle from 'components/Title/PageTitle.component';

const Kasse = () => (
  <>
    <Header title="- Go to Checkout" />
    <PageTitle title="Your Order" />
    <CheckoutForm />
  </>
);
export default Kasse;
