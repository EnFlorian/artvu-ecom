import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGridView.scss";

const ProductsGridView = () => {
  const filteredProducts = useSelector((state: RootState) => state.product.filteredProducts);

  const cards = filteredProducts?.map((product) => <ProductCard key={product.id} {...product} />);

  return <section className="products-grid__container">{cards}</section>;
};

export default ProductsGridView;
