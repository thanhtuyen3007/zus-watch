export type Watch = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

// Define the structure of the collections
export type Collections = {
  classic: Watch[];
  professionals: Watch[];
  watch_by_theme: Watch[];
};

export type Data = {
  collections: Collections;
};

// Example data
const data: Data = {
  collections: {
    classic: [
      {
        id: 1,
        name: "Classic Watch 1",
        price: 199.99,
        description: "A timeless classic watch.",
        image: "classic1.jpg",
      },
      {
        id: 2,
        name: "Classic Watch 2",
        price: 249.99,
        description: "Elegant and sophisticated.",
        image: "classic2.jpg",
      },
    ],
    professionals: [
      {
        id: 1,
        name: "Professional Watch 1",
        price: 299.99,
        description: "Perfect for professionals.",
        image: "professional1.jpg",
      },
      {
        id: 2,
        name: "Professional Watch 2",
        price: 349.99,
        description: "Stylish and functional.",
        image: "professional2.jpg",
      },
    ],
    watch_by_theme: [
      {
        id: 1,
        name: "Sport Watch",
        price: 199.99,
        description: "Ideal for sports enthusiasts.",
        image: "sport.jpg",
      },
      {
        id: 2,
        name: "Luxury Watch",
        price: 499.99,
        description: "Luxury at its finest.",
        image: "luxury.jpg",
      },
    ],
  }
};

export default data;
