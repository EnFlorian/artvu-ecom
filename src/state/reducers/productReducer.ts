const reducer = (state: IProductState, action: ProductActionType) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        featuredProducts: action.payload.slice(0, 3),
        filteredProducts: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filteredProducts: state.products,
      };
    case "APPLY_FILTER":
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          return (
            product.category.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.creator.toLowerCase().includes(action.payload.toLowerCase())
          );
        }),
      };
    case "APPLY_SORT": {
      if (action.payload === "Price: Lowest") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            return a.price - b.price;
          }),
        };
      } else if (action.payload === "Price: Highest") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            return b.price - a.price;
          }),
        };
      } else if (action.payload === "Name: A-Z") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        };
      } else if (action.payload === "Name: Z-A") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      return state;
    }
    case "APPLY_MAX_PRICE":
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          return product.price <= action.payload;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
