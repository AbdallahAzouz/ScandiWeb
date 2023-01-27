import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import "./Header.scss";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Link to="/">
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1>MultiMart</h1>
                </div>
              </div>
            </Link>

            <div className="nav__icons">
              <span className="cart__icon">
                <Link to="/cart">
                  <i class="ri-shopping-bag-line"></i>
                  <span className="badge">{totalQuantity}</span>
                </Link>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
