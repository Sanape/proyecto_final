import fs from 'fs';
import { Cart } from './cart.js';

class CartManager {
  constructor(path) {
    this.path = path;
  }
  
  async  #loadCartFromFile() {
    try {
      if (fs.existsSync(this.path)) {
        this.carts = JSON.parse(await fs.promises.readFile(this.path, 'utf-8'));
      } else {
        this.cart = [];
      }
    } catch (err) {
      this.carts = [];
      throw new Error(err);
    }
  }
  

  async  #saveCartToFile() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.carts));
    } catch (err) {
      throw new Error(err);
    }
  }

  async function addCart(newCart) {
    try {
      this.loadCartFromFile();
      let newCart = new Cart(newCart.products);

      this.carts.push(newCart);

      await this.saveCartToFile();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async function getCarts(limit) {
    try {
      await this.#loadCartFromFile();

      return limit? this.carts.slice(0, limit): this.carts;
    } catch (error) {
      return error;
    }
  }

  async function getCartById(cartId) {
    try {
      await this.#loadCartFromFile();

      const CartIndex.value = getCartsIndex(cartId);

      if (!CartIndex.result) {
        return {
          ...CartIndex,
          msg: `No se pudo encontrar porqué: ${productIndex.msg}`,
        };
      }
      return {
        result: true,
        msg: `${CartIndex.msg} y se encontro`,
        value: this.products[CartIndex.value],
      };
    } catch (error) {
      throw error;
    }
  }


  
  function getCartIndex(cartId) {
    try {
      const CartIndex = this.carts.findIndex(
        (product) => +productId === product.id
      );
      if (CartIndex == -1) {
        return {
          result: false,
          msg: `El carrito con el id ${cartId} no existe en la lista.`,
          value: undefined,
        };
      }
      return {
        result: true,
        msg: `El carrito con el id ${cartId} existe en la lista`,
        value: CartIndex,
      };
    } catch (error) {
      return error;
    }

  }



  async function addProductToCartById(idCart, idProduct) {
    try {
      await this.#loadCartFromFile();

      const Cart = await getCartById(idCart);

      const foundProductIndex = Cart.products.findIndex(
        (product) => product.product === +idProduct
      );

      if (foundProductIndex === -1) {
        cart.products.push({
          product: +idProduct,
          quantity: 1,
        });
      } else {
        cart.products[foundProductIndex].quantity ++;
      }

      const foundCartIndex = this.getCartIndex(+idCart);

      this.carts[foundCartIndex] = cart;

      this.#saveCartToFile();
      return `agregado correctamente\n prodcuto con id:\t${idProduct} al carrito`;
    } catch (error) {
      throw error;
    }

  }

}


export const cartManager = new CartManager("carts.json");