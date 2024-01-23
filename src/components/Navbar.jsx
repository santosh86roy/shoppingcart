import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaShoppingCart } from "react-icons/fa";
import NavbarFilter from "./NavbarFilter";
import { Modal, Button } from "react-bootstrap";
import Popup from "reactjs-popup";

const Navbar = ({ setData, cart }) => {
  console.log("cart", cart);
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);
  const addToCart = (product) => {
    // Call addToCart with the selected quantity
    addToCart(product, selectedQty);
  };
  const [cartDetails, setCartDetails] = useState([]);
  const filterByCategory = (category) => {
    const element = items.filter((Product) => Product.category === category);
    // console.log(element);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            <div className="cart_icon">🛒</div>
            <span> EKart</span>
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search products"
            />
          </form>

          {/* <Link to={"/cart"} className="cart"> */}
          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={handleShow}
          >
            <FaShoppingCart style={{ fontSize: "1.5rem" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          {/* </Link> */}
        </div>
        {/* <NavbarFilter /> */}
        <div className="sidebar">
          {location.pathname == "/" && (
            <div className="nav-bar-wrapper">
              <div className="navbar-leftside">
                <div className="items">Filter by {"->"}</div>
                <div onClick={() => setData(items)} className="items">
                  No Filter
                </div>
                <div
                  onClick={() => filterByCategory("mobiles")}
                  className="items"
                >
                  Mobiles
                </div>
                <div
                  onClick={() => filterByCategory("laptops")}
                  className="items"
                >
                  Laptops
                </div>
                <div
                  onClick={() => filterByCategory("tablets")}
                  className="items"
                >
                  Tablets
                </div>
              </div>
              <div className="mobile-view">
                <div onClick={() => filterByPrice(29999)} className="items">
                  {/* {">="}0 to 29999 */}0 to 30k
                </div>
                <div onClick={() => filterByPrice(49999)} className="items">
                  {/* {">="}30000 to 49999 */}
                  30k to 50k
                </div>
                <div onClick={() => filterByPrice(69999)} className="items">
                  {/* {">="}50000 to 69999 */}
                  50k to 70k
                </div>
                <div onClick={() => filterByPrice(89999)} className="items">
                  {/* {">="}70000 to 89999 */}
                  70k to 90k
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="custom-modal">
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="scrollable">
            {cart.length === 0 ? (
              <p>Empty Cart! No items in the cart</p>
            ) : (
              <>
                {cart.map((item) => {
                  console.log("CartItem:", item); // Add this console log for debugging
                  return (
                    <div key={item.id}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px",
                        }}
                      >
                        {" "}
                        <p>
                          <img
                            src={item.imgSrc}
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                          />
                        </p>
                        <p>{item.title}</p>
                        <p>
                          Qty: <strong>{item.quantity}</strong>
                        </p>
                        <p>
                          {" "}
                          <strong>Price: ₹{item.price}</strong>
                        </p>
                      </div>

                      <hr />
                    </div>
                  );
                })}
                <p className="text-center " style={{ fontWeight: "bold" }}>
                  Subtotal: ₹
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to="/cart"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              className="btn btn-primary"
              onClick={handleClose}
            >
              Checkout
            </Link>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
