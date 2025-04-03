export interface Watch {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  productDetails: string;
  warranty: number;
  stock: number;
  imageUrl: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  watches: Watch[];
}
