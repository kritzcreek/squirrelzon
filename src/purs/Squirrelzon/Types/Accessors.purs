module Squirrelzon.Types.Accessors where

import Squirrelzon.Types

product :: Product -> {
    productName  :: Productname,
    productPrice :: Price,
    productImage :: String
  }
product (Product p) = p

name :: Product -> Productname
name (Product p) = p.productName

price :: Product -> Price
price (Product p) = p.productPrice

image :: Product -> String
image (Product p) = p.productImage
