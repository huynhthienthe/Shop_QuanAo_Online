import React, { useState } from "react";
import all__adidas         from "../assets/images/all__adidas.jpg";
import Helmet              from "../components/Helmet/Helmet";
import { useNavigate }     from "react-router-dom";
import { Container }       from "reactstrap";
import { products }        from "../assets/productdata/product";
import "../styles/adidas.css";

const Adidas = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchText, setSearchText] = useState("");
  const [favoriteProducts, setFavoriteProducts] = useState([]); // Sử dụng một mảng để lưu trạng thái yêu thích của từng sản phẩm
  const navigate = useNavigate();

  // Tạo hàm lọc sản phẩm Adidas
  const getAdidasProducts = () => {
    return products.filter((product) => product.brand === "Adidas");
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
    setSelectedProduct(productId);
  };

  const navigateToDetail = (productId) => {
    navigate(`/detailproduct/${productId}`);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };

  const filterProducts = () => {
    if (!searchText) {
      return getAdidasProducts(); // Sử dụng danh sách sản phẩm Adidas
    }
    const searchTerm = searchText.toLowerCase();
    return getAdidasProducts().filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
  };

  const sortedProducts = [...filterProducts()];

  if (sortOrder === "ascending") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "descending") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "newest") {
    sortedProducts.sort((a, b) => b.dateAdded - a.dateAdded);
  } else if (sortOrder === "oldest") {
    sortedProducts.sort((a, b) => a.dateAdded - b.dateAdded);
  }

  const sortedRows = chunkArray(sortedProducts, 4);

  // Hàm kiểm tra xem một sản phẩm có phải là sản phẩm yêu thích hay không
  const isFavorite = (productId) => favoriteProducts.includes(productId);

  // Hàm xử lý khi người dùng nhấp vào biểu tượng yêu thích của một sản phẩm
  const handleFavoriteToggle = (productId) => {
    if (isFavorite(productId)) {
      // Nếu sản phẩm đã trong danh sách yêu thích, loại bỏ nó
      setFavoriteProducts(favoriteProducts.filter((id) => id !== productId));
    } else {
      // Nếu sản phẩm chưa trong danh sách yêu thích, thêm nó vào danh sách
      setFavoriteProducts([...favoriteProducts, productId]);
    }
  };

  return (
    <Helmet title="ALLADIDAS">
      <section>
        <div className="banner__adidas">
          <img src={all__adidas} alt="alladidas" className="image__adidas" />
          <div className="overlay-text">ALL ADIDAS</div>
        </div>
        <Container>
          <div className="thanhinput">
            <div className="sort-dropdown">
              <select
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="ascending">Giá tăng dần</option>
                <option value="descending">Giá giảm dần</option>
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
              </select>
            </div>
            <div className="adidas-search-bar">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchText}
                onChange={handleSearch}
              />
            </div>
          </div>
          {sortedRows.map((row, rowIndex) => (
            <div key={rowIndex} className="product-row">
              {row.map((product) => (
                <div key={product.id} className="product-item">
                  <div
                    className="product-image"
                    onMouseEnter={() => handleMouseEnter(product.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={
                        hoveredProduct === product.id
                          ? product.hoverImage
                          : product.image
                      }
                      alt={product.name}
                      onClick={() => navigateToDetail(product.id)}
                    />
                    <div className="favorite-icon">
                      <i
                        className={`ri-heart-${
                          isFavorite(product.id) ? "fill" : "line"
                        }`}
                        onClick={() => handleFavoriteToggle(product.id)}
                      ></i>
                    </div>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="price">
                    {product.discountedPrice ? (
                      <span>
                        <del>{product.price.toLocaleString()} VND</del>{" "}
                        {product.discountedPrice.toLocaleString()} VND
                      </span>
                    ) : (
                      product.price.toLocaleString() + " VND"
                    )}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </Container>
      </section>
    </Helmet>
  );
};

export default Adidas;
