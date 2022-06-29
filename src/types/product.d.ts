interface IProduct {
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
interface IProductState {
  products: IProduct[];
  featuredProducts: IProduct[];
  filteredProducts: IProduct[];
}

interface IProductContext extends IProductState {
  clearFilters: () => void;
  applyFilter: (filter: string) => void;
  applySort: (sort: string) => void;
  applyMaxPrice: (maxPrice: number) => void;
}

type ProductActionType = { type: string; payload: any };
