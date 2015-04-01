import React from 'react'
import Webshop from 'babel!./components/Webshop'

function hello () {
  React.render(React.createElement(Webshop), document.body);
}

export default hello