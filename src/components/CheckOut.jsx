import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Checkout = ({ cart, setCart }) => {
  const [quantity, setQuantity] = useState({});

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) =>
        total +
        (product.price ? product.price : 0) *
          (quantity[product.id] ? quantity[product.id] : 0),
      0
    );
  };

  const tax = 0.18; // 18%
  const shippingCharges = 100;

  const handleIncrement = (product) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [product.id]: (prevQuantity[product.id] || 0) + 1,
    }));
  };

  const handleDecrement = (product) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [product.id]: Math.max((prevQuantity[product.id] || 0) - 1, 0),
    }));
  };

  const handleDelete = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
    setQuantity((prevQuantity) => {
      const { [productId]: deletedProduct, ...rest } = prevQuantity;
      return rest;
    });
  };

  const grossTotal = calculateTotal();
  const taxAmount = grossTotal * tax;
  const payableAmount = grossTotal + taxAmount + shippingCharges;

  return (
    <div className="container">
      <h2>Checkout</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>
                <span onClick={() => handleDecrement(product)}>
                  <FaCaretLeft />
                </span>
                {quantity[product.id] || 0}
                <span onClick={() => handleIncrement(product)}>
                  <FaCaretRight />
                </span>
              </td>
              <td>
                {product.price
                  ? product.price * (quantity[product.id] || 0)
                  : 0}
              </td>
              <td>
                <span onClick={() => handleDelete(product.id)}>
                  <MdDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h4>Total Amount</h4>
        <p>Gross Total: ₹ {grossTotal}</p>
        <p>
          Tax ({tax * 100}%): ₹ {taxAmount}
        </p>
        <p>Shipping Charges: ₹ {shippingCharges}</p>
        <h3>Payable Amount: ₹ {payableAmount}</h3>
      </div>
    </div>
  );
};

export default Checkout;
