export interface IUiState {
  isModalOpen: boolean;
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
  filter: IFilter;
}

export interface IFilter {
  text: string;
  creator: string;
  category: string;
  maxPrice: number;
  online: boolean;
}

export interface IFilterState {
  filteredProducts: IProduct[];
  allProducts: IProduct[];
  gridView: boolean;
  sort: string;
  filters: IFilter;
}

export interface ICartItem {
  item: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
