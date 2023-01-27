import React from "react";
import { Container, Row } from "reactstrap";
import ProductCard from "../productCard/ProductCard";
import "./ProductList.scss";
// import products from "../../assets/data/products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllposts } from "../../redux/productsSlice";

const ProductList = () => {
  const products = useSelector(selectAllposts);
  console.log(products);
  return (
    <div className="products">
      <Container>
        <Row>
          <div className="list__header">
            <h2>Product List</h2>
            <div className="btns">
              <Link to="/add-product">
                <button className="">ADD</button>
              </Link>
              <button className="">MASS DELETE</button>
            </div>
          </div>

          <div className="products__list ">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
