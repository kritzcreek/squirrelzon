import React from 'react'
import HelloComponent from 'babel!./components/HelloComponent'

function hello () {
  React.render(React.createElement(HelloComponent), document.body);
}

export default hello