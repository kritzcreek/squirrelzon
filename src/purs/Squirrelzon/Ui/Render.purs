module Squirrelzon.Ui.Render where

import Control.Monad.Eff
import Data.Function
import Squirrelzon.Types
import Squirrelzon.Dummy
import Squirrelzon.Ui.Types
--import DOM

foreign import data DOM :: !

foreign import renderImpl
  """
  import React from 'react'
  import Webshop from 'babel!Webshop'    
  function renderImpl(applicationState, _){
    React.render(
      React.createElement(Webshop, {
        applicationState: applicationState
      }),
      document.getElementById('container'));
  }
  """ :: forall eff. Fn2 ApplicationState UiState (Eff  (dom :: DOM | eff) Unit)

render :: forall eff. ApplicationState -> UiState -> Eff (dom :: DOM | eff) Unit
render = runFn2 renderImpl


main :: forall eff. Number -> Eff (dom :: DOM | eff) Unit
main _ = render applicationState emptyUi