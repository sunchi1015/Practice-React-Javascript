import React from 'react';
import Item from './cart-item';

const ShoppingCart = props => {
  const itemList = props.items.map(item => {
    return (
      <Item key="" decItem={(id, type) => props.itemRemoved(id, type)} incItem={(id, type) => props.itemAdded(id, type)} item={item} />
    );
  });
  return (
    <>
      <h4>Total in Cart</h4>
      {itemList}
    </>
  );
};
export default ShoppingCart;
