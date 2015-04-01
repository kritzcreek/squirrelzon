import React from 'react'
import { sumShoppingCart } from 'Squirrelzon.Ui.Engine'
import A from 'Squirrelzon.Ui.Types.Accessors'
import Accessors from 'Squirrelzon.Types.Accessors'

var Shoppingcart = React.createClass({
  cartPositions(positions){
    return positions.map(function(position){
      let {product, quantity} = A.cartPosition(position);
      return (
        <tr>
          <td> {Accessors.name(product)} </td>
          <td> {quantity} </td>
          <td> {Accessors.price(product)} </td>
        </tr>);
    });
  },

  render() {
    let tableClasses = 'bordered striped';
    return (
      <table className={tableClasses}>
        <thead>
          <th> Product </th>
          <th> Quantity </th>
          <th> Price </th>
        </thead>
        <tbody>
          {this.cartPositions(this.props.shoppingCart)}
        </tbody>
        <tfoot>
          <tr>
            <th>Sum</th>
            <td></td>
            <td>{sumShoppingCart(this.props.shoppingCart)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

});

export default Shoppingcart