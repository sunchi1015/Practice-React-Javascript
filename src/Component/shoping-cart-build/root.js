import React, { Component } from 'react';
import './styles.css';
import ShoppingCart from './component/shoppinf-cart';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'item1', price: 20, count: 0 },
      { id: 2, name: 'item2', price: 10, count: 0 },
      { id: 3, name: 'item3', price: 50, count: 0 }
    ],
    totalPrice: 0
  };

  removeHandler = (id, type) => {
    if (type === 'dec') {
      this.setState({ count: this.state.items[id].count-- });
      // this.setState(preState => {
      //   return {preState.items[id].count: preState.items[id].count-- };
      // })
      const totaPrice = this.state.items.reduce((acc, item) => {
        const price = item.count * item.price;
        return (acc = price);
      }, this.state.totalPrice);
      this.setState({ totalPrice: totaPrice });
    }
  };

  addHandler = (id, type) => {
    if (type === 'inc') {
      this.setState({ count: this.state.items[id].count++ });
      //  this.setState(preState => {
      //   return {preState.items[id].count: preState.items[id].count++ };
      // })
      const totaPrice = this.state.items.reduce((acc, item) => {
        const price = item.count * item.price;
        return (acc = price);
      }, this.state.totalPrice);
      this.setState({ totalPrice: totaPrice });
    }
  };

  render() {
    return <ShoppingCart itemRemoved={this.removeHandler} itemAdded={(id, type) => this.addHandler(id, type)} items={this.state.items} />;
  }
}

export default App;
