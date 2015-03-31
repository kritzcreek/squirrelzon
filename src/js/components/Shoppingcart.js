import React from 'react';

var Shoppingcart = React.createClass({

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
        <tr>
          <td> Nuts </td>
          <td> 10 </td>
          <td> 1999,90€ </td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Sum</th>
            <td></td>
            <td>1999,90€</td>
          </tr>
        </tfoot>
      </table>
    );
  }

});

export default Shoppingcart