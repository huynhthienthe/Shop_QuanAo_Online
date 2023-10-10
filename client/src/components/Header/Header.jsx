import React, { useEffect, useRef, useState} from "react";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/header.css";
import { Profile } from "../../lib/curent-profile";

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
  const menuRef = useRef();
  
  // gacon: kim phụng code nhớ comment nha !
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const [loggedInUsername, setLoggedInUsername] = useState("");
  useEffect(() => {
    const tenDangNhap = localStorage.getItem("tenDangNhap");
    if (tenDangNhap) {
      setLoggedInUsername(tenDangNhap);
    }
  }, []);
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const toggleBrandDropdown = () => {
    setIsBrandDropdownOpen(!isBrandDropdownOpen);
  };

  const toggleUserDropdown = () => {
    if (Profile.loggedIn) {
      setShowUserDropdown(!showUserDropdown);
    }
  };

  const handleLogout = () => {
    setShowUserDropdown(false);
    navigate("Home/login");
    Profile.loggedIn = false;
    localStorage.removeItem("userLoggedIn");
  };

  return (
    <header className="header">
      
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">NOBLE SHOP</h2>
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
                            <a href="#">Tất Cả</a>
                          </li>
                          <li>
                            <a href="#">Áo</a>
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

            <div>
              <span className="cart__icon">
                <i className="ri-shopping-cart-line"></i>
                <span className="badge">2</span>
              </span>
            </div>

            <div
        className={`user ${loggedInUsername ? "logged-in" : "not-logged-in"}`}
        onMouseEnter={toggleUserDropdown}
        onMouseLeave={toggleUserDropdown}
      >
        {!loggedInUsername ? (
          <Link to="Home/login">
            <i className="ri-user-3-line"></i>
          </Link>
        ) : (
          <span>{loggedInUsername}</span>
        )}

        {loggedInUsername && (
          <div className="user-dropdown">
            <ul>
              <li>
                <Link to="/caidat">Cài đặt tài khoản</Link>
              </li>
              <li>
                <Link to="/yeuthich">Sản phẩm yêu thích</Link>
              </li>
              <li>
                <Link to="/lichsu">Lịch sử đã mua</Link>
              </li>
              <li onClick={handleLogout}>Đăng xuất</li>
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
