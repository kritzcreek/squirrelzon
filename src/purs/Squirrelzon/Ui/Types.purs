module Squirrelzon.Ui.Types where

import Squirrelzon.Types
import Data.Maybe

type Quantity = Number

data CartPosition = CartPosition 
  {
    product  :: Product,
    quantity :: Quantity
  }

type ShoppingCart = [CartPosition]

type UiState =
  {
    shoppingCart :: ShoppingCart,
    selectedProduct :: Maybe Product
  }

data UiAction =
  SelectProduct Product
  | DeselectProduct
  | AddToCart Product Quantity
  | RemoveFromCart Product

emptyUi = 
  {
    shoppingCart: [],
    selectedProduct: Nothing
  }