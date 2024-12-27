import images from "./assets";

export type Watch = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

// Define the structure of the collections
export type CollectionItemType = {
  id: number;
  title: string;
  link: string;
  image: string;
  products: Watch[];
};

export type Collections = {
  classic: CollectionItemType;
  professionals: CollectionItemType;
  watch_by_theme: CollectionItemType;
};

export type Data = {
  collections: Collections;
};

// Example data
const data: Data = {
  collections: {
    classic: {
      id: 1,
      title: "Classic",
      link: "/classic",
      image: images.classic,
      products: [
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
    },
    professionals: {
      id: 2,
      title: "Professionals",
      link: "/professionals",
      image: images.professional,
      products: [
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
    },
    watch_by_theme: {
      id: 3,
      title: "Watch by Theme",
      link: "/watch_by_theme",
      image: images.theme,
      products: [
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
    },
  }
};

export default data;
