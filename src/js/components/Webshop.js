import React from 'react'
import Searchfield from 'babel!./Searchfield'
import Productlist from 'babel!./Productlist'
import Productdetail from 'babel!./Productdetail'
import Shoppingcart from 'babel!./Shoppingcart'
import Checkoutbutton from 'babel!./Checkoutbutton'

import ShoppingCartStore from 'babel!../stores/ShoppingCartStore'

export function mid(num) {
  return 'col m' + num;
}

var Webshop = React.createClass({
  getInitialState() {
    return ShoppingCartStore.getState();
  },

  componentDidMount() {
    ShoppingCartStore.listen(this.onChange);
  },

  componentWillUnmount() {
    ShoppingCartStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(this.getInitialState());
  },
  render() {
    return (
      <div className="row">
        <div className={mid(5)} >
          <Searchfield />
          <Productlist products={this.props.applicationState.products}/>
        </div>
        <div className={mid(7)} >
          <Productdetail product={this.state.uiState.selectedProduct}/>
          <Shoppingcart shoppingCart={this.state.uiState.shoppingCart}/>
          <Checkoutbutton />
        </div>
      </div>
    );
  }

});

export default Webshop