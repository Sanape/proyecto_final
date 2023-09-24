export default class Cart {
  constructor(products = []) {
    this.products = products;
    this.id = Cart.#getNextId();
  }

  static #getNextId() {
    if (!Cart.nextId) {
      Cart.nextId = 1;
    }
    return Cart.nextId++;
  }
}
