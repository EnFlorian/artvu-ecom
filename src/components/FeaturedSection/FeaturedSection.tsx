import "./FeaturedSection.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const FeaturedSection = () => {
  const featuredProducts = useSelector((state: RootState) => state.product.featuredProducts);

  const cards = featuredProducts?.map((product) => <ProductCard key={product.id} {...product} />);

  return (
    <section className="featured">
      <div className="container featured__wrapper">
        <h1 className="featured__title">Featured Products</h1>
        <ul className="featured__products">{cards}</ul>
      </div>
    </section>
  );
};

export default FeaturedSection;
