import alt from 'babel!../alt'
import Types from 'Squirrelzon.Ui.Types'

class ShoppingCartActions {
    selectProduct(product) {
      this.dispatch(Types.SelectProduct.create(product));
    }
    deselectProduct() {
      this.dispatch(Types.DeselectProduct.create());
    }
    addToCart(product, quantity) {
      this.dispatch(Types.AddToCart.create(product)(quantity));
    }
    removeFromCart(product) {
      this.dispatch(Types.RemoveFromCart.create(product));
    }
}

export default alt.createActions(ShoppingCartActions);
