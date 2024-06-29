import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Config from "react-native-config";
import {
  addToCartCredentials,
  category,
  getAssetsResponse,
  getCartsResponse,
  getCategoriesResponse,
  getCheckoutsResponse,
  getCountriesSubdivisionsResponse,
  getProductCredentials,
  getProductVariantsResponse,
  getProductsOptions,
  getProductsResponse,
  product,
  updateItemInCartCredentials,
  variant,
} from "./types";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers) => {
      headers.set("X-Authorization", `${import.meta.env.VITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAssets: builder.query<getAssetsResponse, void>({
      query: () => ({
        url: `/assets`,
      }),
    }),
    getAsset: builder.query<any, string>({
      query: (asset_id) => ({
        url: `/assets/${asset_id}`,
      }),
    }),
    getCarts: builder.query<getCartsResponse, void>({
      query: () => ({
        url: `/carts`,
      }),
    }),
    getCart: builder.query<getCartsResponse, string>({
      query: (cart_id) => ({
        url: `/carts/${cart_id}`,
      }),
    }),
    getCategories: builder.query<getCategoriesResponse, void>({
      query: () => ({
        url: `/categories`,
      }),
    }),
    getCategory: builder.query<category, string>({
      query: (category_id) => ({
        url: `/categories/${category_id}`,
      }),
    }),
    getCheckouts: builder.query<getCheckoutsResponse, string>({
      query: (productOrCart_id) => ({
        url: `/checkouts/${productOrCart_id}`,
      }),
    }),
    getCountries: builder.query<getCheckoutsResponse, void>({
      query: () => ({
        url: `/services/locale/countries`,
      }),
    }),
    getCountriesSubdivisions: builder.query<
      getCountriesSubdivisionsResponse,
      string
    >({
      query: (country_ISO_code) => ({
        url: `/services/locale/${country_ISO_code}/subdivisions`,
      }),
    }),
    getProducts: builder.query<getProductsResponse, getProductsOptions>({
      query: (options) => ({
        url: `/products`,
        params: options,
      }),
    }),
    getProduct: builder.query<product, getProductCredentials>({
      query: ({ product_id, options }) => ({
        url: `/products/${product_id}`,
        params: options,
      }),
    }),
    getProductVariants: builder.query<getProductVariantsResponse, string>({
      query: (product_id) => ({
        url: `/products/${product_id}/variants`,
      }),
    }),
    getProductVariant: builder.query<
      variant,
      { product_id: string; variant_id: string }
    >({
      query: ({ product_id, variant_id }) => ({
        url: `/products/${product_id}/variants/${variant_id}`,
      }),
    }),
    addItemToCart: builder.mutation<getCartsResponse, addToCartCredentials>({
      query: ({ cart_id, body }) => ({
        url: `/carts/${cart_id}`,
        method: "POST",
        body: body,
      }),
    }),
    updateCart: builder.mutation<
      getCartsResponse,
      { cart_id: string; body: { discount_code: string } }
    >({
      query: ({ cart_id, body }) => ({
        url: `/carts/${cart_id}`,
        method: "PUT",
        body: body,
      }),
    }),
    updateItemInCart: builder.mutation<
      getCartsResponse,
      updateItemInCartCredentials
    >({
      query: ({ cart_id, line_item_id, body }) => ({
        url: `/carts/${cart_id}/items/${line_item_id}`,
        method: "PUT",
        body: body,
      }),
    }),
    deleteCart: builder.mutation<{}, string>({
      query: (cart_id) => ({
        url: `/carts/${cart_id}`,
        method: "DELETE",
      }),
    }),
    emptyCart: builder.mutation<getCartsResponse, string>({
      query: (cart_id) => ({
        url: `/carts/${cart_id}/items`,
        method: "DELETE",
      }),
    }),
    removeItemFromCart: builder.mutation<
      getCartsResponse,
      { cart_id: string; line_item_id: string }
    >({
      query: ({ cart_id, line_item_id }) => ({
        url: `/carts/${cart_id}/items/${line_item_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssetsQuery,
  useGetAssetQuery,
  useGetCartsQuery,
  useGetCartQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetCheckoutsQuery,
  useGetCountriesQuery,
  useGetCountriesSubdivisionsQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductVariantsQuery,
  useGetProductVariantQuery,
  useAddItemToCartMutation,
  useUpdateCartMutation,
  useUpdateItemInCartMutation,
  useDeleteCartMutation,
  useEmptyCartMutation,
  useRemoveItemFromCartMutation,
} = dashboardApi;
