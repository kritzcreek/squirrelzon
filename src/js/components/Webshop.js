import React from 'react'
import Searchfield from 'babel!./Searchfield'
import Productlist from 'babel!./Productlist'
import Productdetail from 'babel!./Productdetail'
import Shoppingcart from 'babel!./Shoppingcart'
import Checkoutbutton from 'babel!./Checkoutbutton'


export function mid(num) {
  return 'col m' + num;
}

export function background(color) {
  return {backgroundColor: color};
}

export function border (thickness, radius) {
  return {
    border: thickness + 'px solid',
    borderRadius: radius + 'px'
  };
}

var Webshop = React.createClass({
  render() {
    return (
      <div className="row">
        <div className={mid(5)} >
          <Searchfield />
          <Productlist />
        </div>
        <div className={mid(7)} >
          <Productdetail />
          <Shoppingcart />
          <Checkoutbutton />
        </div>
      </div>
    );
  }

});

export default Webshop