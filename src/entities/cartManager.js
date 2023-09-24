import fs from 'fs';
import { Cart } from './cart.js';

class CartManager {
  constructor(path) {
    this.path = path;
  }

  async #loadCartFromFile() {
    try {
      if (fs.existsSync(this.path)) {
        this.cart = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
      } else {
        this.cart = [];
      }
    } catch (err) {
      this.cart = [];
      throw new Error(err);
    }
  }

  async #saveCartToFile() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.carts));
    } catch (err) {
      throw new Error(err);
    }
  }

  async addCart(newCart) {
    try {
      this.#loadCartFromFile();
      let newCart = new Cart(newCart.products);

      this.carts.push(newCart);

      await this.#saveCartToFile();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getCarts(limit) {
    try {
      await this.#loadCartFromFile();

      return carts.slice(0, limit);
    } catch (error) {
      return error;
    }
  }

  async getCartById(id) {
    try {
      const carts = await this.getCarts();

      const foundCart = carts.find((cart) => cart.id === +id);

      if (foundCart) {
        return foundCart;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async addProductToCartById(idCart, idProduct) {
    try {
      const carts = await this.getCarts();

      let cart = { ...(await this.getCartById(idCart)) };

      const foundProductIndex = cart.products.findIndex(
        (product) => product.product === +idProduct
      );

      if (foundProductIndex === -1) {
        cart.products.push({
          product: +idProduct,
          quantity: 1,
        });
      } else {
        cart.products[foundProductIndex].quantity += 1;
      }

      const foundCartIndex = carts.findIndex((cart) => cart.id === +idCart);

      carts[foundCartIndex] = cart;

      const result = await fs.promises
        .writeFile(this.path, JSON.stringify(carts))
        .then(() => {
          return 'Product added';
        })
        .catch((err) => {
          throw new Error('Product could not be added');
        });

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const cartManager = new CartManager('carts.json');