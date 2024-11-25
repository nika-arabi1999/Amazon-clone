// Assets
export type assetType = {
  id: string;
  url: string;
  description: string;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: any[];
  meta: any[];
  created_at: number;
  updated_at: number;
};

export type getAssetsResponse = {
  data: assetType[];
  meta: metaType;
};

// Carts

export type getCartsResponse = {
  id: string;
  created: number;
  updated: number;
  expires: number;
  total_items: number;
  total_unique_items: number;
  subtotal: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  hosted_checkout_url: string;
  line_items: { product: Product; quantity: number }[];
  currency: {
    code: string;
    symbol: string;
  };
  discount: any[];
  meta: any;
};

export type addToCartCredentials = {
  body: { id: string; quantity?: number };
};

export type updateItemInCartCredentials = {
  cart_id: string;
  line_item_id: string;
  body: { quantity: number; variant_id?: string };
};

// Categories
export type category = {
  id: string;
  parent_id: string | null;
  slug: string;
  name: string;
  description: string;
  products: number;
  created: number;
  updated: number;
  meta?: {
    season: string;
  };
  assets: any[];
};

export type getCategoriesResponse = {
  data: category[];
  meta: metaType;
};

//Checkouts

export type getCheckoutsResponse = {
  id: string;
  cart_id: string;
  created: number;
  expires: number;
  conditionals: {
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    has_physical_delivery: boolean;
    has_digital_delivery: boolean;
    has_pay_what_you_want: boolean;
    has_available_discounts: boolean;
    collects_extra_fields: boolean;
    is_cart_free: boolean;
  };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  has: {
    physical_delivery: boolean;
    digital_delivery: boolean;
    pay_what_you_want: boolean;
    available_discounts: boolean;
  };
  is: {
    cart_free: boolean;
  };
  products: product[];
  merchant: {
    id: number;
    name: string;
    description: string;
    status: string;
    country: string;
    currency: {
      symbol: string;
      code: string;
    };
    support_email: string;
    logo_shape: any;
    intercom: boolean;
    analytics: {
      google: {
        settings: {
          tracking_id: any | string;
          linked_domains: any[];
        };
      };
    };
    has: {
      logo: boolean;
      cover: boolean;
      analytics: boolean;
      description: boolean;
    };
    images: {
      logo: string | null;
      cover: string | null;
    };
  };
  extra_fields: [];
  gateways: [
    {
      id: string;
      code: string;
      sandbox: boolean;
      config: [];
    },
    {
      id: string;
      code: string;
      sandbox: boolean;
      config: {
        publishable_key: "pk_test_51Hm1waEtPU7XlX8YyuSwjGBTKgtROP6iLIBtQB5h4EVqY0z4mmc7x6tVXI98QuvxZ4r81iPWHovoQ3G44ShLebGK00dEHvV8lS";
      };
    }
  ];
  shipping_methods: [
    {
      id: "ship_RyWOwmrX6onEa2";
      description: "Domestic";
      provider: "chec";
      price: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
      countries: ["US"];
      regions: {
        US: string[];
      };
    }
  ];
  live: {
    merchant_id: 32748;
    currency: {
      code: "USD";
      symbol: "$";
    };
    subtotal: {
      raw: 110;
      formatted: "110.00";
      formatted_with_symbol: "$110.00";
      formatted_with_code: "110.00 USD";
    };
    tax: {
      amount: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
      breakdown: [];
      included_in_price: boolean;
      zone: [];
      provider: "chec";
    };
    total: {
      raw: 110;
      formatted: "110.00";
      formatted_with_symbol: "$110.00";
      formatted_with_code: "110.00 USD";
    };
    total_with_tax: {
      raw: 110;
      formatted: "110.00";
      formatted_with_symbol: "$110.00";
      formatted_with_code: "110.00 USD";
    };
    adjustments: {
      taxable: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
      untaxable: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
      total: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
    };
    giftcard: [];
    total_due: {
      raw: 110;
      formatted: "110.00";
      formatted_with_symbol: "$110.00";
      formatted_with_code: "110.00 USD";
    };
    pay_what_you_want: {
      enabled: boolean;
      minimum: any;
      customer_set_price: any;
    };
    line_items: [
      {
        id: "item_7RyWOwmK5nEa2V";
        product_id: "prod_bWZ3l89mMOwkpE";
        name: "Oxford loafers";
        product_name: "Oxford loafers";
        media: {
          type: "image";
          source: "https://cdn.chec.io/merchants/32748/assets/AG3EUotYqG4dfDlM|loafers.jpg";
          asset_id: "ast_L1vOoZdax4lRa8";
        };
        sku: any;
        permalink: "76HgYX";
        quantity: 1;
        price: {
          raw: 110;
          formatted: "110.00";
          formatted_with_symbol: "$110.00";
          formatted_with_code: "110.00 USD";
        };
        line_total: {
          raw: 110;
          formatted: "110.00";
          formatted_with_symbol: "$110.00";
          formatted_with_code: "110.00 USD";
        };
        is_valid: boolean;
        product_meta: [];
        tax: {
          is_taxable: boolean;
          taxable_amount: any;
          amount: any;
          breakdown: any;
        };
        selected_options: [];
        variant: any;
      }
    ];
    discount: [];
    shipping: {
      price: {
        raw: 0;
        formatted: "0.00";
        formatted_with_symbol: "$0.00";
        formatted_with_code: "0.00 USD";
      };
      available_options: [
        {
          id: "ship_RyWOwmrX6onEa2";
          description: "Domestic";
          provider: "chec";
          price: {
            raw: 0;
            formatted: "0.00";
            formatted_with_symbol: "$0.00";
            formatted_with_code: "0.00 USD";
          };
          countries: string[];
          regions: {
            US: string[];
          };
        }
      ];
    };
  };
  analytics: {
    google: {
      settings: {
        tracking_id: any;
        linked_domains: [];
      };
    };
  };
  adjustments: [];
  meta: any;
};

