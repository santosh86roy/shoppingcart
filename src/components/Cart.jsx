import React from "react";
import { Link, useNavigate } from "react-router-dom";
import emptyCart from "../assets/Img/empty-cart.svg";
const Cart = ({ cart, setCart, quantities }) => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/buy", { state: { cart, quantities } });
  };
  return (
    <>
      <div className="container my-5 cart-container" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center my-2 images-empty">
              <div className="images-empty-cart">
                <img src={emptyCart} alt="order_confirmed" />
              </div>
              <div className="empty-cart-content">
                <h1>Your Cart is Empty</h1>
                <Link
                  to={"/"}
                  className="btn btn-warning mobile_view_shoppingbtn"
                >
                  Continue Shopping....
                </Link>
              </div>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div
                  className="card mb-3 my-5 shopping_carts"
                  style={{ width: "100%", maxWidth: "700px" }}
                  key={product.id}
                >
                  <div
                    className="row g-0 cart-display "
                    style={{ alignItems: "center" }}
                  >
                    <div className="col-md-4 col-12">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 col-12">
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
          className="container text-center my-5 cart-actions"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to={{ pathname: "/checkout", state: { cart, quantities } }}
            className="btn btn-warning mx-5"
          >
            Check Out
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
