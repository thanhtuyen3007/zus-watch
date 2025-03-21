import { v4 as uuidv4 } from "uuid";
import images from "./assets";

export type WatchProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type CollectionItemType = {
  id: string;
  title: string;
  link: string;
  image: string;
  products: WatchProduct[];
};

export type Collections = {
  classic: CollectionItemType;
  professionals: CollectionItemType;
  watch_by_theme: CollectionItemType;
};

export const dataCollections: Collections = {
  classic: {
    id: uuidv4(),
    title: "Classic",
    link: "/classic",
    image: images.classic,
    products: [
      {
        id: uuidv4(),
        name: "Classic Watch 1",
        price: 199.99,
        description: "A timeless classic watch.",
        image: "classic1.jpg",
      },
      {
        id: uuidv4(),
        name: "Classic Watch 2",
        price: 249.99,
        description: "Elegant and sophisticated.",
        image: "classic2.jpg",
      },
    ],
  },
  professionals: {
    id: uuidv4(),
    title: "Professionals",
    link: "/professionals",
    image: images.professional,
    products: [
      {
        id: uuidv4(),
        name: "Professional Watch 1",
        price: 299.99,
        description: "Perfect for professionals.",
        image: "professional1.jpg",
      },
      {
        id: uuidv4(),
        name: "Professional Watch 2",
        price: 349.99,
        description: "Stylish and functional.",
        image: "professional2.jpg",
      },
    ],
  },
  watch_by_theme: {
    id: uuidv4(),
    title: "Watch by Theme",
    link: "/watch_by_theme",
    image: images.theme,
    products: [
      {
        id: uuidv4(),
        name: "Sport Watch",
        price: 199.99,
        description: "Ideal for sports enthusiasts.",
        image: "sport.jpg",
      },
      {
        id: uuidv4(),
        name: "Luxury Watch",
        price: 499.99,
        description: "Luxury at its finest.",
        image: "luxury.jpg",
      },
    ],
  },
};
