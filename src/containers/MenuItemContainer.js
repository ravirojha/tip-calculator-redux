import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { selectItemTotal } from '../store/items/selectors';

import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapStateToProps = (state, ownProps) => {
  return { total: selectItemTotal(state, ownProps) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
