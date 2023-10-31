import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";
import CartItem from "../components/UI/cart/Cartitem";
import "../styles/cart.css";
import { Container, Row, Col } from "reactstrap";

const Cart = () => {
  const [orderSummary, setOrderSummary] = useState({
    totalQuantity: 0,
    totalAmount: 0,
    shippingFee: 0,
  });
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const incrementItem = (id) => {
    dispatch(cartActions.addItem(id));
  };

  const decreaseItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.discountedPrice || item.price) * item.quantity;
    }, 0);
  };

  // Định nghĩa hàm tính phí vận chuyển
  const calculateShippingFee = (totalAmount) => {
    if (totalAmount >= 100) {
      return 0;
    } else {
      return 10000; // Đây là phí vận chuyển 10,000 VND
    }
  };

  useEffect(() => {
    let totalQuantity = 0;
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
      totalAmount += (item.discountedPrice || item.price) * item.quantity;
    });

    // Tính phí vận chuyển sử dụng hàm calculateShippingFee
    const shippingFee = calculateShippingFee(totalAmount);

    setOrderSummary({
      totalQuantity,
      totalAmount,
      shippingFee,
    });
  }, [cartItems]);

  return (
    <section>
      <Container>
        <h2 className="cart-title">Thông tin đơn hàng</h2>
        <Row>
          <Col md={6}>
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="order-summary">
              <h2>Tóm tắt đơn hàng</h2>
              <div className="summary-grid">
                <div className="left-col">
                  <p>Tổng số lượng:</p>
                  <p>Tạm tính:</p>
                  <p>Phí vận chuyển:</p>
                  <p>Tổng cộng:</p>
                </div>
                <div className="right-col">
                  <p>{orderSummary.totalQuantity}</p>
                  <p>{orderSummary.totalAmount.toLocaleString("vi-VN")} VND</p>
                  <p>
                    {orderSummary.shippingFee === 0
                      ? "Miễn phí"
                      : `${orderSummary.shippingFee.toLocaleString(
                          "vi-VN"
                        )} VND`}
                  </p>
                  <p>
                    {(
                      orderSummary.totalAmount + orderSummary.shippingFee
                    ).toLocaleString("vi-VN")}{" "}
                    VND
                  </p>
                </div>
              </div>
            </div>
            <div className="buttoncheckout">
              <Link to="/checkout" className="checkout-button">
                Thanh Toán
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
