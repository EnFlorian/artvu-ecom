import "./Products.scss";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import React, { useState } from "react";
import { ProductsGridView, ProductsListView } from "../../components";
import { useProductsContext } from "../../state/contexts/productContext";

const Products = () => {
  const { products, filteredProducts, filters, sort } = useProductsContext();
  const [isGridView, setIsGridView] = useState(true);
  let activeElement: Element | null = null;

  const uniqueArtists = [...new Set(products?.map((product) => product.creator))];
  const artistsItems = uniqueArtists.map((artist) => {
    return (
      <li key={artist} className="products__sidebar-item">
        <p>{artist}</p>
      </li>
    );
  });

  const uniqueCategories = [...new Set(products?.map((product) => product.category))];
  const categoriesItems = uniqueCategories.map((category) => {
    return (
      <li key={category} className="products__sidebar-item">
        <p>{category}</p>
      </li>
    );
  });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    activeElement?.classList.remove("products__sidebar-item--active");
    activeElement = event.currentTarget;
    event.currentTarget.classList.toggle("products__sidebar-item--active");
  };

  return (
    <section className="products container">
      <div className="products__wrapper">
        <aside className="products__sidebar">
          <input type="text" className="products__searchbar" placeholder="Search..." />
          <p className="products__sidebar-heading">Category</p>
          <ul className="products__sidebar-list">{categoriesItems}</ul>
          <p className="products__sidebar-heading">Artists</p>
          <ul className="products__sidebar-list">{artistsItems}</ul>
          <p className="products__sidebar-heading">Price</p>
          <div className="products__price-slider">
            <input type="range" min="0" max="5000" />
          </div>
          <div className="products__availability">
            <input type="checkbox" className="products__checkbox" /> <span>Online available</span>
          </div>

          <button className="products__sidebar-button">Clear Selection</button>
        </aside>

        <main className="products__content">
          <div className="products__header">
            <div className="products__buttons">
              <button className="products__button" onClick={() => setIsGridView(true)}>
                {isGridView ? <IoGridSharp className="products__selected" /> : <IoGridSharp />}
              </button>
              <button className="products__button" onClick={() => setIsGridView(false)}>
                {!isGridView ? <FaThList className="products__selected" /> : <FaThList />}
              </button>
            </div>
            <p className="products__results">{`18 Paintings Found`}</p>
            <hr className="products__divider" />
            <div className="products__sort">
              <p className="products__sort-heading">Sort by</p>
              <select className="products__sort-select">
                <option value="">Price: Lowest</option>
                <option value="">Price: Highest</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
              </select>
            </div>
          </div>
          <div className="products__view">{isGridView ? <ProductsGridView /> : <ProductsListView />}</div>
        </main>
      </div>
    </section>
  );
};

export default Products;
