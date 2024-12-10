import { product } from "./types";

export const categories = [
  {
    id: "cat_1",
    parent_id: null,
    slug: "electronics",
    name: "Electronics",
    description: "All kinds of electronics",
    products: 20,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
  {
    id: "cat_2",
    parent_id: null,
    slug: "clothing",
    name: "Clothing",
    description: "All clothing items",
    products: 20,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
  {
    id: "cat_3",
    parent_id: null,
    slug: "mens-fashion",
    name: "Men's Fashion",
    description: "Men's fashion and accessories",
    products: 15,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
  {
    id: "cat_4",
    parent_id: null,
    slug: "womens-fashion",
    name: "Women's Fashion",
    description: "Women's fashion and accessories",
    products: 15,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
  {
    id: "cat_5",
    parent_id: null,
    slug: "health",
    name: "Health",
    description: "Health products and equipment",
    products: 10,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
  {
    id: "cat_6",
    parent_id: null,
    slug: "tools",
    name: "Tools",
    description: "Various tools and equipment",
    products: 10,
    created: Date.now(),
    updated: Date.now(),
    assets: [],
  },
];

export const products: product[] = [
  // Electronics
  // Samsung Galaxy S21
  {
    id: "prod_1",
    product_id: "prod_1",
    name: "Samsung Galaxy S21",
    sku: "SAMS21",
    permalink: "samsung-galaxy-s21",
    quantity: 50,
    createdAt: "2023-02-15",
    price: {
      raw: 799,
      formatted: "799.00",
      formatted_with_symbol: "$799.00",
      formatted_with_code: "799.00 USD",
    },
    line_total: {
      raw: 799,
      formatted: "799.00",
      formatted_with_symbol: "$799.00",
      formatted_with_code: "799.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_1",
      sku: "SAMS21_BLACK",
      description:
        "The Samsung Galaxy S21 redefines mobile technology with a sleek design, powerful processor, and advanced camera capabilities. Its triple-camera system captures high-quality photos in any lighting condition, while the 6.2-inch Dynamic AMOLED display provides a vibrant, immersive viewing experience. Designed with a smooth 120Hz refresh rate, the S21 offers effortless scrolling and gaming. Equipped with a durable glass and metal frame, it features 5G connectivity, 8GB of RAM, and a powerful Exynos 2100 processor. The 4000mAh battery ensures long-lasting performance, making it ideal for power users who need a reliable and feature-rich smartphone.",
      inventory: 30,
      price: {
        raw: 799,
        formatted: "799.00",
        formatted_with_symbol: "$799.00",
        formatted_with_code: "799.00 USD",
      },
      is_valid: true,
      brand: "Samsung",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "6.2 inches" },
      { name: "Brand", value: "Samsung" },
      { name: "Remaining Items in Store", value: "50" },
      { name: "Battery Capacity", value: "4000mAh" },
      { name: "Processor", value: "Exynos 2100" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/samsung-galaxy-s21/51SUZRmZzOL._AC_SX679_.jpg",
        asset_id: "asset_1",
      },
      {
        type: "image",
        source:
          "../../public/images/samsung-galaxy-s21/61dzWUAAVjL._AC_SX679_.jpg",
        asset_id: "asset_1",
      },
      {
        type: "image",
        source:
          "../../public/images/samsung-galaxy-s21/516FQtYXIpL._AC_SX679_.jpg",
        asset_id: "asset_1",
      },
      {
        type: "image",
        source:
          "../../public/images/samsung-galaxy-s21/51Bt4GgTjeL._AC_SX679_.jpg",
        asset_id: "asset_1",
      },
    ],
    category_id: "cat_1",
  },

  // Sony WH-1000XM4 Headphones
  {
    id: "prod_2",
    product_id: "prod_2",
    name: "Sony WH-1000XM4 Headphones",
    sku: "SONY1000XM4",
    permalink: "sony-wh-1000xm4-headphones",
    quantity: 75,
    createdAt: "2023-04-10",
    price: {
      raw: 349,
      formatted: "349.00",
      formatted_with_symbol: "$349.00",
      formatted_with_code: "349.00 USD",
    },
    line_total: {
      raw: 349,
      formatted: "349.00",
      formatted_with_symbol: "$349.00",
      formatted_with_code: "349.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_2",
      sku: "SONY1000XM4_SILVER",
      description:
        "The Sony WH-1000XM4 headphones provide exceptional noise cancellation, wireless freedom, and superior audio quality. Featuring industry-leading noise-canceling technology powered by Sony's HD Noise Canceling Processor QN1, these headphones offer a truly immersive audio experience. The Adaptive Sound Control adjusts sound settings based on your location, while the 30-hour battery life ensures long-lasting playback. With a quick 10-minute charge, you get up to 5 hours of playtime. Built with touch-sensitive controls and compatible with voice assistants, the WH-1000XM4 headphones deliver both comfort and high-fidelity sound for audiophiles and casual listeners alike.",
      inventory: 40,
      price: {
        raw: 349,
        formatted: "349.00",
        formatted_with_symbol: "$349.00",
        formatted_with_code: "349.00 USD",
      },
      is_valid: true,
      brand: "Sony",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Silver" },
      { name: "Brand", value: "Sony" },
      { name: "Remaining Items in Store", value: "75" },
      { name: "Battery Life", value: "30 hours" },
      { name: "Wireless Technology", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Active Noise Canceling (ANC)" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/sony-wh-1000xm4-headphones/51aXvjzcukL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/sony-wh-1000xm4-headphones/81gW2Vb93RL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/sony-wh-1000xm4-headphones/51gaT35OeML._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // Apple MacBook Air M1
  {
    id: "prod_3",
    product_id: "prod_3",
    name: "Apple MacBook Air M1",
    sku: "MACAIR_M1",
    permalink: "apple-macbook-air-m1",
    quantity: 20,
    createdAt: "2023-03-21",
    price: {
      raw: 999,
      formatted: "999.00",
      formatted_with_symbol: "$999.00",
      formatted_with_code: "999.00 USD",
    },
    line_total: {
      raw: 999,
      formatted: "999.00",
      formatted_with_symbol: "$999.00",
      formatted_with_code: "999.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_3",
      sku: "MACAIR_M1_SILVER",
      description:
        "The Apple MacBook Air M1 combines power, efficiency, and portability with Apple’s revolutionary M1 chip. This lightweight laptop is perfect for both casual users and professionals. Its fanless design ensures silent operation, and the 13.3-inch Retina display offers vivid, true-to-life colors. With up to 18 hours of battery life, it is ideal for all-day use. The M1 chip’s 8-core CPU delivers faster processing, while the integrated 7-core GPU provides seamless graphics performance for tasks like photo editing and light gaming. The MacBook Air is environmentally friendly, made from 100% recycled aluminum, and features Apple’s signature quality and craftsmanship.",
      inventory: 10,
      price: {
        raw: 999,
        formatted: "999.00",
        formatted_with_symbol: "$999.00",
        formatted_with_code: "999.00 USD",
      },
      is_valid: true,
      brand: "Apple",
      color: "Silver",
    },
    variant_group: [
      { name: "Color", value: "Silver" },
      { name: "Brand", value: "Apple" },
      { name: "Remaining Items in Store", value: "20" },
      { name: "Processor", value: "Apple M1" },
      { name: "Battery Life", value: "18 hours" },
      { name: "Display", value: "13.3-inch Retina" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/apple-macbook-air-m1/71U5elMmEdL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/apple-macbook-air-m1/71U5elMmEdLddd._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/apple-macbook-air-m1/71epSjvAXdL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // Apple iPad Pro 11"
  {
    id: "prod_5",
    product_id: "prod_5",
    name: 'Apple iPad Pro 11"',
    sku: "IPADPRO11",
    permalink: "apple-ipad-pro-11",
    quantity: 35,
    createdAt: "2023-05-18",
    price: {
      raw: 799,
      formatted: "799.00",
      formatted_with_symbol: "$799.00",
      formatted_with_code: "799.00 USD",
    },
    line_total: {
      raw: 799,
      formatted: "799.00",
      formatted_with_symbol: "$799.00",
      formatted_with_code: "799.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_5",
      sku: "IPADPRO11_SILVER",
      description:
        'Apple iPad Pro 11" combines cutting-edge technology with sleek design. Its 11-inch Liquid Retina display offers remarkable color accuracy and ProMotion technology with a 120Hz refresh rate. Powered by the M1 chip, it provides desktop-class performance for tasks such as video editing and gaming. The device supports Apple Pencil and the Magic Keyboard, making it an excellent choice for creatives and professionals alike. With 5G connectivity, Face ID, and USB-C, the iPad Pro is versatile, powerful, and built for multitasking. Its lightweight frame and long battery life ensure it is perfect for on-the-go productivity and entertainment.',
      inventory: 25,
      price: {
        raw: 799,
        formatted: "799.00",
        formatted_with_symbol: "$799.00",
        formatted_with_code: "799.00 USD",
      },
      is_valid: true,
      brand: "Apple",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Silver" },
      { name: "Brand", value: "Apple" },
      { name: "Display", value: "11 inches" },
      { name: "Processor", value: "M1 Chip" },
      { name: "Remaining Items in Store", value: "35" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/apple-ipad-pro-11/31c0wp4DokL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/apple-ipad-pro-11/41Hq6LuWU6L._AC_SY879_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/apple-ipad-pro-11/61gqvpX4neL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // Sony PlayStation 5
  {
    id: "prod_6",
    product_id: "prod_6",
    name: "Sony PlayStation 5",
    sku: "PS5",
    permalink: "sony-playstation-5",
    quantity: 60,
    createdAt: "2023-07-10",
    price: {
      raw: 499,
      formatted: "499.00",
      formatted_with_symbol: "$499.00",
      formatted_with_code: "499.00 USD",
    },
    line_total: {
      raw: 499,
      formatted: "499.00",
      formatted_with_symbol: "$499.00",
      formatted_with_code: "499.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_6",
      sku: "PS5_WHITE",
      description:
        "The Sony PlayStation 5 represents a leap in console gaming with advanced hardware, fast load times, and immersive graphics. Powered by a custom CPU and GPU, it provides up to 4K resolution, 60fps gaming, and ray tracing technology for lifelike visuals. The SSD reduces loading times significantly, and the DualSense controller adds a new level of haptic feedback for an immersive experience. With a library of exclusive games and backward compatibility with PS4 games, the PS5 is the ultimate console for both casual and hardcore gamers.",
      inventory: 50,
      price: {
        raw: 499,
        formatted: "499.00",
        formatted_with_symbol: "$499.00",
        formatted_with_code: "499.00 USD",
      },
      is_valid: true,
      brand: "Sony",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Brand", value: "Sony" },
      { name: "Remaining Items in Store", value: "60" },
      { name: "Resolution", value: "4K" },
      { name: "Controller", value: "DualSense" },
    ],
    image: [
      {
        type: "image",
        source: "../../public/images/sony-playstation-5/31JaiPXYI8L.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/sony-playstation-5/61+sTzMnIjL._SX522_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/sony-playstation-5/61QtW8rJpPL._SX522_.jpg",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // Bose SoundLink Bluetooth Speaker
  {
    id: "prod_7",
    product_id: "prod_7",
    name: "Bose SoundLink Bluetooth Speaker",
    sku: "BOSELINK",
    permalink: "bose-soundlink-bluetooth-speaker",
    quantity: 100,
    createdAt: "2023-08-22",
    price: {
      raw: 199,
      formatted: "199.00",
      formatted_with_symbol: "$199.00",
      formatted_with_code: "199.00 USD",
    },
    line_total: {
      raw: 199,
      formatted: "199.00",
      formatted_with_symbol: "$199.00",
      formatted_with_code: "199.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_7",
      sku: "BOSELINK_BLACK",
      description:
        "The Bose SoundLink Bluetooth Speaker is designed for premium sound in a compact form factor. With a long battery life of up to 12 hours, it delivers deep bass and rich audio, enhanced by Bose’s proprietary technology. The speaker is water-resistant, making it perfect for outdoor use. Equipped with Bluetooth and NFC pairing, it connects easily to devices, providing high-quality audio for music, podcasts, and calls. The sleek design and durable build make it an ideal choice for both home and travel use.",
      inventory: 80,
      price: {
        raw: 199,
        formatted: "199.00",
        formatted_with_symbol: "$199.00",
        formatted_with_code: "199.00 USD",
      },
      is_valid: true,
      brand: "Bose",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Brand", value: "Bose" },
      { name: "Battery Life", value: "12 hours" },
      { name: "Water Resistance", value: "IPX4" },
      { name: "Remaining Items in Store", value: "100" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/bose-soundlink-bluetooth-speaker/51d5B0TGM4L._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/bose-soundlink-bluetooth-speaker/61qdcH+bn7L._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images/bose-soundlink-bluetooth-speaker/71NctK-1zbL.__AC_SY300_SX300_QL70_FMwebp_.webp",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // GoPro Hero9 Black
  {
    id: "prod_8",
    product_id: "prod_8",
    name: "GoPro Hero9 Black",
    sku: "GOPROH9",
    permalink: "gopro-hero9-black",
    quantity: 40,
    createdAt: "2023-09-05",
    price: {
      raw: 399,
      formatted: "399.00",
      formatted_with_symbol: "$399.00",
      formatted_with_code: "399.00 USD",
    },
    line_total: {
      raw: 399,
      formatted: "399.00",
      formatted_with_symbol: "$399.00",
      formatted_with_code: "399.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_8",
      sku: "GOPROH9_BLACK",
      description:
        "The GoPro Hero9 Black offers incredible video quality with up to 5K resolution, making it ideal for action and adventure enthusiasts. With a 20MP camera, it captures stunning photos and videos, and its front-facing display makes vlogging easier. Waterproof to 33 feet, it’s perfect for underwater footage, and its HyperSmooth stabilization ensures smooth recording even in motion. Additional features include TimeWarp 3.0, SuperPhoto, and RAW capture for professional-grade results.",
      inventory: 35,
      price: {
        raw: 399,
        formatted: "399.00",
        formatted_with_symbol: "$399.00",
        formatted_with_code: "399.00 USD",
      },
      is_valid: true,
      brand: "GoPro",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Brand", value: "GoPro" },
      { name: "Resolution", value: "5K" },
      { name: "Stabilization", value: "HyperSmooth 3.0" },
      { name: "Remaining Items in Store", value: "40" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/gopro-hero9-black/71xvL9XGwYL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        asset_id: "asset_2",
      },
      {
        type: "image",
        source:
          "../../public/images//gopro-hero9-black/81Pd79JOubL._AC_SX679_.jpg",
        asset_id: "asset_2",
      },
    ],
    category_id: "cat_1",
  },

  // JBL Charge 4 Portable Speaker
  {
    id: "prod_9",
    product_id: "prod_9",
    name: "JBL Charge 4 Portable Speaker",
    sku: "JBLCHARGE4",
    permalink: "jbl-charge-4-portable-speaker",
    quantity: 90,
    createdAt: "2023-09-28",
    price: {
      raw: 179,
      formatted: "179.00",
      formatted_with_symbol: "$179.00",
      formatted_with_code: "179.00 USD",
    },
    line_total: {
      raw: 179,
      formatted: "179.00",
      formatted_with_symbol: "$179.00",
      formatted_with_code: "179.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_9",
      sku: "JBLCHARGE4_BLACK",
      description:
        "The JBL Charge 4 Portable Speaker delivers powerful sound with a durable, waterproof design. With up to 20 hours of playtime, it’s built for all-day use, and its IPX7 waterproof rating makes it ideal for pool parties, beach outings, or rugged outdoor adventures. Featuring JBL Connect+, it can link with over 100 JBL speakers for an immersive sound experience. Its dual passive radiators provide deep bass, and its built-in power bank allows you to charge other devices on the go.",
      inventory: 70,
      price: {
        raw: 179,
        formatted: "179.00",
        formatted_with_symbol: "$179.00",
        formatted_with_code: "179.00 USD",
      },
      is_valid: true,
      brand: "JBL",
      color: "Silver",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Brand", value: "JBL" },
      { name: "Battery Life", value: "20 hours" },
      { name: "Waterproof", value: "IPX7" },
      { name: "Remaining Items in Store", value: "90" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/jbl-charge-4-portable-speaker/71MbkWeSJ4L.__AC_SX300_SY300_QL70_FMwebp_.webp",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/jbl-charge-4-portable-speaker/71oN2jRexzL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/jbl-charge-4-portable-speaker/81H1zQF62XL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
    ],
    category_id: "cat_1",
  },
  // Nike Air Max 270
  {
    id: "prod_4",
    product_id: "prod_4",
    name: "Nike Air Max 270",
    sku: "NIKEAIR270",
    permalink: "nike-air-max-270",
    quantity: 80,
    createdAt: "2023-02-20", // New unique date
    price: {
      raw: 150,
      formatted: "150.00",
      formatted_with_symbol: "$150.00",
      formatted_with_code: "150.00 USD",
    },
    line_total: {
      raw: 150,
      formatted: "150.00",
      formatted_with_symbol: "$150.00",
      formatted_with_code: "150.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_4",
      sku: "NIKE AIR270_BLACK",
      description:
        "The Nike Air Max 270 offers a sleek design with its bold, elevated air unit and comfortable cushioning for everyday wear. The shoe’s upper is crafted from a breathable mesh material, providing flexibility and ventilation, while the heel features a 270-degree air bubble designed for optimal impact absorption. Perfect for both athletic activities and casual use, the Air Max 270 combines Nike’s signature style with functionality. It comes with a durable rubber outsole that ensures excellent traction and a padded collar and tongue for extra comfort.",
      inventory: 50,
      price: {
        raw: 150,
        formatted: "150.00",
        formatted_with_symbol: "$150.00",
        formatted_with_code: "150.00 USD",
      },
      is_valid: true,
      brand: "Nike",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "10" },
      { name: "Brand", value: "Nike" },
      { name: "Sole Material", value: "Rubber" },
      { name: "Air Unit", value: "270-degree" },
      { name: "Remaining Items in Store", value: "80" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/nike-air-max-270/61TpwR4jLIL._AC_SY695_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/nike-air-max-270/81Rbhq-4vDL._AC_SY695_.jpg",
        asset_id: "asset_4",
      },

      {
        type: "image",
        source:
          "../../public/images/nike-air-max-270/51rml9NEk1L._AC_SY695_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/nike-air-max-270/519Avn0sHhL._AC_SY695_.jpg",
        asset_id: "asset_4",
      },
    ],
    category_id: "cat_2",
  },

  // Levi's 501 Original Fit Jeans
  {
    id: "prod_10",
    product_id: "prod_10",
    name: "Levi's 501 Original Fit Jeans",
    sku: "LEVIS501",
    permalink: "levis-501-original-fit-jeans",
    quantity: 100,
    createdAt: "2023-03-05",
    price: {
      raw: 89,
      formatted: "89.00",
      formatted_with_symbol: "$89.00",
      formatted_with_code: "89.00 USD",
    },
    line_total: {
      raw: 89,
      formatted: "89.00",
      formatted_with_symbol: "$89.00",
      formatted_with_code: "89.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_10",
      sku: "LEVIS 501_BLUE",
      description:
        "Levi's 501 Original Fit Jeans are an iconic style that has stood the test of time. Crafted from durable denim, these jeans feature a classic straight-leg design and button fly closure for an authentic look. Known for their versatility, they are perfect for any occasion, whether dressing up or down. The high-quality fabric ensures long-lasting wear, while the mid-rise waist provides a comfortable fit. Levi's continues to set the standard with this timeless jean, making it a wardrobe essential for any denim lover.",
      inventory: 50,
      price: {
        raw: 89,
        formatted: "89.00",
        formatted_with_symbol: "$89.00",
        formatted_with_code: "89.00 USD",
      },
      is_valid: true,
      brand: "Levi's",
      color: "Blue",
    },
    variant_group: [
      { name: "Color", value: "Blue" },
      { name: "Waist Size", value: "32" },
      { name: "Length", value: "32" },
      { name: "Material", value: "Denim" },
      { name: "Fit", value: "Original" },
      { name: "Remaining Items in Store", value: "100" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/levis-501-original-fit-jeans/71wjbJRLNJL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/levis-501-original-fit-jeans/715cFAybkOL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/levis-501-original-fit-jeans/71F5DcSkc1L._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
    ],
    category_id: "cat_2",
  },

  // Nike Sportswear Club Fleece Hoodie
  {
    id: "prod_11",
    product_id: "prod_11",
    name: "Nike Sportswear Club Fleece Hoodie",
    sku: "NIKEHOODIE",
    permalink: "nike-sportswear-club-fleece-hoodie",
    quantity: 200,
    createdAt: "2023-04-12",
    price: {
      raw: 55,
      formatted: "55.00",
      formatted_with_symbol: "$55.00",
      formatted_with_code: "55.00 USD",
    },
    line_total: {
      raw: 55,
      formatted: "55.00",
      formatted_with_symbol: "$55.00",
      formatted_with_code: "55.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_11",
      sku: "NIKE HOODIE_GRAY",
      description:
        "The Nike Sportswear Club Fleece Hoodie offers soft comfort with a classic, laid-back style. Made from a blend of cotton and polyester, it provides warmth and a cozy fit, perfect for casual wear or gym warm-ups. The adjustable drawstring hood, ribbed cuffs, and kangaroo pocket add to its functionality, while its stylish design complements any outfit. It’s machine washable and durable, ensuring it maintains its quality and fit over time, making it a must-have for cooler days.",
      inventory: 150,
      price: {
        raw: 55,
        formatted: "55.00",
        formatted_with_symbol: "$55.00",
        formatted_with_code: "55.00 USD",
      },
      is_valid: true,
      brand: "Nike",
      color: "Gray",
    },
    variant_group: [
      { name: "Color", value: "Gray" },
      { name: "Size", value: "Medium" },
      { name: "Material", value: "Cotton-Polyester Blend" },
      { name: "Pockets", value: "Kangaroo Pocket" },
      { name: "Hood Type", value: "Adjustable" },
      { name: "Remaining Items in Store", value: "200" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/nike-sportswear-club-fleece-hoodie/61YK53BjvEL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/nike-sportswear-club-fleece-hoodie/61KU3YmPgPL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/nike-sportswear-club-fleece-hoodie/617NUr2TEcL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
    ],
    category_id: "cat_2",
  },

  // Patagonia Down Sweater Vest
  {
    id: "prod_19",
    product_id: "prod_19",
    name: "Patagonia Down Sweater Vest",
    sku: "PATAGONIA VEST",
    permalink: "patagonia-down-sweater-vest",
    quantity: 50,
    createdAt: "2023-05-30",
    price: {
      raw: 179,
      formatted: "179.00",
      formatted_with_symbol: "$179.00",
      formatted_with_code: "179.00 USD",
    },
    line_total: {
      raw: 179,
      formatted: "179.00",
      formatted_with_symbol: "$179.00",
      formatted_with_code: "179.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_19",
      sku: "PATAGONIAVEST_NAVY",
      description:
        "The Patagonia Down Sweater Vest combines lightweight insulation with a durable, water-resistant exterior, making it ideal for layering during outdoor activities. The vest is filled with ethically-sourced 800-fill-power down, providing excellent warmth without bulk. Its outer shell is crafted from recycled polyester ripstop, treated with a DWR (durable water repellent) finish for added protection. This vest is packable, fitting easily into a backpack, and features zippered handwarmer pockets for convenience.",
      inventory: 40,
      price: {
        raw: 179,
        formatted: "179.00",
        formatted_with_symbol: "$179.00",
        formatted_with_code: "179.00 USD",
      },
      is_valid: true,
      brand: "Patagonia",
      color: "Navy",
    },
    variant_group: [
      { name: "Color", value: "Navy" },
      { name: "Material", value: "Recycled Polyester" },
      { name: "Fill Power", value: "800-fill" },
      { name: "Water Resistance", value: "DWR Coating" },
      { name: "Remaining Items in Store", value: "50" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/patagonia-down-sweater-vest/61llX19G58L._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/patagonia-down-sweater-vest/61AGDvClkoL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
      {
        type: "image",
        source:
          "../../public/images/patagonia-down-sweater-vest/51OQGu41NJL._AC_SX679_.jpg",
        asset_id: "asset_4",
      },
    ],
    category_id: "cat_2",
  },

  // Tommy Hilfiger Men's Slim Fit Suit
  {
    id: "prod_20",
    product_id: "prod_20",
    name: "Tommy Hilfiger Men's Slim Fit Suit",
    sku: "TOMMY SUIT",
    permalink: "tommy-hilfiger-mens-slim-fit-suit",
    quantity: 50,
    createdAt: "2023-06-15",
    price: {
      raw: 299,
      formatted: "299.00",
      formatted_with_symbol: "$299.00",
      formatted_with_code: "299.00 USD",
    },
    line_total: {
      raw: 299,
      formatted: "299.00",
      formatted_with_symbol: "$299.00",
      formatted_with_code: "299.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_20",
      sku: "TOMMYSUIT_NAVY",
      description:
        "Tommy Hilfiger Men's Slim Fit Suit is a stylish choice for formal occasions. This high-quality suit features a modern, slim fit design crafted from premium materials to ensure comfort and durability. It’s tailored to fit well on the shoulders and waist, giving a sleek silhouette, while the jacket includes interior pockets for convenience. The suit’s navy color provides a versatile, classic look that pairs well with various shirt and tie combinations, making it ideal for weddings, business meetings, or any upscale event.",
      inventory: 40,
      price: {
        raw: 299,
        formatted: "299.00",
        formatted_with_symbol: "$299.00",
        formatted_with_code: "299.00 USD",
      },
      is_valid: true,
      brand: "Tommy Hilfiger",
      color: "Navy",
    },
    variant_group: [
      { name: "Color", value: "Navy" },
      { name: "Size", value: "42R" },
      { name: "Material", value: "Wool Blend" },
      { name: "Fit", value: "Slim" },
      { name: "Remaining Items in Store", value: "50" },
    ],
    image: [
      {
        type: "image",
        source:
          "/images/tommy-hilfiger-mens-slim-fit-suit/81ihQ2dR+8L._AC_SY879_.jpg",
        asset_id: "asset_27_1",
      },
      {
        type: "image",
        source:
          "/images/tommy-hilfiger-mens-slim-fit-suit/81yOQUX-isL._AC_SY879_.jpg",
        asset_id: "asset_27_2",
      },
      {
        type: "image",
        source:
          "/images/tommy-hilfiger-mens-slim-fit-suit/81IsJ-VXF2L._AC_SY879_.jpg",
        asset_id: "asset_27_3",
      },
    ],
    category_id: "cat_3",
  },

  // Calvin Klein Men's Classic Fit Dress Shirt
  {
    id: "prod_21",
    product_id: "prod_21",
    name: "Calvin Klein Men's Classic Fit Dress Shirt",
    sku: "CKDRESSSHIRT",
    permalink: "calvin-klein-mens-classic-fit-dress-shirt",
    quantity: 120,
    createdAt: "2023-07-02",
    price: {
      raw: 79,
      formatted: "79.00",
      formatted_with_symbol: "$79.00",
      formatted_with_code: "79.00 USD",
    },
    line_total: {
      raw: 79,
      formatted: "79.00",
      formatted_with_symbol: "$79.00",
      formatted_with_code: "79.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_21",
      sku: "CKDRESSSHIRT_WHITE",
      description:
        "Calvin Klein Men's Classic Fit Dress Shirt is a staple for any professional wardrobe. Designed with a timeless style, this shirt offers a tailored fit that sits comfortably on the shoulders and torso. Made from high-quality, breathable cotton, it ensures durability and comfort throughout the day. Ideal for business settings or formal events, the shirt features a button-down front, classic collar, and adjustable cuffs, making it versatile enough to pair with suits or casual attire.",
      inventory: 90,
      price: {
        raw: 79,
        formatted: "79.00",
        formatted_with_symbol: "$79.00",
        formatted_with_code: "79.00 USD",
      },
      is_valid: true,
      brand: "Calvin Klein",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Size", value: "16.5 Neck, 34/35 Sleeve" },
      { name: "Material", value: "100% Cotton" },
      { name: "Fit", value: "Classic" },
      { name: "Remaining Items in Store", value: "120" },
    ],
    image: [
      {
        type: "image",
        source: "/images/calvin-klein-mens/51gi5mdVWvL._AC_SX679_.jpg",
        asset_id: "asset_21_1",
      },
      {
        type: "image",
        source: "/images/calvin-klein-mens/91LgIwnz3CL._AC_SX679_.jpg",
        asset_id: "asset_21_2",
      },
      {
        type: "image",
        source: "/images/calvin-klein-mens/71wtI3jOchL._AC_SX679_.jpg",
        asset_id: "asset_21_3",
      },
    ],
    category_id: "cat_3",
  },

  // Ralph Lauren Polo Shirt
  {
    id: "prod_22",
    product_id: "prod_22",
    name: "Ralph Lauren Polo Shirt",
    sku: "RALPH POLO",
    permalink: "ralph-lauren-polo-shirt",
    quantity: 200,
    createdAt: "2023-08-10",
    price: {
      raw: 85,
      formatted: "85.00",
      formatted_with_symbol: "$85.00",
      formatted_with_code: "85.00 USD",
    },
    line_total: {
      raw: 85,
      formatted: "85.00",
      formatted_with_symbol: "$85.00",
      formatted_with_code: "85.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_22",
      sku: "RALPHPOLO_BLUE",
      description:
        "The Ralph Lauren Polo Shirt is a versatile wardrobe essential. Made from premium cotton, it offers both comfort and style, ideal for casual wear or more refined settings. The shirt’s iconic polo design features a ribbed collar and sleeve cuffs, as well as a two-button placket, making it easy to dress up or down. Available in a classic fit, this shirt is perfect for a timeless look that showcases Ralph Lauren’s commitment to quality and elegance.",
      inventory: 150,
      price: {
        raw: 85,
        formatted: "85.00",
        formatted_with_symbol: "$85.00",
        formatted_with_code: "85.00 USD",
      },
      is_valid: true,
      brand: "Ralph Lauren",
      color: "Blue",
    },
    variant_group: [
      { name: "Color", value: "Blue" },
      { name: "Size", value: "Large" },
      { name: "Material", value: "100% Cotton" },
      { name: "Sleeve Type", value: "Short Sleeve" },
      { name: "Remaining Items in Store", value: "200" },
    ],
    image: [
      {
        type: "image",
        source: "/images/ralph-lauren-polo-shirt/81kKk2bnEZL._AC_SY879_.jpg",
        asset_id: "asset_22_1",
      },
      {
        type: "image",
        source: "/images/ralph-lauren-polo-shirt/81oeZT1XHmL._AC_SX679_.jpg",
        asset_id: "asset_22_2",
      },
    ],
    category_id: "cat_3",
  },

  // Levi's Men's 511 Slim Fit Jeans
  {
    id: "prod_23",
    product_id: "prod_23",
    name: "Levi's Men's 511 Slim Fit Jeans",
    sku: "LEVIS511",
    permalink: "levis-mens-511-slim-fit-jeans",
    quantity: 80,
    createdAt: "2023-09-12",
    price: {
      raw: 98,
      formatted: "98.00",
      formatted_with_symbol: "$98.00",
      formatted_with_code: "98.00 USD",
    },
    line_total: {
      raw: 98,
      formatted: "98.00",
      formatted_with_symbol: "$98.00",
      formatted_with_code: "98.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_23",
      sku: "LEVIS511_BLACK",
      description:
        "Levi's Men's 511 Slim Fit Jeans offer a sleek, modern fit with the right amount of stretch. These jeans sit below the waist and are slim through the thigh and leg, providing a streamlined silhouette. Made from high-quality denim, the 511 jeans are versatile and comfortable, perfect for pairing with tees or dress shirts. Their classic style makes them a great choice for various occasions, from casual outings to more refined settings.",
      inventory: 60,
      price: {
        raw: 98,
        formatted: "98.00",
        formatted_with_symbol: "$98.00",
        formatted_with_code: "98.00 USD",
      },
      is_valid: true,
      brand: "Levi's",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "32x34" },
      { name: "Material", value: "Denim" },
      { name: "Fit", value: "Slim" },
      { name: "Remaining Items in Store", value: "80" },
    ],
    image: [
      {
        type: "image",
        source:
          "/images/levis-mens-511-slim-fit-jeans/51JUNF3LcSL._AC_SX679_.jpg",
        asset_id: "asset_23_1",
      },
      {
        type: "image",
        source:
          "/images/levis-mens-511-slim-fit-jeans/717DWLOImXL._AC_SY879_.jpg",
        asset_id: "asset_23_2",
      },
    ],
    category_id: "cat_3",
  },

  // Nike Men's Sportswear Club Fleece Pants
  {
    id: "prod_24",
    product_id: "prod_24",
    name: "Nike Men's Sportswear Club Fleece Pants",
    sku: "NIKEFLEECE",
    permalink: "nike-mens-sportswear-club-fleece-pants",
    quantity: 90,
    createdAt: "2023-08-20",
    price: {
      raw: 55,
      formatted: "55.00",
      formatted_with_symbol: "$55.00",
      formatted_with_code: "55.00 USD",
    },
    line_total: {
      raw: 55,
      formatted: "55.00",
      formatted_with_symbol: "$55.00",
      formatted_with_code: "55.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_24",
      sku: "NIKEFLEECE_GRAY",
      description:
        "Nike Men's Sportswear Club Fleece Pants are designed for comfort and style, crafted from soft fleece fabric that feels great against the skin. These pants feature an elastic waistband with a drawstring for an adjustable fit, along with side pockets for convenience. Their versatile design makes them ideal for lounging or casual outings, while the Nike logo adds a touch of brand pride.",
      inventory: 70,
      price: {
        raw: 55,
        formatted: "55.00",
        formatted_with_symbol: "$55.00",
        formatted_with_code: "55.00 USD",
      },
      is_valid: true,
      brand: "Nike",
      color: "Gray",
    },
    variant_group: [
      { name: "Color", value: "Gray" },
      { name: "Size", value: "Large" },
      { name: "Material", value: "Fleece" },
      { name: "Fit", value: "Regular" },
      { name: "Remaining Items in Store", value: "90" },
    ],
    image: [
      {
        type: "image",
        source: "/images/nike-jogger/51CMrDn+cML._AC_SX679_.jpg",
        asset_id: "asset_24_1",
      },
      {
        type: "image",
        source: "/images/nike-jogger/51vGGkziBLL._AC_SX679_.jpg",
        asset_id: "asset_24_2",
      },
      {
        type: "image",
        source: "/images/nike-jogger/61ZZRHlvelL._AC_SX679_.jpg",
        asset_id: "asset_24_3",
      },
    ],
    category_id: "cat_3",
  },

  // Timberland Men's Waterproof Boots
  {
    id: "prod_25",
    product_id: "prod_25",
    name: "Timberland Men's Waterproof Boots",
    sku: "TIMBERLANDBOOTS",
    permalink: "timberland-mens-waterproof-boots",
    quantity: 70,
    createdAt: "2023-09-05",
    price: {
      raw: 170,
      formatted: "170.00",
      formatted_with_symbol: "$170.00",
      formatted_with_code: "170.00 USD",
    },
    line_total: {
      raw: 170,
      formatted: "170.00",
      formatted_with_symbol: "$170.00",
      formatted_with_code: "170.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_25",
      sku: "TIMBERLANDBOOTS_BROWN",
      description:
        "Timberland Men's Waterproof Boots are built to withstand rugged conditions while keeping feet dry and comfortable. These boots are crafted from durable leather and feature a waterproof membrane, along with a cushioned footbed for extra comfort. Ideal for outdoor adventures, they also include a non-slip rubber outsole for superior traction.",
      inventory: 50,
      price: {
        raw: 170,
        formatted: "170.00",
        formatted_with_symbol: "$170.00",
        formatted_with_code: "170.00 USD",
      },
      is_valid: true,
      brand: "Timberland",
      color: "Brown",
    },
    variant_group: [
      { name: "Color", value: "Brown" },
      { name: "Size", value: "10" },
      { name: "Material", value: "Leather" },
      { name: "Waterproof", value: "Yes" },
      { name: "Remaining Items in Store", value: "70" },
    ],
    image: [
      {
        type: "image",
        source: "/images/brown-boot/615wIa11T-L._AC_SY695_.jpg",
        asset_id: "asset_25_1",
      },
      {
        type: "image",
        source: "/images/brown-boot/71WjS3h4+tL._AC_SY695_.jpg",
        asset_id: "asset_25_2",
      },
      {
        type: "image",
        source: "/images/brown-boot/71eIoA0giBL._AC_SY695_.jpg",
        asset_id: "asset_25_3",
      },
    ],
    category_id: "cat_3",
  },

  // Hugo Boss Men's Leather Belt
  {
    id: "prod_26",
    product_id: "prod_26",
    name: "Hugo Boss Men's Leather Belt",
    sku: "HUGOBELT",
    permalink: "hugo-boss-mens-leather-belt",
    quantity: 150,
    createdAt: "2023-06-30",
    price: {
      raw: 69,
      formatted: "69.00",
      formatted_with_symbol: "$69.00",
      formatted_with_code: "69.00 USD",
    },
    line_total: {
      raw: 69,
      formatted: "69.00",
      formatted_with_symbol: "$69.00",
      formatted_with_code: "69.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_26",
      sku: "HUGOBELT_BLACK",
      description:
        "The Hugo Boss Men's Leather Belt combines elegance and durability. This belt is made from high-quality leather and designed to pair well with both formal and casual attire. It features a stylish buckle with the Hugo Boss logo, adding a touch of sophistication to any outfit.",
      inventory: 100,
      price: {
        raw: 69,
        formatted: "69.00",
        formatted_with_symbol: "$69.00",
        formatted_with_code: "69.00 USD",
      },
      is_valid: true,
      brand: "Hugo Boss",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Length", value: "100 cm" },
      { name: "Material", value: "Leather" },
      { name: "Buckle Type", value: "Metal" },
      { name: "Remaining Items in Store", value: "150" },
    ],
    image: [
      {
        type: "image",
        source: "/images/belt/61qclpT4kfL._AC_SY879_.jpg",
        asset_id: "asset_26_1",
      },
      {
        type: "image",
        source: "/images/belt/61ssTRBC9VL._AC_SY879_.jpg",
        asset_id: "asset_26_2",
      },
      {
        type: "image",
        source: "/images/belt/61VJYBbaFwL._AC_SY879_.jpg",
        asset_id: "asset_26_3",
      },
    ],
    category_id: "cat_3",
  },

  // Under Armour Men's HeatGear Compression Shirt
  {
    id: "prod_27",
    product_id: "prod_27",
    name: "Under Armour Men's HeatGear Compression Shirt",
    sku: "UAHEATGEAR",
    permalink: "under-armour-mens-heatgear-compression-shirt",
    quantity: 130,
    createdAt: "2023-09-01",
    price: {
      raw: 35,
      formatted: "35.00",
      formatted_with_symbol: "$35.00",
      formatted_with_code: "35.00 USD",
    },
    line_total: {
      raw: 35,
      formatted: "35.00",
      formatted_with_symbol: "$35.00",
      formatted_with_code: "35.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_27",
      sku: "UAHEATGEAR_GRAY",
      description:
        "The Under Armour Men's HeatGear Compression Shirt offers a tight, second-skin fit that provides support and comfort during intense workouts. Made with HeatGear fabric, it wicks away sweat and dries quickly to keep you cool. This shirt is ideal for layering or wearing on its own.",
      inventory: 100,
      price: {
        raw: 35,
        formatted: "35.00",
        formatted_with_symbol: "$35.00",
        formatted_with_code: "35.00 USD",
      },
      is_valid: true,
      brand: "Under Armour",
      color: "Gray",
    },
    variant_group: [
      { name: "Color", value: "Gray" },
      { name: "Size", value: "Medium" },
      { name: "Material", value: "Polyester" },
      { name: "Compression", value: "Yes" },
      { name: "Remaining Items in Store", value: "130" },
    ],
    image: [
      {
        type: "image",
        source: "/images/underwear/51dTVYnuqDL._AC_SX679_.jpg",
        asset_id: "asset_27_1",
      },
      {
        type: "image",
        source: "/images/underwear/51EX9GzL5DL._AC_SX679_.jpg",
        asset_id: "asset_27_2",
      },
    ],
    category_id: "cat_3",
  },

  // Giorgio Armani Men's Wool Blazer
  {
    id: "prod_28",
    product_id: "prod_28",
    name: "Giorgio Armani Men's Wool Blazer",
    sku: "ARMANIBLAZER",
    permalink: "giorgio-armani-mens-wool-blazer",
    quantity: 30,
    createdAt: "2023-10-15",
    price: {
      raw: 599,
      formatted: "599.00",
      formatted_with_symbol: "$599.00",
      formatted_with_code: "599.00 USD",
    },
    line_total: {
      raw: 599,
      formatted: "599.00",
      formatted_with_symbol: "$599.00",
      formatted_with_code: "599.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_28",
      sku: "ARMANIBLAZER_GRAY",
      description:
        "The Giorgio Armani Men's Wool Blazer is an epitome of luxury and sophistication. This blazer is made from premium wool, featuring a tailored fit and sleek lines that are perfect for formal occasions or professional settings. The stylish design includes a single-breast cut and an inner lining for added comfort.",
      inventory: 20,
      price: {
        raw: 599,
        formatted: "599.00",
        formatted_with_symbol: "$599.00",
        formatted_with_code: "599.00 USD",
      },
      is_valid: true,
      brand: "Giorgio Armani",
      color: "Gray",
    },
    variant_group: [
      { name: "Color", value: "Gray" },
      { name: "Size", value: "42R" },
      { name: "Material", value: "Wool" },
      { name: "Fit", value: "Slim" },
      { name: "Remaining Items in Store", value: "30" },
    ],
    image: [
      {
        type: "image",
        source: "/images/blazor/81k5sr6tZML._AC_SY879_.jpg",
        asset_id: "asset_28_1",
      },
      {
        type: "image",
        source: "/images/blazor/61i9MbrJq7L._AC_.jpg",
        asset_id: "asset_28_2",
      },
    ],
    category_id: "cat_3",
  },

  // Puma Men's Essential Logo T-Shirt
  {
    id: "prod_29",
    product_id: "prod_29",
    name: "Puma Men's Essential Logo T-Shirt",
    sku: "PUMATSHIRT",
    permalink: "puma-mens-essential-logo-tshirt",
    quantity: 200,
    createdAt: "2023-11-01",
    price: {
      raw: 25,
      formatted: "25.00",
      formatted_with_symbol: "$25.00",
      formatted_with_code: "25.00 USD",
    },
    line_total: {
      raw: 25,
      formatted: "25.00",
      formatted_with_symbol: "$25.00",
      formatted_with_code: "25.00 USD",
    },
    is_valid: true,
    variant: {
      id: "var_29",
      sku: "PUMATSHIRT_BLACK",
      description:
        "The Puma Men's Essential Logo T-Shirt is a versatile and comfortable shirt, ideal for everyday wear or workouts. Made from soft cotton, it features the iconic Puma logo on the chest and a relaxed fit that provides ease of movement.",
      inventory: 150,
      price: {
        raw: 25,
        formatted: "25.00",
        formatted_with_symbol: "$25.00",
        formatted_with_code: "25.00 USD",
      },
      is_valid: true,
      brand: "Puma",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "Medium" },
      { name: "Material", value: "Cotton" },
      { name: "Style", value: "Casual" },
      { name: "Remaining Items in Store", value: "200" },
    ],
    image: [
      {
        type: "image",
        source: "/images/puma-black/81Y-1rLbW+L._AC_SY879_.jpg",
        asset_id: "asset_29_1",
      },
      {
        type: "image",
        source: "/images/puma-black/61KEfFNlIPL._AC_SX679_.jpg",
        asset_id: "asset_29_2",
      },
    ],
    category_id: "cat_3",
  },

  {
    id: "prod_30",
    product_id: "prod_30",
    name: "Michael Kors Women's Jet Set Tote",
    product_name: "Michael Kors Women's Jet Set Tote",
    sku: "MKJETSETTOTE",
    permalink: "michael-kors-womens-jet-set-tote",
    quantity: 50,
    createdAt: "2024-01-15",
    price: {
      raw: 198,
      formatted: "198.00",
      formatted_with_symbol: "$198.00",
      formatted_with_code: "198.00 USD",
    },
    line_total: {
      raw: 198,
      formatted: "198.00",
      formatted_with_symbol: "$198.00",
      formatted_with_code: "198.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_30",
      sku: "MKJETSETTOTE_BLACK",
      description:
        "The Michael Kors Women's Jet Set Tote is a blend of elegance and practicality. Crafted from durable, high-quality leather, it provides ample space for essentials. Designed with the modern woman in mind, the tote includes multiple compartments for easy organization. The adjustable shoulder straps ensure comfort, and the sleek black color adds sophistication to any outfit. Perfect for both daily use and travel, it is a versatile accessory that meets fashion and function needs, making it a popular choice for those seeking both style and substance.",
      inventory: 40,
      price: {
        raw: 198,
        formatted: "198.00",
        formatted_with_symbol: "$198.00",
        formatted_with_code: "198.00 USD",
      },
      is_valid: true,
      brand: "Michael Kors",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "Large" },
      { name: "Brand", value: "Michael Kors" },
      { name: "Remaining Items", value: "40" },
      { name: "Material", value: "Leather" },
      { name: "Closure", value: "Zipper" },
    ],
    image: [
      {
        type: "image",
        source: "/images/mk-tote/61zPSQPMUBL._AC_SX695_ (1).jpg",
        asset_id: "asset_27_1",
      },
      {
        type: "image",
        source: "/images/mk-tote/51vogQGPXCL._AC_SX695_.jpg",
        asset_id: "asset_27_1",
      },
      {
        type: "image",
        source: "/images/mk-tote/41IxxteIiDL._AC_SY695_.jpg",
        asset_id: "asset_27_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_31",
    product_id: "prod_31",
    name: "Levi's Women's 711 Skinny Jeans",
    product_name: "Levi's Women's 711 Skinny Jeans",
    sku: "LEVIS711",
    permalink: "levis-womens-711-skinny-jeans",
    quantity: 90,
    createdAt: "2024-02-10",
    price: {
      raw: 88,
      formatted: "88.00",
      formatted_with_symbol: "$88.00",
      formatted_with_code: "88.00 USD",
    },
    line_total: {
      raw: 88,
      formatted: "88.00",
      formatted_with_symbol: "$88.00",
      formatted_with_code: "88.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_31",
      sku: "LEVIS711_BLUE",
      description:
        "Levi's Women's 711 Skinny Jeans offer a snug fit from hip to ankle with a stretchable, soft fabric for all-day comfort. Tailored to flatter various body types, these jeans hug curves while providing flexibility. The classic blue wash is versatile, suitable for both casual and dressier occasions. They are crafted from a blend of cotton, polyester, and elastane for durability and resilience. Designed to retain their shape, these jeans are a wardrobe staple that combines Levi's heritage of quality with modern styling for everyday wear.",
      inventory: 70,
      price: {
        raw: 88,
        formatted: "88.00",
        formatted_with_symbol: "$88.00",
        formatted_with_code: "88.00 USD",
      },
      is_valid: true,
      brand: "Levi's",
      color: "Blue",
    },
    variant_group: [
      { name: "Color", value: "Blue" },
      { name: "Size", value: "Medium" },
      { name: "Brand", value: "Levi's" },
      { name: "Remaining Items", value: "70" },
      { name: "Material", value: "Cotton Blend" },
      { name: "Fit", value: "Skinny" },
    ],
    image: [
      {
        type: "image",
        source: "/images/711/51esKLKz2fL._AC_SX679_.jpg",
        asset_id: "asset_31_1",
      },
      {
        type: "image",
        source: "/images/711/41EjYHcbkPL._AC_SX679_.jpg",
        asset_id: "asset_31_1",
      },
      {
        type: "image",
        source: "/images/711/51wpBF2YQrL._AC_SX679_.jpg",
        asset_id: "asset_31_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_32",
    product_id: "prod_32",
    name: "Gucci Women's Ace Sneaker",
    product_name: "Gucci Women's Ace Sneaker",
    sku: "GUCCIACE",
    permalink: "gucci-womens-ace-sneaker",
    quantity: 40,
    createdAt: "2024-03-20",
    price: {
      raw: 580,
      formatted: "580.00",
      formatted_with_symbol: "$580.00",
      formatted_with_code: "580.00 USD",
    },
    line_total: {
      raw: 580,
      formatted: "580.00",
      formatted_with_symbol: "$580.00",
      formatted_with_code: "580.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_32",
      sku: "GUCCIACE_WHITE",
      description:
        "The Gucci Women's Ace Sneaker is a luxurious yet understated footwear choice, blending classic design with a modern twist. Made from premium leather, these sneakers provide a comfortable fit and timeless look. The subtle branding and white color make them a versatile addition to any wardrobe, suitable for both casual and smart-casual outfits. Gucci's dedication to quality and style is evident in every stitch, making these sneakers a popular choice among fashion enthusiasts looking for comfort and elegance in one piece.",
      inventory: 30,
      price: {
        raw: 580,
        formatted: "580.00",
        formatted_with_symbol: "$580.00",
        formatted_with_code: "580.00 USD",
      },
      is_valid: true,
      brand: "Gucci",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Size", value: "Standard" },
      { name: "Brand", value: "Gucci" },
      { name: "Remaining Items", value: "30" },
      { name: "Material", value: "Leather" },
      { name: "Style", value: "Casual Sneaker" },
    ],
    image: [
      {
        type: "image",
        source: "/images/gucci-z/717aR5d7FtL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
      {
        type: "image",
        source: "/images/gucci-z/71tyC-e5KcL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
      {
        type: "image",
        source: "/images/gucci-z/615rXHfgD6L._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
    ],
    category_id: "cat_4",
  },

  {
    id: "prod_33",
    product_id: "prod_33",
    name: "Chanel Women's Classic Flap Bag",
    product_name: "Chanel Women's Classic Flap Bag",
    sku: "CHANELFLAP",
    permalink: "chanel-womens-classic-flap-bag",
    quantity: 20,
    createdAt: "2024-04-01",
    price: {
      raw: 5200,
      formatted: "5200.00",
      formatted_with_symbol: "$5200.00",
      formatted_with_code: "5200.00 USD",
    },
    line_total: {
      raw: 5200,
      formatted: "5200.00",
      formatted_with_symbol: "$5200.00",
      formatted_with_code: "5200.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_33",
      sku: "CHANELFLAP_BLACK",
      description:
        "The Chanel Women's Classic Flap Bag in black is an iconic accessory that combines timeless elegance with modern fashion. Crafted from premium quilted leather, it features Chanel's signature CC turn-lock closure and gold-tone chain-link strap. This versatile bag offers ample space for essentials, making it suitable for both day and evening wear. Known for its exceptional craftsmanship, the Classic Flap Bag represents luxury and sophistication, making it a must-have for fashion enthusiasts who value heritage and exclusivity.",
      inventory: 15,
      price: {
        raw: 5200,
        formatted: "5200.00",
        formatted_with_symbol: "$5200.00",
        formatted_with_code: "5200.00 USD",
      },
      is_valid: true,
      brand: "Chanel",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "Medium" },
      { name: "Brand", value: "Chanel" },
      { name: "Remaining Items", value: "15" },
      { name: "Material", value: "Quilted Leather" },
      { name: "Strap", value: "Gold Chain" },
    ],
    image: [
      {
        type: "image",
        source: "/images/purse/81A-yluBOSL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
      { type: "image", source: "/images/purse/2.jpg", asset_id: "asset_32_1" },
      { type: "image", source: "/images/purse/3.jpg", asset_id: "asset_32_1" },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_34",
    product_id: "prod_34",
    name: "Prada Women's Leather Ankle Boots",
    product_name: "Prada Women's Leather Ankle Boots",
    sku: "PRADAANKLEBOOTS",
    permalink: "prada-womens-leather-ankle-boots",
    quantity: 30,
    createdAt: "2024-05-05",
    price: {
      raw: 990,
      formatted: "990.00",
      formatted_with_symbol: "$990.00",
      formatted_with_code: "990.00 USD",
    },
    line_total: {
      raw: 990,
      formatted: "990.00",
      formatted_with_symbol: "$990.00",
      formatted_with_code: "990.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_34",
      sku: "PRADAANKLEBOOTS_BLACK",
      description:
        "The Prada Women's Leather Ankle Boots are a statement of style and durability. Made from premium black leather, these boots are designed for both comfort and sophistication. With a sleek silhouette and side zipper for easy wear, they are perfect for any occasion, from casual outings to more formal events. Prada’s attention to detail is evident in the quality of materials and craftsmanship, making these boots an essential item for fashion-forward individuals seeking timeless elegance.",
      inventory: 20,
      price: {
        raw: 990,
        formatted: "990.00",
        formatted_with_symbol: "$990.00",
        formatted_with_code: "990.00 USD",
      },
      is_valid: true,
      brand: "Prada",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "37" },
      { name: "Brand", value: "Prada" },
      { name: "Remaining Items", value: "20" },
      { name: "Material", value: "Leather" },
      { name: "Heel Height", value: "3 cm" },
    ],
    image: [
      {
        type: "image",
        source: "/images/prada/61fsDeY8PUL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
      {
        type: "image",
        source: "/images/prada/61kXPFszXoL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
      {
        type: "image",
        source: "/images/prada/61MWWzT+5oL._AC_SY695_.jpg",
        asset_id: "asset_32_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_35",
    product_id: "prod_35",
    name: "Burberry Women's Trench Coat",
    product_name: "Burberry Women's Trench Coat",
    sku: "BURBERRYTRENCH",
    permalink: "burberry-womens-trench-coat",
    quantity: 40,
    createdAt: "2024-06-10",
    price: {
      raw: 1995,
      formatted: "1995.00",
      formatted_with_symbol: "$1995.00",
      formatted_with_code: "1995.00 USD",
    },
    line_total: {
      raw: 1995,
      formatted: "1995.00",
      formatted_with_symbol: "$1995.00",
      formatted_with_code: "1995.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_35",
      sku: "BURBERRYTRENCH_BEIGE",
      description:
        "The Burberry Women's Trench Coat in beige is a classic outerwear piece known for its timeless appeal. This trench coat is crafted from a water-resistant cotton-gabardine fabric, ensuring durability and comfort in any weather. It features signature details like the double-breasted front, storm shield, and belted waist, making it a versatile piece for all seasons. Burberry’s heritage craftsmanship shines through in every detail, making it an ideal choice for those who appreciate iconic style and quality.",
      inventory: 30,
      price: {
        raw: 1995,
        formatted: "1995.00",
        formatted_with_symbol: "$1995.00",
        formatted_with_code: "1995.00 USD",
      },
      is_valid: true,
      brand: "Burberry",
      color: "Beige",
    },
    variant_group: [
      { name: "Color", value: "Beige" },
      { name: "Size", value: "Medium" },
      { name: "Brand", value: "Burberry" },
      { name: "Remaining Items", value: "30" },
      { name: "Material", value: "Cotton-Gabardine" },
      { name: "Weather Resistant", value: "Yes" },
    ],
    image: [
      {
        type: "image",
        source: "/images/burberry/81DiyNIebZL._AC_SY879_.jpg",
        asset_id: "asset_35_1",
      },
      {
        type: "image",
        source: "/images/burberry/61ceCnH-73L._AC_SY879_.jpg",
        asset_id: "asset_35_1",
      },
      {
        type: "image",
        source: "/images/burberry/618j3fwyIJL._AC_SX679_.jpg",
        asset_id: "asset_35_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_36",
    product_id: "prod_36",
    name: "Versace Women's Baroque Print Silk Scarf",
    product_name: "Versace Women's Baroque Print Silk Scarf",
    sku: "VERSACESILKSCARF",
    permalink: "versace-womens-baroque-print-silk-scarf",
    quantity: 50,
    createdAt: "2024-07-15",
    price: {
      raw: 495,
      formatted: "495.00",
      formatted_with_symbol: "$495.00",
      formatted_with_code: "495.00 USD",
    },
    line_total: {
      raw: 495,
      formatted: "495.00",
      formatted_with_symbol: "$495.00",
      formatted_with_code: "495.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_36",
      sku: "VERSACESILKSCARF_GOLD",
      description:
        "This luxurious Versace Women's Baroque Print Silk Scarf showcases the signature opulent baroque design in a vibrant gold. Made from pure silk, it offers a lightweight, smooth feel, ideal for adding a touch of sophistication to any outfit. With its intricate patterns and bold colors, this scarf embodies Versace's flair for drama and elegance, making it a versatile accessory suitable for both formal occasions and everyday wear.",
      inventory: 40,
      price: {
        raw: 495,
        formatted: "495.00",
        formatted_with_symbol: "$495.00",
        formatted_with_code: "495.00 USD",
      },
      is_valid: true,
      brand: "Versace",
      color: "Gold",
    },
    variant_group: [
      { name: "Color", value: "Gold" },
      { name: "Size", value: "90 cm x 90 cm" },
      { name: "Brand", value: "Versace" },
      { name: "Remaining Items", value: "40" },
      { name: "Material", value: "Silk" },
      { name: "Pattern", value: "Baroque Print" },
    ],
    image: [
      {
        type: "image",
        source: "/images/VersaceScarf/71mvNbBiSqL._AC_SX679_.jpg",
        asset_id: "asset_36_1",
      },
      {
        type: "image",
        source: "/images/VersaceScarf/71cLVyf5XdL._AC_SX679_.jpg",
        asset_id: "asset_36_1",
      },
      {
        type: "image",
        source: "/images/VersaceScarf/81J+UZYTnVL._AC_SX679_.jpg",
        asset_id: "asset_36_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_37",
    product_id: "prod_37",
    name: "Zara Women's Oversized Blazer",
    product_name: "Zara Women's Oversized Blazer",
    sku: "ZARABLAZER",
    permalink: "zara-womens-oversized-blazer",
    quantity: 80,
    createdAt: "2024-08-05",
    price: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    line_total: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_37",
      sku: "ZARABLAZER_GRAY",
      description:
        "The Zara Women's Oversized Blazer in gray offers a relaxed yet sophisticated look, perfect for layering over any outfit. Its oversized fit provides comfort while maintaining a stylish silhouette. Made from a high-quality blend of materials, it features structured shoulders and notched lapels, adding a touch of formality without compromising on style. Ideal for both casual and formal settings, this blazer is a versatile wardrobe staple.",
      inventory: 60,
      price: {
        raw: 129,
        formatted: "129.00",
        formatted_with_symbol: "$129.00",
        formatted_with_code: "129.00 USD",
      },
      is_valid: true,
      brand: "Zara",
      color: "Gray",
    },
    variant_group: [
      { name: "Color", value: "Gray" },
      { name: "Size", value: "Large" },
      { name: "Brand", value: "Zara" },
      { name: "Remaining Items", value: "60" },
      { name: "Material", value: "Polyester Blend" },
      { name: "Fit", value: "Oversized" },
    ],
    image: [
      {
        type: "image",
        source: "/images/ZaraBlazer/71K4MQ6lVnL._AC_SY879_.jpg",
        asset_id: "asset_36_1",
      },
      {
        type: "image",
        source: "/images/ZaraBlazer/81EKP86psBL._AC_SY879_.jpg",
        asset_id: "asset_36_1",
      },
      {
        type: "image",
        source: "/images/ZaraBlazer/71+mMqHWGlL._AC_SY879_.jpg",
        asset_id: "asset_36_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_38",
    product_id: "prod_38",
    name: "H&M Women's Knit Sweater",
    product_name: "H&M Women's Knit Sweater",
    sku: "HMSWEATER",
    permalink: "hm-womens-knit-sweater",
    quantity: 120,
    createdAt: "2024-09-01",
    price: {
      raw: 29,
      formatted: "29.00",
      formatted_with_symbol: "$29.00",
      formatted_with_code: "29.00 USD",
    },
    line_total: {
      raw: 29,
      formatted: "29.00",
      formatted_with_symbol: "$29.00",
      formatted_with_code: "29.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_38",
      sku: "HMSWEATER_WHITE",
      description:
        "The H&M Women's Knit Sweater in white is a comfortable, cozy option for cooler days. Made from a soft, breathable fabric, it offers warmth without being too heavy. The classic crew neck and relaxed fit make it easy to pair with jeans or skirts for a casual, stylish look. This sweater is a versatile addition to any wardrobe, combining simplicity with comfort.",
      inventory: 100,
      price: {
        raw: 29,
        formatted: "29.00",
        formatted_with_symbol: "$29.00",
        formatted_with_code: "29.00 USD",
      },
      is_valid: true,
      brand: "H&M",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Size", value: "Medium" },
      { name: "Brand", value: "H&M" },
      { name: "Remaining Items", value: "100" },
      { name: "Material", value: "Cotton Blend" },
      { name: "Fit", value: "Relaxed" },
    ],
    image: [
      {
        type: "image",
        source: "/images/H&MSweater/81veX9+Zu4L._AC_SX679_.jpg",
        asset_id: "asset_38_2",
      },
      {
        type: "image",
        source: "/images/H&MSweater/71uf-oxwecL._AC_SX679_.jpg",
        asset_id: "asset_38_1",
      },
    ],
    category_id: "cat_4",
  },
  {
    id: "prod_39",
    product_id: "prod_39",
    name: "Dior Women's Saddle Bag",
    product_name: "Dior Women's Saddle Bag",
    sku: "DIORSADDLEBAG",
    permalink: "dior-womens-saddle-bag",
    quantity: 20,
    createdAt: "2024-10-10",
    price: {
      raw: 3200,
      formatted: "3200.00",
      formatted_with_symbol: "$3200.00",
      formatted_with_code: "3200.00 USD",
    },
    line_total: {
      raw: 3200,
      formatted: "3200.00",
      formatted_with_symbol: "$3200.00",
      formatted_with_code: "3200.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_39",
      sku: "DIORSADDLEBAG_BLACK",
      description:
        "The Dior Women's Saddle Bag in black is a stylish and unique accessory, recognized for its distinctive shape and luxurious design. Crafted from high-quality leather, it features the signature Dior 'CD' logo and offers enough room for essentials. The bold design and exceptional craftsmanship make this bag a favorite among fashion-forward individuals seeking a blend of elegance and statement-making style.",
      inventory: 15,
      price: {
        raw: 3200,
        formatted: "3200.00",
        formatted_with_symbol: "$3200.00",
        formatted_with_code: "3200.00 USD",
      },
      is_valid: true,
      brand: "Dior",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Size", value: "Small" },
      { name: "Brand", value: "Dior" },
      { name: "Remaining Items", value: "15" },
      { name: "Material", value: "Leather" },
      { name: "Strap Type", value: "Adjustable" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Dior-sad-Bag/81+mw2J5gDL._AC_SY695_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Dior-sad-Bag/81mx8rQtzdL._AC_SX695_.jpg",
        asset_id: "asset_39_1",
      },
      {
        type: "image",
        source: "/images/Dior-sad-Bag/713sEi5OAwL._AC_SY695_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_4",
  },

  {
    id: "prod_40",
    product_id: "prod_40",
    name: "Omron Platinum Blood Pressure Monitor",
    product_name: "Omron Platinum Blood Pressure Monitor",
    sku: "OMRONBP",
    permalink: "omron-platinum-blood-pressure-monitor",
    quantity: 60,
    createdAt: "2024-11-05",
    price: {
      raw: 199,
      formatted: "199.00",
      formatted_with_symbol: "$199.00",
      formatted_with_code: "199.00 USD",
    },
    line_total: {
      raw: 199,
      formatted: "199.00",
      formatted_with_symbol: "$199.00",
      formatted_with_code: "199.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_40",
      sku: "OMRONBP_BLACK",
      description:
        "The Omron Platinum Blood Pressure Monitor offers clinically accurate readings with advanced technology. It features a sleek, compact design and an easy-to-read digital display. The device comes with built-in memory to store readings for multiple users, and its high-precision sensors provide quick results. This monitor is ideal for home use, helping individuals manage their health by tracking blood pressure levels consistently.",
      inventory: 50,
      price: {
        raw: 199,
        formatted: "199.00",
        formatted_with_symbol: "$199.00",
        formatted_with_code: "199.00 USD",
      },
      is_valid: true,
      brand: "Omron",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Type", value: "Blood Pressure Monitor" },
      { name: "Brand", value: "Omron" },
      { name: "Remaining Items", value: "50" },
      { name: "Power Source", value: "Battery" },
      { name: "Memory Capacity", value: "200 Readings" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Omron-Platinum/61mamaqoj1L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Omron-Platinum/71S4kleo5gL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Omron-Platinum/51nk7i6QLfL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },
  {
    id: "prod_41",
    product_id: "prod_41",
    name: "Fitbit Charge 5 Fitness & Health Tracker",
    product_name: "Fitbit Charge 5 Fitness & Health Tracker",
    sku: "FITBITCHARGE5",
    permalink: "fitbit-charge-5-health-tracker",
    quantity: 80,
    createdAt: "2024-11-10",
    price: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    line_total: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_41",
      sku: "FITBITCHARGE5_BLACK",
      description:
        "The Fitbit Charge 5 is a versatile fitness and health tracker that offers real-time data on heart rate, sleep patterns, and activity levels. Designed with a sleek profile, this device seamlessly integrates into daily wear, providing essential insights to support a healthier lifestyle. The Charge 5 is water-resistant and features a range of apps to customize your fitness and wellness tracking.",
      inventory: 70,
      price: {
        raw: 149,
        formatted: "149.00",
        formatted_with_symbol: "$149.00",
        formatted_with_code: "149.00 USD",
      },
      is_valid: true,
      brand: "Fitbit",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Type", value: "Fitness & Health Tracker" },
      { name: "Brand", value: "Fitbit" },
      { name: "Remaining Items", value: "70" },
      { name: "Battery Life", value: "Up to 7 Days" },
      { name: "Water Resistance", value: "Up to 50m" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Fitbit/51q7FojdicL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Fitbit/41hWgjpl0zL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Fitbit/51CGeUpDK9L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },
  {
    id: "prod_42",
    product_id: "prod_42",
    name: "Withings Body+ Digital Wi-Fi Smart Scale",
    product_name: "Withings Body+ Digital Wi-Fi Smart Scale",
    sku: "WITHINGSCALE",
    permalink: "withings-body-plus-smart-scale",
    quantity: 65,
    createdAt: "2024-11-12",
    price: {
      raw: 99,
      formatted: "99.00",
      formatted_with_symbol: "$99.00",
      formatted_with_code: "99.00 USD",
    },
    line_total: {
      raw: 99,
      formatted: "99.00",
      formatted_with_symbol: "$99.00",
      formatted_with_code: "99.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_42",
      sku: "WITHINGSCALE_WHITE",
      description:
        "The Withings Body+ Digital Wi-Fi Smart Scale is a comprehensive device that measures weight, body fat, water percentage, and muscle mass. With seamless Wi-Fi connectivity, this smart scale syncs data with health apps, allowing users to track and analyze body metrics over time. Designed for all family members, it provides personalized health insights in a compact, sleek design.",
      inventory: 50,
      price: {
        raw: 99,
        formatted: "99.00",
        formatted_with_symbol: "$99.00",
        formatted_with_code: "99.00 USD",
      },
      is_valid: true,
      brand: "Withings",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Type", value: "Smart Scale" },
      { name: "Brand", value: "Withings" },
      { name: "Remaining Items", value: "50" },
      { name: "Connectivity", value: "Wi-Fi" },
      { name: "Metrics Measured", value: "Weight, Body Fat, Muscle Mass" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Smart-Scal/61utDqbVEaL._SX522_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Smart-Scal/61gtN3HaGQL._SX522_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Smart-Scal/61OyUXnPRcL._SX522_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },
  {
    id: "prod_43",
    product_id: "prod_43",
    name: "Theragun Elite Percussive Therapy Device",
    product_name: "Theragun Elite Percussive Therapy Device",
    sku: "THERAGUNELITE",
    permalink: "theragun-elite-percussive-therapy-device",
    quantity: 40,
    createdAt: "2024-11-15",
    price: {
      raw: 399,
      formatted: "399.00",
      formatted_with_symbol: "$399.00",
      formatted_with_code: "399.00 USD",
    },
    line_total: {
      raw: 399,
      formatted: "399.00",
      formatted_with_symbol: "$399.00",
      formatted_with_code: "399.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_43",
      sku: "THERAGUNELITE_BLACK",
      description:
        "The Theragun Elite Percussive Therapy Device is designed for deep muscle treatment to relieve pain and improve recovery. This sleek black model delivers precise, powerful strokes to target sore areas effectively. It’s equipped with multiple speed settings and ergonomic design, making it a reliable tool for athletes and wellness enthusiasts alike. With a quiet operation, the Theragun Elite ensures a comfortable, uninterrupted experience.",
      inventory: 35,
      price: {
        raw: 399,
        formatted: "399.00",
        formatted_with_symbol: "$399.00",
        formatted_with_code: "399.00 USD",
      },
      is_valid: true,
      brand: "Theragun",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Type", value: "Percussive Therapy Device" },
      { name: "Brand", value: "Theragun" },
      { name: "Remaining Items", value: "35" },
      { name: "Battery Life", value: "120 Minutes" },
      { name: "Noise Level", value: "QuietForce Technology" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Therapy-Device/51VQlFR4o+L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Therapy-Device/61tsV040OSL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Therapy-Device/71Bk1TrbByL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_44",
    product_id: "prod_44",
    name: "Apple Watch Series 7",
    product_name: "Apple Watch Series 7",
    sku: "APPLEWATCH7",
    permalink: "apple-watch-series-7",
    quantity: 90,
    createdAt: "2024-11-18",
    price: {
      raw: 429,
      formatted: "429.00",
      formatted_with_symbol: "$429.00",
      formatted_with_code: "429.00 USD",
    },
    line_total: {
      raw: 429,
      formatted: "429.00",
      formatted_with_symbol: "$429.00",
      formatted_with_code: "429.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_44",
      sku: "APPLEWATCH7_SILVER",
      description:
        "The Apple Watch Series 7 in Silver brings advanced health and fitness tracking to your wrist. It features a larger, more durable display and offers various tools for tracking heart rate, blood oxygen levels, and daily activity. With a sleek, customizable design, the Series 7 combines functionality and style, supporting users in achieving their wellness goals with ease.",
      inventory: 80,
      price: {
        raw: 429,
        formatted: "429.00",
        formatted_with_symbol: "$429.00",
        formatted_with_code: "429.00 USD",
      },
      is_valid: true,
      brand: "Apple",
      color: "Silver",
    },
    variant_group: [
      { name: "Color", value: "Silver" },
      { name: "Type", value: "Smartwatch" },
      { name: "Brand", value: "Apple" },
      { name: "Remaining Items", value: "80" },
      { name: "Display Size", value: "1.9 inches" },
      { name: "Water Resistance", value: "Up to 50m" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Apple-Watch/71S6CQmCTsL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Apple-Watch/71QPcQ4B53L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Apple-Watch/71S6CQmCTsL._AC_SX679_dd.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_45",
    product_id: "prod_45",
    name: "Philips Sonicare DiamondClean Electric Toothbrush",
    product_name: "Philips Sonicare DiamondClean Electric Toothbrush",
    sku: "SONICARETOOTHBRUSH",
    permalink: "philips-sonicare-diamondclean-toothbrush",
    quantity: 70,
    createdAt: "2024-11-20",
    price: {
      raw: 229,
      formatted: "229.00",
      formatted_with_symbol: "$229.00",
      formatted_with_code: "229.00 USD",
    },
    line_total: {
      raw: 229,
      formatted: "229.00",
      formatted_with_symbol: "$229.00",
      formatted_with_code: "229.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_45",
      sku: "SONICARETOOTHBRUSH_WHITE",
      description:
        "The Philips Sonicare DiamondClean Electric Toothbrush in White offers advanced sonic technology to provide a deep clean, removing up to 10x more plaque than a manual toothbrush. With multiple cleaning modes and a sleek, ergonomic design, it helps users achieve optimal oral health. Its long-lasting battery and stylish charging glass make it a convenient and stylish addition to any bathroom.",
      inventory: 60,
      price: {
        raw: 229,
        formatted: "229.00",
        formatted_with_symbol: "$229.00",
        formatted_with_code: "229.00 USD",
      },
      is_valid: true,
      brand: "Philips",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Type", value: "Electric Toothbrush" },
      { name: "Brand", value: "Philips" },
      { name: "Remaining Items", value: "60" },
      { name: "Battery Life", value: "3 Weeks" },
      { name: "Modes", value: "Clean, White, Gum Care" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Electric-Toothbrush/81xMbinaiTL._AC_SX679_ (1).jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Electric-Toothbrush/616033c8WBL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Electric-Toothbrush/81xMbinaiTL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },
  {
    id: "prod_46",
    product_id: "prod_46",
    name: "Beurer Infrared Heat Lamp",
    product_name: "Beurer Infrared Heat Lamp",
    sku: "BEURERHEATLAMP",
    permalink: "beurer-infrared-heat-lamp",
    quantity: 55,
    createdAt: "2024-11-22",
    price: {
      raw: 45,
      formatted: "45.00",
      formatted_with_symbol: "$45.00",
      formatted_with_code: "45.00 USD",
    },
    line_total: {
      raw: 45,
      formatted: "45.00",
      formatted_with_symbol: "$45.00",
      formatted_with_code: "45.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_46",
      sku: "BEURERHEATLAMP_WHITE",
      description:
        "The Beurer Infrared Heat Lamp provides soothing heat for relief from muscle pain and respiratory discomfort. Featuring a compact design and adjustable tilt angle, it directs heat precisely where needed, making it ideal for targeted therapy sessions. This device combines durability with effective performance for home use.",
      inventory: 45,
      price: {
        raw: 45,
        formatted: "45.00",
        formatted_with_symbol: "$45.00",
        formatted_with_code: "45.00 USD",
      },
      is_valid: true,
      brand: "Beurer",
      color: "White",
    },
    variant_group: [
      { name: "Color", value: "White" },
      { name: "Type", value: "Heat Lamp" },
      { name: "Brand", value: "Beurer" },
      { name: "Remaining Items", value: "45" },
      { name: "Power", value: "150W" },
      { name: "Adjustable Tilt", value: "Yes" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Beurer/61V7KViRZDL.__AC_SY445_SX342_QL70_FMwebp_.webp",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Beurer//71KO7WgZ65L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_47",
    product_id: "prod_47",
    name: "Omron TENS Therapy Pain Relief Device",
    product_name: "Omron TENS Therapy Pain Relief Device",
    sku: "OMRONTENS",
    permalink: "omron-tens-therapy-pain-relief-device",
    quantity: 50,
    createdAt: "2024-11-24",
    price: {
      raw: 89,
      formatted: "89.00",
      formatted_with_symbol: "$89.00",
      formatted_with_code: "89.00 USD",
    },
    line_total: {
      raw: 89,
      formatted: "89.00",
      formatted_with_symbol: "$89.00",
      formatted_with_code: "89.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_47",
      sku: "OMRONTENS_BLACK",
      description:
        "The Omron TENS Therapy Pain Relief Device uses transcutaneous electrical nerve stimulation to relieve pain in targeted areas. Compact and user-friendly, it’s designed for at-home use to reduce muscle and joint discomfort. This black model features multiple intensity levels for customizable treatment sessions.",
      inventory: 40,
      price: {
        raw: 89,
        formatted: "89.00",
        formatted_with_symbol: "$89.00",
        formatted_with_code: "89.00 USD",
      },
      is_valid: true,
      brand: "Omron",
      color: "Black",
    },
    variant_group: [
      { name: "Color", value: "Black" },
      { name: "Type", value: "TENS Therapy Device" },
      { name: "Brand", value: "Omron" },
      { name: "Remaining Items", value: "40" },
      { name: "Intensity Levels", value: "10" },
      { name: "Battery Powered", value: "Yes" },
    ],
    image: [
      {
        type: "image",
        source: "/images/tens/61dWH+Ij5xL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/tens/61K2IPY7isL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/tens/71p5QfpWeUL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_48",
    product_id: "prod_48",
    name: "Nature Made Vitamin D3 5000 IU Softgels",
    product_name: "Nature Made Vitamin D3 5000 IU Softgels",
    sku: "NATMADEVITD3",
    permalink: "nature-made-vitamin-d3-5000-iu-softgels",
    quantity: 150,
    createdAt: "2024-11-26",
    price: {
      raw: 12,
      formatted: "12.00",
      formatted_with_symbol: "$12.00",
      formatted_with_code: "12.00 USD",
    },
    line_total: {
      raw: 12,
      formatted: "12.00",
      formatted_with_symbol: "$12.00",
      formatted_with_code: "12.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_48",
      sku: "NATMADEVITD3_YELLOW",
      description:
        "Nature Made Vitamin D3 5000 IU Softgels provide an essential nutrient that supports bone, teeth, and immune health. This high-potency supplement helps in calcium absorption for stronger bones, especially for those with limited sunlight exposure.",
      inventory: 130,
      price: {
        raw: 12,
        formatted: "12.00",
        formatted_with_symbol: "$12.00",
        formatted_with_code: "12.00 USD",
      },
      is_valid: true,
      brand: "Nature Made",
      color: "Yellow",
    },
    variant_group: [
      { name: "Color", value: "Yellow" },
      { name: "Type", value: "Vitamin Supplement" },
      { name: "Brand", value: "Nature Made" },
      { name: "Remaining Items", value: "130" },
      { name: "Serving Size", value: "1 Softgel" },
      { name: "Dosage", value: "5000 IU" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Vitamin/71oap6TvP9L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Vitamin/71yLBvKwQFL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_49",
    product_id: "prod_49",
    name: "Purell Advanced Hand Sanitizer",
    product_name: "Purell Advanced Hand Sanitizer",
    sku: "PURELLSANITIZER",
    permalink: "purell-advanced-hand-sanitizer",
    quantity: 200,
    createdAt: "2024-11-28",
    price: {
      raw: 5,
      formatted: "5.00",
      formatted_with_symbol: "$5.00",
      formatted_with_code: "5.00 USD",
    },
    line_total: {
      raw: 5,
      formatted: "5.00",
      formatted_with_symbol: "$5.00",
      formatted_with_code: "5.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_49",
      sku: "PURELLSANITIZER_CLEAR",
      description:
        "Purell Advanced Hand Sanitizer kills 99.9% of germs and is a convenient solution for maintaining hygiene on the go. Its clear gel formula is enriched with moisturizers, leaving hands feeling soft without any sticky residue.",
      inventory: 180,
      price: {
        raw: 5,
        formatted: "5.00",
        formatted_with_symbol: "$5.00",
        formatted_with_code: "5.00 USD",
      },
      is_valid: true,
      brand: "Purell",
      color: "Clear",
    },
    variant_group: [
      { name: "Color", value: "Clear" },
      { name: "Type", value: "Hand Sanitizer" },
      { name: "Brand", value: "Purell" },
      { name: "Remaining Items", value: "180" },
      { name: "Alcohol Content", value: "70%" },
      { name: "Volume", value: "8 fl oz" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Purell/61vst7nzYoL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Purell/514oZdGmzAL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Purell/41dwzdydS4L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "https://example.com/products/purell_hand_sanitizer_back.jpg",
        asset_id: "asset_49_2",
      },
    ],
    category_id: "cat_5",
  },

  {
    id: "prod_50",
    product_id: "prod_50",
    name: "DeWalt 20V MAX Cordless Drill",
    product_name: "DeWalt 20V MAX Cordless Drill",
    sku: "DEWALTDRILL",
    permalink: "dewalt-20v-max-cordless-drill",
    quantity: 100,
    createdAt: "2024-11-30",
    price: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    line_total: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_50",
      sku: "DEWALTDRILL_YELLOW",
      description:
        "The DeWalt 20V MAX Cordless Drill is built for power and performance, ideal for various drilling and fastening applications. Equipped with a high-speed transmission, this yellow drill ensures precision and efficiency. Its compact and lightweight design makes it easy to handle, perfect for both professionals and DIY enthusiasts.",
      inventory: 80,
      price: {
        raw: 129,
        formatted: "129.00",
        formatted_with_symbol: "$129.00",
        formatted_with_code: "129.00 USD",
      },
      is_valid: true,
      brand: "DeWalt",
      color: "Yellow",
    },
    variant_group: [
      { name: "Color", value: "Yellow" },
      { name: "Type", value: "Cordless Drill" },
      { name: "Brand", value: "DeWalt" },
      { name: "Remaining Items", value: "80" },
      { name: "Battery Voltage", value: "20V" },
      { name: "Chuck Size", value: "1/2 inch" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Drill/81I3hQkKnQL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Drill/819Y4EUDGBL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Drill/71EnMZtxS4L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_6",
  },
  {
    id: "prod_51",
    product_id: "prod_51",
    name: "Bosch Professional Laser Measure",
    product_name: "Bosch Professional Laser Measure",
    sku: "BOSCHLASER",
    permalink: "bosch-professional-laser-measure",
    quantity: 120,
    createdAt: "2024-12-02",
    price: {
      raw: 99,
      formatted: "99.00",
      formatted_with_symbol: "$99.00",
      formatted_with_code: "99.00 USD",
    },
    line_total: {
      raw: 99,
      formatted: "99.00",
      formatted_with_symbol: "$99.00",
      formatted_with_code: "99.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_51",
      sku: "BOSCHLASER_BLUE",
      description:
        "The Bosch Professional Laser Measure provides quick, precise measurements up to 165 feet. Featuring a compact design and user-friendly interface, it’s ideal for contractors and DIY projects alike. The blue laser measure offers accuracy and reliability for a variety of applications.",
      inventory: 100,
      price: {
        raw: 99,
        formatted: "99.00",
        formatted_with_symbol: "$99.00",
        formatted_with_code: "99.00 USD",
      },
      is_valid: true,
      brand: "Bosch",
      color: "Blue",
    },
    variant_group: [
      { name: "Color", value: "Blue" },
      { name: "Type", value: "Laser Measure" },
      { name: "Brand", value: "Bosch" },
      { name: "Remaining Items", value: "100" },
      { name: "Range", value: "165 ft" },
      { name: "Accuracy", value: "±1/16 inch" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Laser-Measure/61DpSo4Ir9L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Laser-Measure/61DhTcssl2L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Laser-Measure/51uXI4i7fWL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_6",
  },

  {
    id: "prod_52",
    product_id: "prod_52",
    name: "Makita Cordless Angle Grinder",
    product_name: "Makita Cordless Angle Grinder",
    sku: "MAKITAANGLEGRINDER",
    permalink: "makita-cordless-angle-grinder",
    quantity: 85,
    createdAt: "2024-12-04",
    price: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    line_total: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_52",
      sku: "MAKITAANGLEGRINDER_BLUE",
      description:
        "The Makita Cordless Angle Grinder delivers powerful cutting and grinding in a lightweight, compact design. Ideal for on-the-go applications, it’s powered by a 4.0 Ah battery for extended run time. The blue model features safety mechanisms to prevent accidental start-up and enhance user safety.",
      inventory: 70,
      price: {
        raw: 149,
        formatted: "149.00",
        formatted_with_symbol: "$149.00",
        formatted_with_code: "149.00 USD",
      },
      is_valid: true,
      brand: "Makita",
      color: "Blue",
    },
    variant_group: [
      { name: "Color", value: "Blue" },
      { name: "Type", value: "Angle Grinder" },
      { name: "Brand", value: "Makita" },
      { name: "Remaining Items", value: "70" },
      { name: "Battery Capacity", value: "4.0 Ah" },
      { name: "Disc Diameter", value: "4-1/2 inches" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Makita/61jd4qsb83L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Makita/71UyKQHReYL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Makita/61gS8BkcCCL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_6",
  },
  {
    id: "prod_53",
    product_id: "prod_53",
    name: "Stanley 65-Piece Homeowner's Tool Kit",
    product_name: "Stanley 65-Piece Homeowner's Tool Kit",
    sku: "STANLEYTOOLKIT",
    permalink: "stanley-65-piece-homeowners-tool-kit",
    quantity: 150,
    createdAt: "2024-12-06",
    price: {
      raw: 59,
      formatted: "59.00",
      formatted_with_symbol: "$59.00",
      formatted_with_code: "59.00 USD",
    },
    line_total: {
      raw: 59,
      formatted: "59.00",
      formatted_with_symbol: "$59.00",
      formatted_with_code: "59.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_53",
      sku: "STANLEYTOOLKIT_YELLOW",
      description:
        "The Stanley 65-Piece Homeowner's Tool Kit is a comprehensive set ideal for general household repairs. Contained in a durable yellow case, it includes screwdrivers, a hammer, wrenches, and more. Each tool is made with quality materials, ensuring longevity and reliability.",
      inventory: 120,
      price: {
        raw: 59,
        formatted: "59.00",
        formatted_with_symbol: "$59.00",
        formatted_with_code: "59.00 USD",
      },
      is_valid: true,
      brand: "Stanley",
      color: "Yellow",
    },
    variant_group: [
      { name: "Color", value: "Yellow" },
      { name: "Type", value: "Tool Kit" },
      { name: "Brand", value: "Stanley" },
      { name: "Remaining Items", value: "120" },
      { name: "Number of Pieces", value: "65" },
      { name: "Storage Case", value: "Included" },
    ],
    image: [
      {
        type: "image",
        source: "/images/Stanley-kit/719-r5DZ38L._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Stanley-kit/71kzHfFW6pL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
      {
        type: "image",
        source: "/images/Stanley-kit/71+v7BBM4mL._AC_SX679_.jpg",
        asset_id: "asset_39_2",
      },
    ],
    category_id: "cat_6",
  },

  {
    id: "prod_54",
    product_id: "prod_54",
    name: "Black+Decker Corded Electric Hedge Trimmer",
    product_name: "Black+Decker Corded Electric Hedge Trimmer",
    sku: "BLACKDECKERHEDGE",
    permalink: "black-decker-corded-electric-hedge-trimmer",
    quantity: 60,
    createdAt: "2024-12-08",
    price: {
      raw: 79,
      formatted: "79.00",
      formatted_with_symbol: "$79.00",
      formatted_with_code: "79.00 USD",
    },
    line_total: {
      raw: 79,
      formatted: "79.00",
      formatted_with_symbol: "$79.00",
      formatted_with_code: "79.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_54",
      sku: "BLACKDECKERHEDGE_ORANGE",
      description:
        "The Black+Decker Corded Electric Hedge Trimmer offers powerful trimming capabilities for easy maintenance of hedges and shrubs. Lightweight and equipped with a safety lock, this orange trimmer provides user-friendly handling and precision.",
      inventory: 50,
      price: {
        raw: 79,
        formatted: "79.00",
        formatted_with_symbol: "$79.00",
        formatted_with_code: "79.00 USD",
      },
      is_valid: true,
      brand: "Black+Decker",
      color: "Orange",
    },
    variant_group: [
      { name: "Color", value: "Orange" },
      { name: "Type", value: "Electric Hedge Trimmer" },
      { name: "Brand", value: "Black+Decker" },
      { name: "Remaining Items", value: "50" },
      { name: "Power Source", value: "Corded Electric" },
      { name: "Blade Length", value: "22 inches" },
    ],
    image: [
      {
        type: "image",
        source:
          "../../public/images/deckerrrrrr/41OHdQhjj0S.__AC_SY300_SX300_QL70_FMwebp_.webp",
        asset_id: "asset_54_1",
      },
      {
        type: "image",
        source: "../../public/images/deckerrrrrr/510A54hJKgS._AC_SX679_.jpg",
        asset_id: "asset_54_1",
      },
      {
        type: "image",
        source: "../../public/images/deckerrrrrr/81jqurpHtWS._AC_SX679_.jpg",
        asset_id: "asset_54_1",
      },
    ],
    category_id: "cat_6",
  },
  {
    id: "prod_55",
    product_id: "prod_55",
    name: "Milwaukee M18 FUEL Cordless Impact Wrench",
    product_name: "Milwaukee M18 FUEL Cordless Impact Wrench",
    sku: "MILWAUKEEWRENCH",
    permalink: "milwaukee-m18-fuel-cordless-impact-wrench",
    quantity: 70,
    createdAt: "2024-12-10",
    price: {
      raw: 249,
      formatted: "249.00",
      formatted_with_symbol: "$249.00",
      formatted_with_code: "249.00 USD",
    },
    line_total: {
      raw: 249,
      formatted: "249.00",
      formatted_with_symbol: "$249.00",
      formatted_with_code: "249.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_55",
      sku: "MILWAUKEEWRENCH_RED",
      description:
        "The Milwaukee M18 FUEL Cordless Impact Wrench is a high-performance tool for heavy-duty tasks, delivering maximum torque with its robust design. The red model is compact yet powerful, suitable for both professional and home use.",
      inventory: 60,
      price: {
        raw: 249,
        formatted: "249.00",
        formatted_with_symbol: "$249.00",
        formatted_with_code: "249.00 USD",
      },
      is_valid: true,
      brand: "Milwaukee",
      color: "Red",
    },
    variant_group: [
      { name: "Color", value: "Red" },
      { name: "Type", value: "Impact Wrench" },
      { name: "Brand", value: "Milwaukee" },
      { name: "Remaining Items", value: "60" },
      { name: "Battery Voltage", value: "18V" },
      { name: "Max Torque", value: "1,000 ft-lbs" },
    ],
    image: [
      {
        type: "image",
        source: "../../public/images/Milwaukee/51NYVksCPBL._AC_SX679_.jpg",
        asset_id: "asset_55_1",
      },
      {
        type: "image",
        source: "../../public/images/Milwaukee/51Kb04rnxmL._AC_SX679_.jpg",
        asset_id: "asset_55_1",
      },
    ],
    category_id: "cat_6",
  },
  {
    id: "prod_56",
    product_id: "prod_56",
    name: "Ryobi 18V Cordless String Trimmer",
    product_name: "Ryobi 18V Cordless String Trimmer",
    sku: "RYOBITRIMMER",
    permalink: "ryobi-18v-cordless-string-trimmer",
    quantity: 90,
    createdAt: "2024-12-12",
    price: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    line_total: {
      raw: 129,
      formatted: "129.00",
      formatted_with_symbol: "$129.00",
      formatted_with_code: "129.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_56",
      sku: "RYOBITRIMMER_GREEN",
      description:
        "The Ryobi 18V Cordless String Trimmer offers convenience and performance with its battery-powered design. Lightweight and easy to use, this green trimmer is ideal for maintaining a neat lawn without the hassle of cords.",
      inventory: 70,
      price: {
        raw: 129,
        formatted: "129.00",
        formatted_with_symbol: "$129.00",
        formatted_with_code: "129.00 USD",
      },
      is_valid: true,
      brand: "Ryobi",
      color: "Green",
    },
    variant_group: [
      { name: "Color", value: "Green" },
      { name: "Type", value: "String Trimmer" },
      { name: "Brand", value: "Ryobi" },
      { name: "Remaining Items", value: "70" },
      { name: "Battery Voltage", value: "18V" },
      { name: "Cutting Width", value: "10 inches" },
    ],
    image: [
      {
        type: "image",
        source: "../../public/images/Cordlessr/719PREZZ4PL._AC_SX679_.jpg",
        asset_id: "asset_56_1",
      },
      {
        type: "image",
        source: "../../public/images/Cordlessr/817S-AzeewL._AC_SX679_.jpg",
        asset_id: "asset_56_2",
      },
    ],
    category_id: "cat_6",
  },
  {
    id: "prod_57",
    product_id: "prod_57",
    name: "Craftsman Mechanics Tool Set, 230-Piece",
    product_name: "Craftsman Mechanics Tool Set, 230-Piece",
    sku: "CRAFTSMANSET",
    permalink: "craftsman-mechanics-tool-set-230-piece",
    quantity: 110,
    createdAt: "2024-12-14",
    price: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    line_total: {
      raw: 149,
      formatted: "149.00",
      formatted_with_symbol: "$149.00",
      formatted_with_code: "149.00 USD",
    },
    is_valid: true,

    variant: {
      id: "var_57",
      sku: "CRAFTSMANSET_RED",
      description:
        "The Craftsman 230-Piece Mechanics Tool Set includes a wide variety of sockets, wrenches, and accessories for various repair tasks. The red tool set is crafted for durability, making it a valuable asset for any homeowner or mechanic.",
      inventory: 90,
      price: {
        raw: 149,
        formatted: "149.00",
        formatted_with_symbol: "$149.00",
        formatted_with_code: "149.00 USD",
      },
      is_valid: true,
      brand: "Craftsman",
      color: "Red",
    },
    variant_group: [
      { name: "Color", value: "Red" },
      { name: "Type", value: "Mechanics Tool Set" },
      { name: "Brand", value: "Craftsman" },
      { name: "Remaining Items", value: "90" },
      { name: "Number of Pieces", value: "230" },
      { name: "Storage Case", value: "Included" },
    ],
    image: [
      {
        type: "image",
        source: "../../public/images/Craftsman/71ut+9gWGyL._AC_SY879_.jpg",
        asset_id: "asset_57_1",
      },

      {
        type: "image",
        source: "../../public/images/Craftsman/81P2Dq9KCAL._AC_SX679_.jpg",
        asset_id: "asset_57_1",
      },
      {
        type: "image",
        source: "../../public/images/Craftsman/71XqeO3fD6L._AC_SX679_.jpg",
        asset_id: "asset_57_1",
      },
    ],
    category_id: "cat_6",
  },
];
