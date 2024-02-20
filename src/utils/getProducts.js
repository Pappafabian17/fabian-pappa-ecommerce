const products = [
  {
    id: 1,
    name: "Mate Imperial Uruguayo",
    price: 1500,
    category: "Mate",
    img: "https://cdn.shopify.com/s/files/1/0532/1544/products/Mate-Imperial-Uruguayo_grande.jpg?v=1641149102",
    stock: 10,
    description:
      "Mate de madera de palo santo con virola de alpaca. Diseño tradicional uruguayo. Ideal para disfrutar un buen mate en compañía.",
  },
  {
    id: 13,
    name: "Termo Stanley Classic 1.4 Litros",
    price: 8000,
    category: "Termo",
    img: "https://www.stanleyargentina.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/stanley-classic-botella-mate-1-4-lts-verde-10-01500-022_1.jpg",
    stock: 20,
    description:
      "Termo de acero inoxidable con tapa cebadora. Mantiene la temperatura del agua caliente durante horas. Ideal para llevar a tus viajes y aventuras.",
  },
  {
    id: 41,
    name: "Bombilla Pico de Loro Alpaca",
    price: 500,
    category: "Bombilla",
    img: "https://www.lacasadelmate.com.ar/wp-content/uploads/2020/06/bombilla-pico-de-loro-alpaca-artesanal-1.jpg",
    stock: 50,
    description:
      "Bombilla de alpaca con pico de loro. Diseño tradicional argentino. Fácil de limpiar y de usar.",
  },
  {
    id: 51,
    name: "Mate Matero Palermo",
    price: 2000,
    category: "Mate",
    img: "https://cdn.shopify.com/s/files/1/0057/9943/products/Mate-Matero-Palermo_grande.jpg?v=1607441414",
    stock: 15,
    description:
      "Mate de silicona con diseño ergonómico. Apto para lavavajillas y microondas. Ideal para usar en casa o en la oficina.",
  },
  {
    id: 61,
    name: "Termo Lumilagro 1 Litro",
    price: 4500,
    category: "Termo",
    img: "https://www.lumilagro.com.ar/wp-content/uploads/2022/03/termo-1-litro-lumilagro-1.jpg",
    stock: 30,
    description:
      "Termo de acero inoxidable con doble pared. Mantiene la temperatura del agua caliente o fría durante horas. Diseño moderno y elegante.",
  },
];

export default async function getProducts() {
  return await new Promise((response) => {
    setTimeout(() => {
      response(products);
    }, 600);
  });
}
