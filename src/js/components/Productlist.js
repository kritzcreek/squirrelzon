import React from 'react'

var Productlist = React.createClass({

  render() {
    return (
      <div className="collection">
          <a href="#" className="collection-item">Alvin</a>
          <a href="#" className="collection-item active">Alvin</a>
          <a href="#" className="collection-item">Alvin</a>
          <a href="#" className="collection-item">Alvin</a>
        </div>
    );
  }

});

export default Productlist