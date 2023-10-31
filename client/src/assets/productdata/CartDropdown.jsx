import React, { useState } from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Cartitem from "../../components/UI/cart/Cartitem";
import "../../styles/cartdropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const CartDropdown = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartProducts);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Khi click, thay đổi trạng thái
  };

  const formatToVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <div className={`cart__container${isCartOpen ? " open" : ""}`}>
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">
              Chưa có sản phẩm nào trong giỏ hàng
            </h6>
          ) : (
            cartProducts.map((item, index) => (
              <Cartitem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Tổng cộng : <span>{formatToVND(totalAmount)}</span>
          </h6>
          <button>
            <Link to="/cart" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default CartDropdown;
