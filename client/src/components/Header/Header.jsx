import React, { useEffect, useRef, useState } from "react";
//import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/header.css";
import { Profile } from "../../lib/curent-profile";

import { logOut } from "../../redux/apiRequest";
import noble from "../../assets/images/noble.png";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import CartDropdown from "../../assets/productdata/CartDropdown";

const navLinks = [
  {
    display: "Trang chủ",
    url: "home",
  },
  {
    display: "Thương Hiệu",
    url: "#",
  },
  {
    display: "Tin Tức",
    url: "tintuc",
  },
  {
    display: "Giới Thiệu",
    url: "gioithieu",
  },
  {
    display: "Liên Hệ",
    url: "lienhe",
  },
];

const Header = () => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false); // State để kiểm tra xem CartDropdown có nên hiển thị hay không
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const user = useSelector((state) => state.user_status.login.currentUser);
  const id = user?._id;
  const accessToken = user?.accessToken;
  const isAdmin = user && user.role === "admin";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuRef = useRef();

  // handle:
  const handleLogout = () => {
    console.log(">>> accessTokenL: ",accessToken);
    logOut(dispatch,navigate,id,accessToken);
  };

  const handleCaiDat = () => {
    navigate("/User/Caidat/" + id);
  };
  // gacon: kim phụng code nhớ comment nha !
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);


  const toggleBrandDropdown = () => {
    setIsBrandDropdownOpen(!isBrandDropdownOpen);
  };

  const toggleUserDropdown = () => {
    if (Profile.loggedIn) {
      setShowUserDropdown(!showUserDropdown);
    }
  };



  return (
    <header className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/home">
            <img
              src={noble}
              alt="Mô tả hình ảnh"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        <div
          className="nav__menu d-flex align-items-center gap-5 "
          ref={menuRef}
          onMouseEnter={toggleBrandDropdown}
          onMouseLeave={toggleBrandDropdown}
        >
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <a href={item.url} onClick={toggleBrandDropdown}>
                  {item.display}
                </a>

                {item.display === "Thương Hiệu" && isBrandDropdownOpen && (
                  <ul className="brand-dropdown">
                    <li className="adidas">
                      <a href="#">ADIDAS</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="/adidas">Tất Cả</a>
                        </li>
                        <li>
                          <a href="/aoa">Áo</a>
                        </li>
                        <li>
                          <a href="#">Quần</a>
                        </li>
                        <li>
                          <a href="#">Dép</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nike">
                      <a href="#">NIKE</a>
                    </li>
                    <li className="lv">
                      <a href="#">GUCCI</a>
                    </li>
                    <li className="mlb">
                      <a href="#">MLB</a>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="menu__right">
            <div className="custom__search">
              <input type="text" placeholder="Tìm kiếm" />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>

          <div
            className="cart__icon"
            onClick={toggleCart}
            onMouseEnter={toggleCartDropdown} // Khi hover vào biểu tượng giỏ hàng
            onMouseLeave={toggleCartDropdown} // Khi rời khỏi biểu tượng giỏ hàng
          >
            <i className="ri-shopping-basket-line"></i>
            <span className="cart__badge">{totalQuantity}</span>
            {isCartDropdownOpen && <CartDropdown />}{" "}
            {/* Hiển thị CartDropdown nếu isCartDropdownOpen là true */}
          </div>

          <div
            className={`user ${user ? "logged-in" : "not-logged-in"}`}
            onMouseEnter={toggleUserDropdown}
            onMouseLeave={toggleUserDropdown}
          >
            {!user ? (
              <Link to="Home/login">
                <i className="ri-user-3-line"></i>
              </Link>
            ) : (
              <span>{user.TenDangNhap}</span>
            )}

            {user && (
              <div className="user-dropdown">
                <ul>
                  <li>
                    <Link to= {`user/caidat/${id}`} onClick={handleCaiDat} >Cài đặt tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/yeuthich">Sản phẩm yêu thích</Link>
                  </li>
                  <li>
                    <Link to="/lichsu">Lịch sử đã mua</Link>
                  </li>
                  {user?.Admin && (
                    <li>
                      <Link to="/User/GetAllUser">Listuser</Link>
                    </li>
                  )}
                  {/* <li onClick={handleLogout}>Đăng xuất</li> */}
                  {/* <Link to="/Home/logout">Đăng xuất</Link> */}
                  <Link to="/Home/logout" onClick={handleLogout}>Đăng xuất</Link>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mobile__menu">
          <span>
            <i className="ri-menu-line" onClick={toggleBrandDropdown}></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
