module Squirrelzon.Ui.Engine where

import Data.Maybe
import Data.Array
import Data.Foldable (sum)
import Squirrelzon.Types
import Squirrelzon.Ui.Types

step :: UiAction -> UiState -> UiState
step (SelectProduct p) uiSt = uiSt {selectedProduct = Just p}
step DeselectProduct uiSt = uiSt {selectedProduct = Nothing}
step (AddToCart p q) uiSt = addToCart (CartPosition { product: p, quantity: q}) uiSt
step (RemoveFromCart p) uiSt = removeFromCart p uiSt 

addToCart :: CartPosition -> UiState -> UiState
addToCart cp uiSt = uiSt {shoppingCart = snoc uiSt.shoppingCart cp}

removeFromCart :: Product -> UiState -> UiState
removeFromCart p uiSt = uiSt {shoppingCart =  cartFilter uiSt.shoppingCart}
  where cartFilter = filter \(CartPosition cp) -> cp.product /= p

sumShoppingCart :: ShoppingCart -> Price
sumShoppingCart sc = sum (costPerPosition <$> sc)
  where costPerPosition :: CartPosition -> Price
        costPerPosition (CartPosition cp) = (getPrice cp.product) * cp.quantity

        getPrice (Product p) = p.productPrice
