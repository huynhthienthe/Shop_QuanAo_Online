import React, { useState }                  from "react";
import { Container }                        from "reactstrap";
import { useDispatch }                      from "react-redux";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link }                             from "react-router-dom";
import { useParams }                        from "react-router-dom";
import sizeguide                            from "../assets/images/sizeguide.png";
import { cartActions }                      from "../store/shopping-cart/cartSlice";
import "../styles/detailproduct.css";

const DetailProduct = ({ products }) => {

  const dispatch = useDispatch();

  // get id
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  //
  const [isFavorite,       setIsFavorite]        = useState(false);
  const [showSize,         setShowSize]          = useState(false);
  const [showDescription,  setShowDescription]   = useState(false);
  const [showDetails,      setShowDetails]       = useState(false);
  const [isInfoVisible,    setIsInfoVisible]     = useState(true);

  const [selectedSize,     setSelectedSize]      = useState
  ( product.optionSizes.length  > 0 ? product.optionSizes[0]  : null);
  const [selectedColor,    setSelectedColor]     = useState
  ( product.optionColors.length > 0 ? product.optionColors[0] : null);

  //
  const recommendedProductIds = product.recommendedProducts;
  const recommendedProducts = products.filter((p) =>
    recommendedProductIds.includes(p.id)
  );

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  const addToCart = () => {
    const selectedProduct = {
      ...product,
      optionColors: selectedColor,
      optionSizes: selectedSize,
    };
    console.log(selectedProduct);
    dispatch(cartActions.addItem(selectedProduct));
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="full">
      <div className="product-detail-container">
        <div className="product-images">
          {product &&
            product.additionalImages &&
            product.additionalImages[selectedColor] &&
            product.additionalImages[selectedColor].map((img, index) => (
              <img key={index} src={img} alt={`product-${index}`} />
            ))}
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
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

          <div className="option-sizes">
            <label>Size :</label>
            <div className="size-options">
              {product.optionSizes.map((size, index) => (
                <div
                  key={index}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="option-colors">
            <label>Color : </label>
            <div className="color-options">
              {product.optionColors.map((color, index) => (
                <div
                  key={index}
                  className="color-option"
                  style={{
                    background: color,
                    border: selectedColor === color ? "2px solid #000" : "none",
                  }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button
              className="addTOCart__btn"
              onClick={() => addToCart(product)}
            >
              THÊM VÀO GIỎ HÀNG
            </button>
            <i
              className={`ri-heart-${isFavorite ? "fill" : "line"}`}
              onClick={() => setIsFavorite(!isFavorite)}
            ></i>
          </div>
          <div className="title" onClick={toggleSize}>
            <div className="title-content">
              <div className="title-text">
                <h5>Kích thước</h5>
              </div>
              <div className="title-icon">
                {showSize ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
            </div>
          </div>
          {showSize && (
            <div className="info">
              <img src={sizeguide} alt="Kích thước 1" />
            </div>
          )}
          <div className="title1" onClick={toggleDescription}>
            <div className="title-content">
              <div className="title-text">
                <h5>Mô tả</h5>
              </div>
              <div className="title-icon">
                {showDescription ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
            </div>
          </div>
          {showDescription && (
            <div className="info">
              {/* Hiển thị thông tin mô tả ở đây */}
              <p>{product.description}</p>
            </div>
          )}
          <div className="title2" onClick={toggleDetails}>
            <div className="title-content">
              <div className="title-text">
                <h5>Chi tiết</h5>
              </div>
              <div className="title-icon">
                {showDetails ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </div>
            </div>
          </div>
          {showDetails && (
            <div className="info">
              <ul>
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Container>
        <div className="recommended-products">
          <div className="title__rcm">Sản phẩm gợi ý</div>
          <div className="product-list">
            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/detailproduct/${product.id}`}
                className="product-itemrcm"
              >
                <div className="recommended-product">
                  <img src={product.image} alt={product.name} />
                  <p className="title__prorcm">{product.name}</p>
                  <p className="price">{product.price.toLocaleString()} VND</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailProduct;
