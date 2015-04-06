module Squirrelzon.Types where

import Data.Tuple
import qualified Data.StrMap as M

type Percentage  = Number
type Price       = Number
type Productname = String

data Product = Product 
  {
    productName  :: Productname,
    productPrice :: Price,
    productImage :: String
  }

data Offering = 
  Absolute Number
  | Percentual Percentage

type ApplicationState =
  {
    products  :: [Product],
    offerings :: M.StrMap Offering
  }

data Action = 
  AddProduct Product
  | DeleteProduct Product
  | AddOffering Productname Offering
  | DeleteOffering Productname

emptyAs :: ApplicationState
emptyAs = { products: [], offerings: M.empty }


instance eqProduct :: Eq Product where
  (==) (Product p1) (Product p2) = p1.productName == p2.productName -- Productname is unique
  (/=) p1 p2 = not (p1 == p2)

instance showProduct :: Show Product where
  show (Product p) = p.productName ++ " Price: " ++ (show p.productPrice)

instance eqOffering :: Eq Offering where
  (==) (Absolute n1) (Absolute n2) = n1 == n2
  (==) (Percentual n1) (Percentual n2) = n1 == n2
  (==) _ _ = false
  (/=) o1 o2 = not (o1 == o2)