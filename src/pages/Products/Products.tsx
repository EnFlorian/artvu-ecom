import "./Products.scss";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import React, { useState } from "react";
import { ProductsGridView, ProductsListView } from "../../components";
import { useProductsContext } from "../../state/contexts/productContext";
import { HiOutlineSearch } from "react-icons/hi";

const Products = () => {
  const { products, filteredProducts, applyFilter, applyMaxPrice, applySort, clearFilters } = useProductsContext();
  const [isGridView, setIsGridView] = useState(true);
  const [priceRange, setPriceRange] = useState(10000);
  const [searchQuery, setSearchQuery] = useState("");
  let activeElement: Element | null = null;

  const uniqueArtists = [...new Set(products?.map((product) => product.creator))];
  const artistsItems = uniqueArtists.map((artist) => {
    return (
      <li key={artist} className="products__sidebar-item">
        <p onClick={(e) => handleFilter(e)}>{artist}</p>
      </li>
    );
  });

  const uniqueCategories = [...new Set(products?.map((product) => product.category))];
  const categoriesItems = uniqueCategories.map((category) => {
    return (
      <li key={category} className="products__sidebar-item" onClick={(e) => handleClick(e)}>
        <p onClick={(e) => handleFilter(e)}>{category}</p>
      </li>
    );
  });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    activeElement?.classList.remove("products__sidebar-item--active");
    activeElement = event.currentTarget;
    event.currentTarget.classList.toggle("products__sidebar-item--active");
  };

  const handleFilter = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();
    const filter: string = event?.currentTarget?.innerText;
    applyFilter(filter);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const sort: string = event?.currentTarget?.value;
    console.log(sort);
    applySort(sort);
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const price = +event?.currentTarget?.value;
    setPriceRange(price);
    applyMaxPrice(price);
  };

  const handleSearch = () => {
    applyFilter(searchQuery);
  };

  return (
    <section className="products container">
      <div className="products__wrapper">
        <aside className="products__sidebar">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            type="text"
            className="products__searchbar"
            placeholder="Search..."
          />
          <button className="products__sidebar-submit-btn" onClick={handleSearch}>
            <HiOutlineSearch />
          </button>
          <p className="products__sidebar-heading">Category</p>
          <ul className="products__sidebar-list">{categoriesItems}</ul>
          <p className="products__sidebar-heading">Artists</p>
          <ul className="products__sidebar-list">{artistsItems}</ul>
          <p className="products__sidebar-heading">Price</p>
          <div className="products__price-slider">
            <input value={priceRange} type="range" min="10" max="10000" onChange={(e) => handlePrice(e)} />
          </div>

          <button className="products__sidebar-button" onClick={() => clearFilters()}>
            Clear Selection
          </button>
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
            <p className="products__results">{`${filteredProducts.length} Paintings Found`}</p>
            <hr className="products__divider" />
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
