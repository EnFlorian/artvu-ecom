import { useProductsContext } from "../../state/contexts/productContext";
import { IProduct } from "../../types/product";
import "./ProductsListView.scss";

const ProductsListView = () => {
  const { products } = useProductsContext();

  return (
    <section className="products-list__container">
      <ul className="products-list__items">
        {products?.map((product: IProduct) => (
          <li key={product.id} className="products-list__item">
            <img src={product.image} alt={product.category} className="products-list__image" />
            <div className="products-list__info">
              <h3 className="products-list__name">{product.name}</h3>
              <p className="products-list__price">{product.price}</p>
              <p className="products-list__description">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsListView;
