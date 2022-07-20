export interface IUiState {
  isModalOpen: boolean;
  isMobileNavOpen: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  creator: string;
  description: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  additionalImages: string[];
  onlineOrdering: boolean;
}

export interface IProductState {
  products: IProduct[];
  featuredProducts: IProduct[];
  filteredProducts: IProduct[];
  query: string;
}

export interface ICartItem {
  item: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
