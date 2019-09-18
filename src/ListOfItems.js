import React from 'react';

class ListOfItems extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.addToCart(event.target.parentNode.id);
  }

  render() {
      const listItems = this.props.items;
      const list = listItems.map((item, index) => {
        return (
            <li id={item.id} key={index}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={this.handleClick}>Add</button>
            </li>
        );
      });

      return(
        <section className="list">
          <h2>List of items on sale</h2>
          <ul>
            {list}
          </ul>
      </section>
    );
  }
}

export default ListOfItems;
