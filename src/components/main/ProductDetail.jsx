import { Container } from "react-bootstrap";
import BtnQuantity from "./BtnQuantity";
import Button from "../Button";

function ProductDetail({ product, quantity, quantityControl, addToCart }) {
  const {
    productName,
    productTag,
    productDescription,
    productPrice,
    productNetPrice,
    productDiscount,
  } = product;

  return (
    <div className="product-detail">
      <Container fluid="true" className="mt-5 mb-4 product-detail__container">
        <h4 className="product-detail__tag">{productTag}</h4>
        <h1 className="product-detail__name">{productName}</h1>
        <p className="product-detail__para">{productDescription}</p>
        <div className="product-prices">
          <div className="display-price1 d-flex align-items-baseline ">
            <h2 className="product-detail__netprice">
              ${productNetPrice.toFixed(2)}
            </h2>
            <h3 className="product-detail__discount">{productDiscount}%</h3>
          </div>
          <h5 className="product-detail__price">${productPrice.toFixed(2)}</h5>
        </div>
        <div className="product-shop-control">
          <BtnQuantity quantity={quantity} controls={quantityControl} />
          <div className="btn-cart">
            <Button btnAction={addToCart}>
              <span className="cart-icon">
                <img src="./images/icon-cart.svg" alt="icon-cart" />
              </span>
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail;
