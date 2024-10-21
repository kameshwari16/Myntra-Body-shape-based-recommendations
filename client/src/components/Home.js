import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import "../style/home.css";
import "../images/myntra/sc.png";
import Footer from "./Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:27017/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Banner />
      <h4 className="text-center">SHOP BY CATEGORY</h4>
      {/* <img src="s"></img> */}
      <section className="container-fluid product-grid">
        {products.map((product) => (
          <div className="ProductCard" key={product._id}>
            <Link to={`/product/${product.productId}`} className="cardLink">
              <img
                src={product.productImage}
                className="card-img-top"
                alt={product.productName}
              />
              <div className="card-body">
                <h5 className="card-title fs-6">{product.productName}</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="fs-6 fw-bold">Rs. {product.productPrice}</span>
                  <span
                    className="text-danger fw-bold"
                    style={{ fontSize: "11px", marginLeft: "5px" }}
                  >
                    ({product.productColor})
                  </span>
                </div>
              </div>
            </Link>
            <div className="card-footer">
              <Link to={"cart"} className="btn btn-add-to-bag">
                Add to Bag
              </Link>
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </>
  );
}
