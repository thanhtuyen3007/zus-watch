import { v4 as uuid } from "uuid";
export const Products = [
  {
    id: "c1",
    name: "classics",
    description: "A collection of classic watches",
    image:
      "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
    watches: [
      {
        id: uuid(),
        name: "Classic Watch",
        price: 199.99,
        description: "A classic watch with a timeless design.",
        productDetails:
          " Stainless steel case, leather strap, water-resistant.",
        warranty: "2",
        stock: 50,
        category: "classics",
        imageUrl:
          "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
      },
    ],
  },
  {
    id: "c2",
    name: "Contemporary",
    description: "Delivering elegance and sophistication.",
    image:
      "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
    watches: [
      {
        id: uuid(),
        name: "Contemporary Watch",
        price: 299.99,
        description: "A Contemporary watch with advanced features.",
        productDetails:
          " Stainless steel case, leather strap, water-resistant.",
        warranty: "2",
        stock: 50,
        category: "Contemporary",
        imageUrl:
          "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
      },
    ],
  },
  {
    id: "c4",
    name: "theme",
    description: "A collection of themed watches",
    image:
      "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
    watches: [
      {
        id: uuid(),
        name: "Themed Watch",
        price: 249.99,
        description: "A themed watch with a unique design.",
        productDetails:
          " Stainless steel case, leather strap, water-resistant.",
        warranty: "2",
        stock: 50,
        category: "theme",
        imageUrl:
          "https://res.cloudinary.com/djka3a0ah/image/upload/v1743328206/pvhmedgxj9syqo0upt9f.jpg",
      },
    ],
  },
];
