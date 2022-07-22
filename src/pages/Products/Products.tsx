import "./Products.scss";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import React, { useState } from "react";
import { ProductsGridView, ProductsListView } from "../../components";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { setFilteredProducts, sortProducts } from "../../state/ProductSlice";

const Products = () => {
  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();
  const [isGridView, setIsGridView] = useState(true);
  const [query, setQuery] = useState("country life");

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const sort: string = event?.currentTarget?.value;
    dispatch(sortProducts(sort));
  };

  const handleSearch = () => {
    dispatch(setFilteredProducts(query));
  };

  return (
    <section className="products container">
      <div className="products__wrapper">
        <div className="products__search">
          <input
            className="products__searchbar"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button className="products__search-button" onClick={handleSearch}>
            <HiOutlineSearch className="products__search-icon" />
          </button>
        </div>

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
            <p className="products__results">{`${products.length} Paintings Found`}</p>
            <div className="products__divider" />
            <div className="products__sort">
              <p className="products__sort-heading">Sort by</p>
              <select className="products__sort-select" onChange={(e) => handleSort(e)}>
                <option value="Price: Lowest">Price: Lowest</option>
                <option value="Price: Highest">Price: Highest</option>
                <option value="Name: A-Z">Name: A-Z</option>
                <option value="Name: Z-A">Name: Z-A</option>
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
