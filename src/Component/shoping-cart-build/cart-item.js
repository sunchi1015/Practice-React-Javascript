import React from 'react';

const Item = props => {
  const decItem = () => {};
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => props.decItem(props.item.id, 'dec')}>-</button>
      <span>{props.item.name}</span>
      <span>{props.item.price}</span>
      <button onClick={() => props.incItem(props.item.id, 'inc')}>+</button>
    </div>
  );
};

export default Item;
