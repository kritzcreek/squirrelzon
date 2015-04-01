module Squirrelzon.Engine where

import Squirrelzon.Types
import Data.Array
import Data.Maybe
import qualified Data.StrMap as M

step :: Action -> ApplicationState -> ApplicationState
step (AddProduct p) as         = as { products = snoc as.products p }
step (DeleteProduct p) as      = as { products = delete p as.products }
step (AddOffering pName o) as  = as { offerings = M.insert pName o as.offerings }
step (DeleteOffering pName) as = as { offerings = M.delete pName as.offerings }

{-
price :: Product -> ApplicationState -> Price
price (Product p) appSt = 
  maybe p.productPrice (applyOffering p.productPrice) offering
  where
    offering = M.lookup p.productName appSt.offerings

    applyOffering :: Price -> Offering -> Price
    applyOffering productPrice (Absolute n) = productPrice - n
    applyOffering productPrice (Percentual n) = productPrice * (1 - (n / 100))
-}