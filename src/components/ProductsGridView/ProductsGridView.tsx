import { useProductsContext } from "../../state/contexts/productContext";
import { IProduct } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGridView.scss";

const ProductsGridView = () => {
  const { products } = useProductsContext();

  return (
    <section className="products-grid__container">
      {products?.map((product: IProduct) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductsGridView;
