import React from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "../styles/Cart.scss";
import { cartActions } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems);
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="fs-4 text-center">No Products Added To Cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <motion.img
                          whileHover={{ scale: 1.5 }}
                          src={item.img}
                          alt=""
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>$ {item.totalPrice}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <i
                          onClick={() => deleteProduct(item.id)}
                          class="ri-delete-bin-line"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                SubTotal
                <span className="fw-bold fs-4">$ {totalAmount}</span>
              </h6>
            </div>
            <p className="fs-6 mt-2">
              Taxes and Shipping Will Calculate in Checkout
            </p>
            <div>
              <Link to="/">
                <button className="buy-btn mt-3 w-100">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
