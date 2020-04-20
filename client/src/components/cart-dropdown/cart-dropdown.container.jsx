import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CartDropdown from './cart-dropdown.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

//   const CartDropDownContainer = withRouter(connect(mapStateToProps)(CartDropdown));

const CartDropDownContainer = compose(
    withRouter,
    connect(mapStateToProps),
)(CartDropdown);

  export default CartDropDownContainer;