interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Normal Cookies",
    price: 2.55,
    image:
      "https://t4.ftcdn.net/jpg/06/76/66/39/360_F_676663959_jcE1oIYNF9qgx7FTSSMy6DHxsRkFHTyO.jpg",
  },
  {
    id: 2,
    title: "Dark Cookies",
    price: 4.66,
    image:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8yOV90b3Bfdmlld19waG90b19vZl9kYXJrX2Nob2NvbGF0ZV9zb2Z0X2Nvb2tpZV8wNDc3OTEwNy1hMWZjLTQ5N2MtOTRhMC0wM2UzMDVmYTUxOTcucG5n.png",
  },
  {
    id: 3,
    title: "blue Cookies",
    price: 1.59,
    image:
      "https://png.pngtree.com/png-clipart/20230916/original/pngtree-black-and-blue-cookies-isolated-design-clipart-vector-png-image_12248504.png",
  },
  {
    id: 4,
    title: "green Cookies",
    price: 6,
    image:
      "https://png.pngtree.com/png-vector/20201222/ourmid/pngtree-five-stacked-green-cookies-png-image_2630518.jpg",
  },
];

export default products;

export { Product };
