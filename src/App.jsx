import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./components/main/ProductDetail";
import ProductImageLayout from "./components/main/ProductImageLayout";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import { useCart } from "./Context/cartContext";

const product = {
  productTag: "sneaker company",
  productName: "Fall limited Edition Sneakers",
  productDescription:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  productNetPrice: 125,
  productPrice: 250,
  productDiscount: 50,
};

function App() {
  const {
    quantity,
    price,
    incart,
    cartQuantity,
    setProduct,
    handleQuantity,
    handleCartAdding,
    handleDeleteCart,
  } = useCart();

  useEffect(function () {
    setProduct(product);
  }, []);

  return (
    <>
      <Header
        cartNotice={incart}
        quantity={cartQuantity}
        productName={product.productName}
        productPrice={product.productNetPrice}
        totalPrice={price}
        removeCart={handleDeleteCart}
      />
      <div className="main">
        <Container fluid="md">
          <Row>
            <Col>
              <ProductImageLayout />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <ProductDetail
                product={product}
                quantity={quantity}
                quantityControl={handleQuantity}
                addToCart={handleCartAdding}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
