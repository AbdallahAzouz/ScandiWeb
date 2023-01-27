import React from "react";
import { useDispatch } from "react-redux";
import { Col } from "reactstrap";
import { cartActions } from "../../redux/cartSlice";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.sku,
        name: product.name,
        imgUrl: product.imgUrl,
        price: product.price,
      })
    );
  };
  return (
    <Col lg="3" md="4" className="mb-2 p-1">
      <div className="product__item">
        <input type="checkbox" name="" value="" />
        {/* <div className="product__img">
          <img whileHover={{ scale: 0.9 }} src={product.imgUrl} alt="" />
        </div> */}
        <div className="p-2">
          <h6 className="product__name">SKU:{product.sku}</h6>
          <h6 className="product__name">NAME:{product.name}</h6>
          <h6 className="price">PRICE: {product.price} $</h6>
          {product.type === "dvd" ? (
            <h6>Size: {product.size} MB</h6>
          ) : product.type === "book" ? (
            <h6>Weight: {product.weight} KG </h6>
          ) : (
            <h6>
              Dimensions: {product.width}*{product.length}*{product.height}
            </h6>
          )}
        </div>
        <div className="product__card-bottom d-flex align-products-center justify-content-between p-2">
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
