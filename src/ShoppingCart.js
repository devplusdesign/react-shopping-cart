import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getTotal(cartItems) {
    // For every add or delete op, compute getTotal
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].total;
    }
    return total;
  }

  handleClick(event) {
    this.props.removeFromCart(event.target.parentNode.id);
  }

  render() {
      const cartItems = this.props.cart;
      const cart = cartItems.map((item, index) => {
        return (
            <li id={item.id} key={index}>
                <h4>{item.name}</h4>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <p>{item.total}</p>
                <button onClick={this.handleClick}>Remove</button>
            </li>
        );
      });

      return(
        <section className="shoppingCart">
            <h2>Shopping cart</h2>
            <ul>
                {cart}
            </ul>
            <p>Total: {this.getTotal(cartItems)}</p>
        </section>
    );
  }
}

export default ShoppingCart;