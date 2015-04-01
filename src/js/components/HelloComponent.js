import React from 'react'
import { displayText } from 'Main'

var HelloComponent = React.createClass({
  render() {
    return (
      <div> {displayText} </div>
    );
  }

});

export default HelloComponent