export default class Product {
  constructor(
    title,
    description,
    price,
    thumbnails = [],
    code,
    status = true,
    stock
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnails = thumbnails;
    this.code = code;
    this.stock = stock;
    this.status = status;
    this.id = Product.#getNextId();
  }

  static #getNextId() {
    if (!Product.nextId) {
      Product.nextId = 1;
    }
    return Product.nextId++;
  }
}
