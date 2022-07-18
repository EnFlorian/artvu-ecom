import "./Products.scss";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { ProductsGridView, ProductsListView } from "../../components";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { setFilter, sortProducts } from "../../state/ProductSlice";

const Products = () => {
  const { products, filter, filteredProducts } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();
  const [isGridView, setIsGridView] = useState(true);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [text, setText] = useState("");
  let activeElement: Element | null = null;

  useEffect(() => {
    dispatch(setFilter({ ...filter, maxPrice, text }));
  }, [maxPrice, text]);

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
    const filterItem: string = event?.currentTarget?.innerText;
    dispatch(setFilter({ ...filter, filterItem }));
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const sort: string = event?.currentTarget?.value;
    console.log(sort);
    dispatch(sortProducts(sort));
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const price = +event?.currentTarget?.value;
    setMaxPrice(price);
    // applyMaxPrice(price);
  };

  const handleSearch = () => {
    dispatch(setFilter({ text }));
    console.log(filter);
  };

  return (
    <section className="products container">
      <div className="products__wrapper">
        <div className="products__search">
          <input
            className="products__searchbar"
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>
            <HiOutlineSearch />
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
