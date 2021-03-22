import React from 'react';

const Item = props => {
  const decItem = () => {};
  return (
    <div>
      <h3> Total Item in cart: {props.count} </h3>
      <button onClick={() => props.decItem(props.item.id, 'dec')}>-</button>
      <span>{props.item.name}</span>
      <span>{props.item.price}</span>
      <button onClick={() => props.incItem(props.item.id, 'inc')}>+</button>
    </div>
  );
};

export default Item;
