
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import addItem from '../../redux/cart/cart.reducer'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (

  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  addItem: () => dispatch(addItem())


});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);