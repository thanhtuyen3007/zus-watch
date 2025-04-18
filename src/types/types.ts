// Add all shared types and interfaces here

// Example interface

export interface WatchType {
  id: string;
  name: string;
  price: number;
  description: string;
  productDetails: string;
  warranty: string;
  stock: number;
  category: string;
  imageUrl: string;
}

export interface CollectionType {
  id: string;
  name: string;
  description: string;
  image: string;
  watches: WatchType[];
}
