import React from 'react';
import './ECommerce.css';
import ListOfItems from './ListOfItems';
import ShoppingCart from './ShoppingCart';

class ECommerce extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      items: [
        {
          id: '12',
          name: 'Ball',
          price: 10,
        },
        {
          id: '27',
          name: 'Bat',
          price: 20,
        },
        {
          id: '87',
          name: 'Racket',
          price: 20,
        },
        {
          id: '627',
          name: 'Net',
          price: 30,
        },
        {
          id: '526',
          name: 'Gloves',
          price: 40,
        },
      ],
      cart: [],
    };

    this.hash = {};
  }


  getItemToAdd(items, index) {
    console.log(items);
    console.log(index);
    let obj = {}
    for(let i = 0; i < items.length; i++) {
      obj = items[i];
      if (index === obj.id) {
        if(this.hash[index]) { // is not equal to 0 or undefined
          let hashVal = this.hash[index];
          const newHash = {
            [index]: ++hashVal
          };
          
          Object.assign(this.hash, newHash);
        } else { // when it is equal to 0
          const newHash = {
            [index]: 1
          };
          Object.assign(this.hash, newHash);
        }
        
        obj.quantity = this.hash[index];
        obj.total = obj.quantity * obj.price;
        return obj;
      }
    }
    return {};
  }

  addToCart(index) {
    let newCart = [];
    const items = this.state.items;
    const item = this.getItemToAdd(items, index);
    newCart = (item.quantity === 1) ? this.state.cart.concat(item) : this.state.cart;
    this.setState({ cart: newCart, items: items });
  }

  removeItemFromCart(index) {
    let cart = this.state.cart;
    for(let i = 0; i < cart.length; i++) {
      let obj = cart[i];
      if (obj.id === index) {
        return cart.splice(i - 1, 1);
      }
    }
  }

  removeFromCart(index) {
    let newCart = this.removeItemFromCart(index);
    this.setState({ cart: newCart, items: this.state.items });
  }

  render() {
    return (
      <div className="ECommerce">
        <h1>Walmart</h1>
        <ListOfItems items={this.state.items} addToCart={this.addToCart}/>
        <ShoppingCart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
      </div>
    );
  }
}

export default ECommerce;
