import { carts, categories, products } from "./staticData";
import {
  addToCartCredentials,
  category,
  getCartsResponse,
  getProductCredentials,
  getProductsOptions,
  product,
  updateItemInCartCredentials,
} from "./types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getCategories(): Promise<category[]> {
    await delay(3000);
    return categories;
  },

  async getCategory(category_id: string): Promise<category> {
    await delay(3000);
    const category = categories.find((cat) => cat.id === category_id);
    if (!category) throw new Error("Category not found");
    return category;
  },

  async getProducts(options: getProductsOptions): Promise<product[]> {
    await delay(3000);
    let filteredProducts = products;
    if (options.category_id) {
      filteredProducts = products.filter(
        (p) => p.category_id === options.category_id
      );
    }
    return filteredProducts;
  },

  async getProduct({ product_id }: getProductCredentials): Promise<product> {
    await delay(3000);
    const product = products.find((prod) => prod.id === product_id);
    if (!product) throw new Error("Product not found");
    return product;
  },

  async getCarts(): Promise<getCartsResponse> {
    await delay(3000);
    return carts[0]; // Only one cart
  },

  async getCart(cart_id: string): Promise<getCartsResponse> {
    await delay(3000);
    const cart = carts.find((cart) => cart.id === cart_id);
    if (!cart) throw new Error("Cart not found");
    return cart;
  },

  async addItemToCart({
    cart_id,
    body,
  }: addToCartCredentials): Promise<getCartsResponse> {
    await delay(3000);
    const cart = carts.find((cart) => cart.id === cart_id);
    if (!cart) throw new Error("Cart not found");
    const product = products.find((prod) => prod.id === body.id);
    if (!product) throw new Error("Product not found");
    cart.line_items.push(product);
    cart.total_items += body.quantity || 1;
    return cart;
  },

  async updateItemInCart({
    cart_id,
    line_item_id,
    body,
  }: updateItemInCartCredentials): Promise<getCartsResponse> {
    await delay(3000);
    const cart = carts.find((cart) => cart.id === cart_id);
    if (!cart) throw new Error("Cart not found");
    const item = cart.line_items.find((item) => item.id === line_item_id);
    if (!item) throw new Error("Item not found");
    item.quantity = body.quantity;
    return cart;
  },

  async removeItemFromCart({
    cart_id,
    line_item_id,
  }: {
    cart_id: string;
    line_item_id: string;
  }): Promise<getCartsResponse> {
    await delay(3000);
    const cart = carts.find((cart) => cart.id === cart_id);
    if (!cart) throw new Error("Cart not found");
    cart.line_items = cart.line_items.filter(
      (item) => item.id !== line_item_id
    );
    cart.total_items = cart.line_items.length;
    return cart;
  },
};
