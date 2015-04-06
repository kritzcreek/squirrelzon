module Squirrelzon.Dummy where

import Squirrelzon.Types
import qualified Data.StrMap as M
import Data.Tuple

product1 :: Product
product1 = Product {
  productName : "Nuts", 
  productPrice : 199.99,
  productImage : "http://www.seedguides.info/pecans/pecan-nuts.jpg"
}

product2 :: Product
product2 = Product {
  productName : "Peanuts", 
  productPrice : 139.99,
  productImage : "http://vactruth.com/wp-content/uploads/2010/07/peanuts.jpg"
}

tenDollarOffering :: Offering
tenDollarOffering = Absolute 10

tenPercentOffering :: Offering
tenPercentOffering = Percentual 10

applicationState :: ApplicationState
applicationState = 
  { 
    products  : [product1, product2],
    offerings: M.fromList 
      [(Tuple "Peanuts" tenDollarOffering), (Tuple "Nuts" tenPercentOffering)]
  }

action :: Action
action = AddProduct product1