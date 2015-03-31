import React from 'react'
import Webshop from 'babel!./components/Webshop'

function hello () {
  React.render(React.createElement(Webshop), document.getElementById('container'));
}

export default hello