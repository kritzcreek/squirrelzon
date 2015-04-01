import alt from 'babel!../alt'
import ShoppingCartActions from 'babel!../actions/ShoppingCartActions'
import { emptyUi } from 'Squirrelzon.Ui.Types'
import Engine from 'Squirrelzon.Ui.Engine'

class ShoppingCartStore {
  constructor() {
    this.uiState = emptyUi;

    this.bindAction(ShoppingCartActions.selectProduct, this.onSelectProduct);
    this.bindAction(ShoppingCartActions.deselectProduct, this.onDeselectProduct);
    this.bindAction(ShoppingCartActions.addToCart, this.onAddToCart);
    this.bindAction(ShoppingCartActions.removeFromCart, this.onRemoveFromCart);
  }

  onSelectProduct(action) {
    this.uiState = Engine.step(action)(this.uiState);
  }
  onDeselectProduct(action) {
    this.uiState = Engine.step(action)(this.uiState);
  }
  onAddToCart(action) {
    this.uiState = Engine.step(action)(this.uiState);
  }
  onRemoveFromCart(action) {
    this.uiState = Engine.step(action)(this.uiState);
  }
}

export default alt.createStore(ShoppingCartStore, 'ShoppingCartStore');