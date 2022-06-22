import "./FeaturedSection.scss";

import { useProductsContext } from "../../state/contexts/productContext";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedSection = () => {
  const { featuredProducts } = useProductsContext();

  return (
    <section className="featured">
      <div className="container featured__wrapper">
        <h1 className="featured__title">Featured Products</h1>
        <ul className="featured__products">
          {featuredProducts?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSection;
