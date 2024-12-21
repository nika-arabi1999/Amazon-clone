import { categories, products } from "./staticData";
import {
  addToCartCredentials,
  category,
  cart,
  getProductCredentials,
  getProductsOptions,
  lineItems,
  product,
} from "./types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getCategories(): Promise<category[]> {
    await delay(1500);
    return categories;
  },

  async getCategory(category_id: string): Promise<category> {
    await delay(1500);
    const category = categories.find((cat) => cat.id === category_id);
    if (!category) throw new Error("Category not found");
    return category;
  },

  async getProducts(options: getProductsOptions): Promise<product[]> {
    await delay(1500);
    let filteredProducts = products;
    if (options.category_id) {
      filteredProducts = products.filter(
        (p) => p.category_id === options.category_id
      );
    }
    if (options.query && options.searchCategory !== "all") {
      filteredProducts = products.filter(
        (p) =>
          options.query &&
          p.name.toLowerCase().includes(options.query.toLowerCase()) &&
          p.category_id === options.searchCategory
      );
    } else if (options.query) {
      filteredProducts = products.filter(
        (p) =>
          options.query &&
          p.name.toLowerCase().includes(options.query.toLowerCase())
      );
    }
    return filteredProducts;
  },

  async getProduct({ product_id }: getProductCredentials): Promise<product> {
    await delay(1500);
    const product = products.find((prod) => prod.id === product_id);
    if (!product) throw new Error("Product not found");
    return product;
  },

  // cart:
  async addItemToCart({
    body,
  }: addToCartCredentials): Promise<cart> {
    await delay(1500);
    const cart = JSON.parse(localStorage.getItem("cart") || "null");
    if (!cart) throw new Error("Cart not found");
    const product = products.find((prod) => prod.id === body.id);
    if (!product) throw new Error("Product not found");
    const existing = cart.line_items.find(
      (prod: lineItems) => prod.product.id === body.id
    );
    if (existing) {
      existing.quantity = body.quantity;
      cart.total_items = cart.line_items.reduce(
        (acc: number, item: lineItems) => acc + Number(item.quantity),
        0
      );
      cart.subtotal = cart.line_items.reduce(
        (acc: number, item: lineItems) =>
          acc + Number(item.quantity) * Number(item.product.price.raw),
        0
      );
      return cart;
    }
    cart.line_items.push({ product, quantity: body.quantity });
    cart.total_items += body.quantity || 1;
    cart.subtotal = cart.line_items.reduce(
      (acc: number, item: lineItems) =>
        acc + Number(item.quantity) * Number(item.product.price.raw),
      0
    );
    return cart;
  },

  async updateItemInCart({
    body,
  }: addToCartCredentials): Promise<cart> {
    await delay(1500);
    const cart = JSON.parse(localStorage.getItem("cart") || "null");
    const existing = cart.line_items.find(
      (item: lineItems) => item.product.id === body.id
    );
    existing.quantity = body.quantity;
    cart.total_items = cart.line_items.reduce(
      (acc: number, item: lineItems) => acc + Number(item.quantity),
      0
    );
    cart.subtotal = cart.line_items.reduce(
      (acc: number, item: lineItems) =>
        acc + Number(item.quantity) * Number(item.product.price.raw),
      0
    );
    return cart;
  },

  async removeItemFromCart(line_item_id: string): Promise<cart> {
    await delay(1500);
    const cart = JSON.parse(localStorage.getItem("cart") || "null");
    if (!cart) throw new Error("Cart not found");
    cart.line_items = cart.line_items.filter(
      (item: lineItems) => item.product.id !== line_item_id
    );
    cart.total_items = cart.line_items.length;
    cart.total_items = cart.line_items.reduce(
      (acc: number, item: lineItems) => acc + Number(item.quantity),
      0
    );
    cart.subtotal = cart.line_items.reduce(
      (acc: number, item: lineItems) =>
        acc + Number(item.quantity) * Number(item.product.price.raw),
      0
    );
    return cart;
  },

  //saved
  async addItemToSaved({ body }: addToCartCredentials) {
    await delay(1500);
    const saved = JSON.parse(localStorage.getItem("saved") || "null");
    if (!saved) throw new Error("nothing saved yet!");
    const product = products.find((prod) => prod.id === body.id);
    if (!product) throw new Error("Product not found");
    const existing = saved.line_items.find(
      (prod: lineItems) => prod.product.id === body.id
    );
    if (existing) {
      alert("you have already saved this product.");
      return saved;
    }
    saved.line_items.push({ product, quantity: body.quantity });
    saved.total_items += 1;
    return saved;
  },

  async removeItemFromSaved(line_item_id: string): Promise<cart> {
    await delay(1500);
    const saved = JSON.parse(localStorage.getItem("saved") || "null");
    if (!saved) throw new Error("saved not found");
    saved.line_items = saved.line_items.filter(
      (item: lineItems) => item.product.id !== line_item_id
    );
    saved.total_items = saved.line_items.length;
    return saved;
  },
};

// saved
