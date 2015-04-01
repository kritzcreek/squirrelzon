import React from 'react'
import Searchfield from 'babel!./Searchfield'
import Productlist from 'babel!./Productlist'
import Productdetail from 'babel!./Productdetail'

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
      <div className="container">
        <div className="row">
          <div className={mid(5)} style={border(1, 6)}>
            <Searchfield />
            <Productlist />
          </div>
          <div className={mid(7)} style={border(1, 6)}>
            <Productdetail />
          </div>
        </div>
      </div>
    );
  }

});

export default Webshop