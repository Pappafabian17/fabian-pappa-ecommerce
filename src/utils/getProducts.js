const products = [
  {
    id: 1,
    name: "Mate Imperial Uruguayo",
    price: 1500,
    category: "Mate",
    img: "https://losfenicios.com.ar/productos/cache/15/1d/151d6f10b26cae16b1e1ea13c78ff093.webp",
    stock: 10,
    description:
      "Mate de madera de palo santo con virola de alpaca. Diseño tradicional uruguayo. Ideal para disfrutar un buen mate en compañía.",
  },
  {
    id: 13,
    name: "Termo Stanley Classic 1.4 Litros",
    price: 8000,
    category: "Termo",
    img: "https://www.dianaoutdoor.com.ar/cdn/shop/products/46916-3_480x480.png?v=1688734153",
    stock: 20,
    description:
      "Termo de acero inoxidable con tapa cebadora. Mantiene la temperatura del agua caliente durante horas. Ideal para llevar a tus viajes y aventuras.",
  },
  {
    id: 41,
    name: "Bombilla Pico de Loro Alpaca",
    price: 500,
    category: "Bombilla",
    img: "https://www.matespalocruz.com.ar/media/productos/bombilla-pico-de-loro-cincelada-de-alpaca-uruguaya-0-dwbqtn10.png",
    stock: 50,
    description:
      "Bombilla de alpaca con pico de loro. Diseño tradicional argentino. Fácil de limpiar y de usar.",
  },
  {
    id: 51,
    name: "Mate  de aluminio",
    price: 2000,
    category: "Mate",
    img: "https://estiloaustral.com/wp-content/uploads/2023/03/MATE0019-MATE-NEGRO-MATE-Y-MATE0020-MATE-BLANCO-BRILLOSO.png.webp",
    stock: 15,
    description:
      "Mate de aluminio con diseño ergonómico. Apto para lavavajillas y microondas. Ideal para usar en casa o en la oficina.",
  },
  {
    id: 61,
    name: "Termo Lumilagro 1 Litro",
    price: 4500,
    category: "Termo",
    img: "https://casawurm.com.ar/wp-content/uploads/2024/01/IMG-233761A.png",
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
