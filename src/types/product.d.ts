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
}

export interface IProductContext extends IProductState {
  clearFilters: () => void;
  applyFilter: (filter: string) => void;
  applySort: (sort: string) => void;
  applyMaxPrice: (maxPrice: number) => void;
}

export type ProductActionType = { type: string; payload: any };
