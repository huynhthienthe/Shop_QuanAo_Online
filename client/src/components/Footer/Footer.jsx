import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logoshop from "../../assets/images/2.png";
import noble from "../../assets/images/noble.png";

import "../../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={noble} alt="logo" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__tittle">NOBLE SHOP</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item1 border-0 ps-0">
                <p>
                  <i class="ri-map-pin-line"> </i> 381 Sư Vạn Hạnh Phường 12
                  Quận 10
                </p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item1 border-0 ps-0">
                <p>
                  <i class="ri-phone-line"> </i>(028) 7825786
                </p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item1 border-0 ps-0">
                <p>
                  <i class="ri-mail-line"> </i>nobleshop@gmail.com.vn
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__tittle">THỜI GIAN HOẠT ĐỘNG</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thứ Hai - Thứ Sáu</span>
                <p>8:00 - 22:00</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thứ Bảy - Chủ Nhật</span>
                <p>8:00 - 23:00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6" className="kho">
            <h5 className="footer__tittle">THÔNG TIN</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item2 border-0 ps-0">
                <a href="/home">TRANG CHỦ</a>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item2 border-0 ps-0">
                <a href="/gioithieu">THƯƠNG HIỆU</a>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item2 border-0 ps-0">
                <a href="/menu">TIN TỨC</a>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item2 border-0 ps-0">
                <a href="/khuyenmai">GIỚI THIỆU</a>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item2 border-0 ps-0">
                <a href="/contact">LIÊN HỆ</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="crights">
              Copyright - 2023 NOBLE SHOP Viet Nam. All Rights Reserved.
            </p>
          </Col>

          <Col lg="6" md="6">
            <div
              className="social__links d-flex align-items-center 
      gap-4 justify-content-end"
            >
              <p className="">Theo dõi chúng tôi: </p>
              <span className="facebook">
                {" "}
                <Link to="https://www.facebook.com/hongnhung546">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span className="instagram">
                {" "}
                <Link to="https://www.instagram.com/congchuabisbis/">
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>

              <span className="youtube">
                <Link to="https://www.instagram.com/congchuabisbis/">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </section>
    </footer>
  );
};
export default Footer;
