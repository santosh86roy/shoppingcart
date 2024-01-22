import React from "react";
import { Link, useNavigate } from "react-router-dom";
import emptyCart from "../assets/Img/empty-cart.svg";
const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/buy");
  };
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center my-2">
              <div className="images-empty-cart">
                <img src={emptyCart} alt="order_confirmed" />
              </div>
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping....
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div
                  className="card mb-3 my-5"
                  style={{ width: "700px" }}
                  key={product.id}
                >
                  <div className="row g-0 " style={{ alignItems: "center" }}>
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">
                          {""}₹ {product.price}
                        </button>
                        <button
                          onClick={() => handleBuyNow(product)}
                          className="btn btn-warning"
                        >
                          buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length !== 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/checkout" className="btn btn-warning mx-5">
            check Out
          </Link>
          <button onClick={() => setCart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
