import React from 'react'

var Searchfield = React.createClass({
  render() {
    return (
      <div className="input-field">
        <input id="search_term" type="text" />
        <label htmlFor="search_term">Search Term</label>
      </div>
    );
  }

});

export default Searchfield