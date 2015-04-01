import React from 'react'
import { mid} from 'babel!./Webshop'
import Dummy from 'Squirrelzon.Dummy'
import ShoppingCartActions from 'babel!../actions/ShoppingCartActions'
import { Just, Nothing} from 'Data.Maybe'
import Accessors from 'Squirrelzon.Types.Accessors'


var Productdetail = React.createClass({
  getInitialState: function() {
    return {
      quantity: 0
    };
  },

  handleQuantityChange(e) {
      this.setState({quantity: e.target.value});
  },
  withProduct(product) {
    let {productImage, productName, productPrice} = Accessors.product(product);
    return (
      <div>
      <div className="row">
        <div className={mid(5)}>
          <img src={productImage}
            style={{width: '100%'}} border="0" alt="Null" />
        </div>
        <div className={mid(7)}>
            <p className="teal-text">
              {productName}
            </p>
        </div>
      </div>
      <div className="row">
        <div className={mid(5)}>
          <div className="card-panel white">
            <h5 className="teal-text center-align">{productPrice + '€'}</h5>
          </div>
        </div>
        <div className={'valign-wrapper ' + mid(7)}>
          <div className={'input-field valign ' + mid(7)}>
            <input id="quantity" value={this.state.quantity || 0}
             onChange={this.handleQuantityChange} type="number" className="validate" />
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div className={mid(5)}>
            <button className="waves-effect waves-light btn-large"
             onClick={ShoppingCartActions.addToCart
                .bind(null, product, this.state.quantity)} >
              Add
            </button>
          </div>
        </div>
      </div>
      </div>
      );
  },

  withoutProduct() {
    return (
    <div className="row">
      Nothing selected
    </div>);
  },

  render() {
    if(this.props.product instanceof Just){
      return this.withProduct(Accessors.product(this.props.product));
    }
    else if (this.props.product instanceof Nothing){
      return this.withoutProduct();
    }
    else{
      return (<div> Error </div>);
    }
  }

});

export default Productdetail