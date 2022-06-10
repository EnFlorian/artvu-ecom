import "./FeaturedSection.scss";
import { products } from "../../data";
import ProductCard from "../ProductCard";
import { ProductType } from "../../types/product";
const FeaturedSection = () => {
  const featuredProducts: ProductType[] = products.slice(0, 3);
  return (
    <section className="featured">
      <div className="container featured__wrapper">
        <h1 className="featured__title">Featured Products</h1>
        <ul className="featured__products">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSection;
