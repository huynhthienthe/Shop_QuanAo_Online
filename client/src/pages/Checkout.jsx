import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
//import "../styles/checkout.css";
//import { resetCart } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [orderSummary, setOrderSummary] = useState({
    totalQuantity: 0,
    totalAmount: 0,
    shippingFee: 0,
  });
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    Number: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevCustomerInfo) => ({
      ...prevCustomerInfo,
      [name]: value,
    }));
  };
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi form thành công

    // Dispatch action resetCart để đặt lại giỏ hàng
    //dispatch(resetCart());
    setIsOrderSubmitted(true); // Đánh dấu đơn hàng đã được gửi đi
  };
  const calculateShippingFee = (totalAmount) => {
    if (totalAmount >= 100) {
      return 0;
    } else {
      return 0; // Đây là phí vận chuyển 10,000 VND
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
        <h2 className="checkout-title">Thông tin thanh toán</h2>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Họ và tên</Label>
                <Input
                  className="input-tt"
                  type="text"
                  name="name"
                  id="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Số điện thoại</Label>
                <Input
                  className="input-tt"
                  type="tel"
                  name="phone"
                  id="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Địa chỉ</Label>
                <Input
                  className="input-tt"
                  type="text"
                  name="address"
                  id="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="buttonxacnhan">
                <button type="submit" className="button-xacnhan">
                  Xác nhận thanh toán
                </button>
              </div>

              {isOrderSubmitted && <p>ĐƠN HÀNG CỦA BẠN ĐÃ ĐƯỢC XÁC NHẬN</p>}
            </Form>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
