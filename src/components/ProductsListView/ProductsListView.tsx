import { Link } from "react-router-dom";
import { useProductsContext } from "../../state/contexts/productContext";
import { IProduct } from "../../types/product";
import "./ProductsListView.scss";

const ProductsListView = () => {
  const { filteredProducts } = useProductsContext();

  return (
    <section className="products-list__container">
      <ul className="products-list__items">
        {filteredProducts?.map((product: IProduct) => (
          <li key={product.id} className="products-list__item">
            <img src={product.image} alt={product.category} className="products-list__image" />
            <div className="products-list__info">
              <h3 className="products-list__name">{product.name}</h3>
              <p className="products-list__price">{product.price}</p>
              <p className="products-list__description">{product.description}</p>
              <Link to={`/products/${product.id}`} className="products-list__button">
                More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsListView;