// Countries
export type getCountriesResponse = {
  countries: Record<string, string>;
  html: string;
};

export type getCountriesSubdivisionsResponse = {
  subdivisions: Record<string, string>;
  html: string;
};

// Products

interface Price {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

interface LineTotal extends Price {}

interface Variant {
  id: string;
  sku: string;
  description: string;
  inventory: number;
  price: Price;
  is_valid: boolean;
  brand: string;
  color: string;
}

interface VariantGroup {
  name: string;
  value: string;
}

interface Image {
  type: string;
  source: string;
  asset_id: string;
}

export interface Product {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku: string;
  permalink: string;
  quantity: number;
  createdAt: string; // ISO date string
  price: Price;
  line_total: LineTotal;
  is_valid: boolean;
  product_meta: any[]; // Adjust this type if you have specific metadata structure
  selected_options: any[]; // Adjust this type if you have specific selected options structure
  variant: Variant;
  brand?: string;
  color?: string;
  variant_group: VariantGroup[];
  image: Image[];
  category_id: string;
}

export type getProductsOptions = {
  category_slug?: string;
  category_id?: string;
  active?: 0 | 1;
  limit?: number;
  page?: number;
  sortBy?: "id" | "sort_order" | "name" | "created_at" | "updated_at" | "price";
  sortDirection?: "asc" | "desc";
};

export type getProductsResponse = {
  data: product[];
  meta: metaType;
};

export type getProductCredentials = {
  product_id: string;
  options: { type: "id" | "sku" | "permalink" };
};

export type variant = {
  id: string;
  sku: string;
  description: string;
  inventory: number;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  is_valid: boolean;
  invalid_reason_code: any;
  meta: any;
  created: number;
  updated: number;
  options: Record<string, string>;
  assets: any[];
};

export type getProductVariantsResponse = {
  data: variant[];
  meta: metaType;
};

//General
export type metaType = {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: any;
  };
};
