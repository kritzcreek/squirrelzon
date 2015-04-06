import React from 'react'
import { showProduct } from 'Squirrelzon.Types'
import ShoppingCartActions from 'babel!../actions/ShoppingCartActions'
import Accessors from 'Squirrelzon.Types.Accessors'

var Productlist = React.createClass({

  products(){
    return this.props.products
      .map((product => {
        return (
          <a href="#" className="collection-item"
            onClick={ShoppingCartActions.selectProduct.bind(null, product)}
            key={Accessors.name(product)}>
            {showProduct.show(product)}
          </a>);
      }));
  },

  render() {
    return (
      <div className="collection">
        {this.products()}
      </div>
    );
  }

});

export default Productlist