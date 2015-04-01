import React from 'react'
import { mid, border } from 'babel!./Webshop'


var Productdetail = React.createClass({
  render() {
    return (
      <div>
      <div className="row" style={border(1, 5)}>
        <div className={mid(5)}>
          <img src="http://www.clipartbest.com/cliparts/jTx/E6B/jTxE6BB8c.png"
            style={{width: '100%'}} border="0" alt="Null" />
        </div>
        <div className={mid(7)}>
            <div className="card-panel white">
            <span className="teal-text">This is a lot of information about the
              hippest product you will probably never buy. The squirrels are absolutely crazy about these special nuts!
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={mid(5)}>
          <div className="card-panel white">
            <h5 className="teal-text center-align">199,99€</h5>
          </div>
        </div>
        <div className={'valign-wrapper ' + mid(7)}>
          <div className={'input-field valign ' + mid(7)}>
            <input id="first_name" type="number" className="validate" />
            <label htmlFor="first_name">Quantity</label>
          </div>
          <div className={mid(5)}>
          <a className="waves-effect waves-light btn-large">Add</a>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

export default Productdetail