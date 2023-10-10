import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner_01 from "../assets/images/banner_01.png";
import banner_02 from "../assets/images/banner_02.png";
import banner_03 from "../assets/images/banner_03.png";
import gucci from "../assets/images/gucci.jpg";
import mlb from "../assets/images/mlb.jpg";
import nike from "../assets/images/nike.jpeg";
import adidas from "../assets/images/adidas.jpg";
import product__01 from "../assets/images/product__01.jpg";
import product__02 from "../assets/images/product__02.jpg";
import product__03 from "../assets/images/product__03.jpg";
import product__04 from "../assets/images/product__04.jpg";
import product__012 from "../assets/images/product__012.jpg";
import product__022 from "../assets/images/product__022.jpg";
import product__032 from "../assets/images/product__032.jpg";
import product__042 from "../assets/images/product__042.jpg";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import new__image from "../assets/images/new__image.png";
import "../styles/Home.css";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Helmet title="Trang chủ">
      <section>
        <Carousel
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          interval={1500}
          infiniteLoop={true}
          className="custom-carousel"
        >
          <div>
            <img src={banner_01} alt="banner1" />
          </div>
          <div>
            <img src={banner_02} alt="banner2" />
          </div>
          <div>
            <img src={banner_03} alt="banner3" />
          </div>
        </Carousel>
      </section>
      <Container className="image__branch">
        <Row>
          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="image-container">
              <img src={adidas} alt="adidas" className="image" />
              <div className="hover-overlay">
                <div className="overlay-content">
                  <Link to="/adidas" className="link-no-underline">
                    <p>ADIDAS</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="image-container">
              <img src={gucci} alt="gucci" className="image" />
              <div className="hover-overlay">
                <div className="overlay-content">
                  <Link to="/gucci" className="link-no-underline">
                    <p>GUCCI</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="image-container">
              <img src={nike} alt="nike" className="image" />
              <div className="hover-overlay">
                <div className="overlay-content">
                  <Link to="/nike" className="link-no-underline">
                    <p>NIKE</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" className="text-center">
            <div className="image-container">
              <img src={mlb} alt="mlb" className="image" />
              <div className="hover-overlay">
                <div className="overlay-content">
                  <Link to="/mlb" className="link-no-underline">
                    <p>MLB</p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="why-noble">
          <Col lg="6" md="6">
            <div className="why__noble">
              <h2 className="why__noble-title mb-4">NOBLE SHOP</h2>

              <ListGroup className="list_group">
                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items- gap-2">
                    <i class="ri-motorbike-line"></i>Vận Chuyển
                  </p>
                  <p className="choose__us-desc">
                    Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng
                    đặt hàng online
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-shopping-cart-line"></i>Sản Phẩm{" "}
                  </p>
                  <p className="choose__us-desc">
                    Luôn cập nhật các sản phẩm mới với đầy đủ màu sắc và kích
                    thước
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-wallet-3-line"></i>Giá Cả
                  </p>
                  <p className="choose__us-desc">
                    Giá cả hợp lí phù hợp với chất lượng
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-shirt-line"></i>Chất lượng
                  </p>
                  <p className="choose__us-desc">
                    Với cam kết hàng chính hãng không giả mạo
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2">
                    <i class="ri-gift-line"></i>Khuyến mãi
                  </p>
                  <p className="choose__us-desc">
                    Với nhiều giảm giá, khuyến mãi cho khách hàng
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <button>ĐẶT HÀNG</button>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={new__image} alt="newimage" className="w-100" />
          </Col>
        </Row>
      </Container>
      <Container className="image__hot">
        <Row>
          <Col lg="12" md="4" sm="6">
            <span className="hot_product">NỔI BẬT</span>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="image-hot">
              <div
                className="image-container"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={product__01} alt="product01" className="image__hot" />
                {hoveredIndex === 1 && (
                  <img
                    src={product__012}
                    alt="product012"
                    className="hover-image"
                  />
                )}
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="image-hot">
              <div
                className="image-container"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={product__02} alt="product02" className="image__hot" />
                {hoveredIndex === 1 && (
                  <img
                    src={product__022}
                    alt="product022"
                    className="hover-image"
                  />
                )}
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="image-hot">
              <div
                className="image-container"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={product__03} alt="product03" className="image__hot" />
                {hoveredIndex === 1 && (
                  <img
                    src={product__032}
                    alt="product032"
                    className="hover-image"
                  />
                )}
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="image-hot">
              <div
                className="image-container"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={product__04} alt="product04" className="image__hot" />
                {hoveredIndex === 1 && (
                  <img
                    src={product__042}
                    alt="product042"
                    className="hover-image"
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="image__about">
          <Col lg="12" md="6" className="hot-text">
            <p className="text__hot">
              CHÀO ĐÓN BỘ SƯU TẬP THU - ĐÔNG MỚI NHẤT ĐẾN TỪ CÁC THƯƠNG HIỆU
            </p>
          </Col>
          <Col lg="4" md="6" className="image-about">
            <img src={image1} className="image__1"></img>
          </Col>
          <Col lg="4" md="6" className="image-about">
            <img src={image2} className="image__2"></img>
          </Col>
          <Col lg="4" md="6" className="image-about">
            <img src={image3} className="image__3"></img>
          </Col>

          <Col lg="12" md="6">
            <p className="button__hot">XEM THÊM</p>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Home;