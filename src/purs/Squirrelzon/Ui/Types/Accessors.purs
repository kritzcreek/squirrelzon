module Squirrelzon.Ui.Types.Accessors where

import Squirrelzon.Types (Product(..))
import Squirrelzon.Ui.Types

cartPosition :: CartPosition -> {product :: Product, quantity :: Quantity}
cartPosition (CartPosition cp) = cp

product :: CartPosition -> Product
product (CartPosition cp) = cp.product

quantity :: CartPosition -> Quantity
quantity (CartPosition cp) = cp.quantity


