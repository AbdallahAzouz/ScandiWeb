import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { productAdded } from "../redux/productsSlice";

import "../styles/AddProduct.scss";

const AddProduct = () => {
  const [type, setType] = useState("");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const canSave =
    Boolean(sku) &&
    Boolean(name) &&
    // eslint-disable-next-line no-mixed-operators
    Boolean((height && width && length) || size || weight);

  const handleFilter = (e) => {
    const filteredValue = e.target.value;
    setType(filteredValue);
  };
  const dispatch = useDispatch();
  const saveProduct = (e) => {
    e.preventDefault();
    dispatch(
      productAdded({
        type,
        sku,
        name,
        price,
        height,
        width,
        length,
        size,
        weight,
      })
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("form:" + type, sku, name, price);
  //   if (type === "furniture") {
  //     console.log(width, length, height);
  //   } else if (type === "dvd") {
  //     console.log(size);
  //   } else if (type === "book") {
  //     console.log(weight);
  //   }
  // };

  return (
    <div className="add__product">
      <Container>
        <Row>
          <div className="add__product__header">
            <h2>Product Add</h2>
            <div className="btns">
              <Link to="/add-product">
                <button onClick={saveProduct} disabled={!canSave}>
                  Save
                </button>
              </Link>
              <button>Cancel</button>
            </div>
          </div>
        </Row>
        <Row>
          <form id="#product_form" className="product__form">
            <div className="sku">
              <h5>SKU</h5>
              <input
                required
                id="#sku"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </div>
            <div className="name">
              <h5>Name</h5>
              <input
                required
                id="#name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="price">
              <h5>Price ($)</h5>
              <input
                required
                id="#price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <select onChange={handleFilter}>
              <option value="">Type Switcher</option>
              <option id="#DVD" value="dvd">
                DVD
              </option>
              <option id="#Furniture" value="furniture">
                Furniture
              </option>
              <option id="#Book" value="book">
                BOOK
              </option>
            </select>
            <div className="type">
              {type === "furniture" ? (
                <div className="type__content">
                  <h5>Height (CM)</h5>
                  <input
                    required
                    type="number"
                    id="#height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <h5>Width (CM)</h5>
                  <input
                    required
                    type="number"
                    id="#width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                  <h5>Length (CM)</h5>
                  <input
                    required
                    type="number"
                    id="#length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                  <p>Please provide dimensions in H*W*L format </p>
                </div>
              ) : type === "dvd" ? (
                <div className="type__content">
                  <h5>Size (MB)</h5>
                  <input
                    required
                    type="number"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <p>Please provide Size in MB format </p>
                </div>
              ) : (
                <div className="type__content">
                  <h5>Weight (KG)</h5>
                  <input
                    required
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <p>Please provide Book in KG format </p>
                </div>
              )}
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
