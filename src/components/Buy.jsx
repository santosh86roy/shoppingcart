import React from "react";
import orderConfirmedSvg from "../assets/Img/order-confirmed.svg";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <>
      <div className="buy-images">
        <img
          src={orderConfirmedSvg}
          alt="order_confirmed"
          className="w-52 mt-24"
        />
      </div>
      <div className="order-confirmation">
        <p>Order Confirmed!</p>
        <span className="text-neutral-500">
          {" "}
          Your order will be delivered in on 25th Jan 2024
        </span>
        <Link to="/">
          <span className="" style={{ textDecoration: "none" }}>
            Back to Home
          </span>
        </Link>
      </div>
    </>
  );
};

export default Buy;
