import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cartitem.css";
import { ListGroupItem } from "reactstrap";
import products from "../../../assets/productdata/product";

const formatPriceToVND = (price) => {
  if (typeof price !== "number" || isNaN(price)) {
    return "Price not available";
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const Cartitem = ({ item }) => {
  const dispatch = useDispatch();

  console.log(item);

  const incrementItem = (id) => {
    const selectedItem = products.find((product) => product.id === id);

    if (selectedItem) {
      dispatch(
        cartActions.addItem({
          id,
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
          optionSizes: selectedItem.optionSizes,
          optionColors: selectedItem.optionColors,
          discountedPrice: selectedItem.discountedPrice,
        })
      );
    }
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(item.id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-3">
        <img src={item.image} alt="product-img" className="cart__item-image" />

        <div className="cart__product-info">
          <h6>{item.name}</h6>
          <p>
            {item.quantity} | {item.optionSizes ? item.optionSizes : "N/A"} |{" "}
            {item.optionColors ? item.optionColors : "N/A"}
          </p>
          <p className="price__infor">
            {item.discountedPrice ? ( // Kiểm tra nếu có giá khuyến mãi
              <span className="discounted-price">
                {formatPriceToVND(item.discountedPrice)}
              </span>
            ) : (
              <span className="original-price">
                {formatPriceToVND(item.price)}
              </span>
            )}
          </p>
          <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
            <div>
              <span
                className="increase__btn"
                onClick={() =>
                  incrementItem(
                    item.id,
                    item.name,
                    item.price,
                    item.image,
                    item.optionColors,
                    item.optionSizes
                  )
                }
              >
                <i className="ri-add-line"></i>
              </span>
              <span
                className="decrease__btn"
                onClick={() => decreaseItem(item.id)}
              >
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
        </div>

        <span className="delete__btn" onClick={deleteItem}>
          <i className="ri-close-line"></i>
        </span>
      </div>
    </ListGroupItem>
  );
};

export default Cartitem;
