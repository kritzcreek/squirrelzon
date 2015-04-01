import React from 'react';
import actions from 'babel!../actions/ShoppingCartActions'
import store from 'babel!../stores/ShoppingCartStore'
import {product1} from 'Squirrelzon.Dummy'
var Checkoutbutton = React.createClass({
  render() {
    return (
      <button className="btn waves-effect waves-light">
        Checkout
      </button>
    );
  }

});

export default Checkoutbutton