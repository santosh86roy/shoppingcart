import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const [quantities, setQuantities] = useState({});
  const addToCart = (id, price, title, description, imgSrc) => {
    const quantity = quantities[id] || 0;
    const obj = {
      id,
      price: price * quantity,
      title,
      description,
      imgSrc,
      quantity,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleQuantityChange = (id, newQuantity) => {
    const updatedQuantity = Math.max(0, newQuantity);
    setQuantities({ ...quantities, [id]: updatedQuantity });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            const quantity = quantities[product.id] || 0;
            return (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 my-3 text-center"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div
                      className="qnty-price"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="btn-group" role="group">
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleQuantityChange(product.id, quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button className="btn btn-secondary mx-2" disabled>
                          {quantity}
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            handleQuantityChange(product.id, quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button className="btn btn-primary mx-3 ">
                        {product.price * quantity} ₹
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                        )
                      }
                      className="btn btn-warning my-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
