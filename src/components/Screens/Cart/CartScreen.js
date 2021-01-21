import React, { useEffect, useState } from "react";
import "./CartScreen.css";
import "./CartScreen.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

toast.configure();

export default function CartScreen() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  var totalQuantity = 0;
  // const jwt = JSON.parse(localStorage.getItem('jwt'));

  useEffect(() => {
    const userId = "5fe839e626c5a8161c7760fb";
    if (userId === "") {
      toast.error("Please sign in to continue !!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/signin");
    } else {
      // userId = "http://localhost:3001/api/customer/getcart/" + userId;
      Axios.get(`http://localhost:3001/api/customer/getcart/${userId}`, {
        id: userId,
      }).then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          setCartItems(result.data.itemList);
          setTotalPrice(result.data.totalPrice);
        } else {
          toast.warning("Your cart it empty!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    }
  }, []);
  return (
    <div className="CartScreenContainer">
      <div class="CartScreenbasket">
        <div class="CartScreenbasket-labels">
          <ul className="CartScreenUl">
            <li class="CartScreenitem item-heading CartScreenLi">Item</li>
            <li class="CartScreenquantity CartScreenLi">Quantity</li>
            <li class="CartScreensubtotal CartScreenLi">Subtotal</li>
          </ul>
        </div>
        {cartItems.map((item) => (
          <div class="CartScreenbasket-product">
            <div class="CartScreenitem">
              <div class="CartScreenproduct-image">
                <img
                  src={item.Image}
                  alt="Placholder Image 2"
                  class="CartScreenproduct-frame CartScreenImg"
                />
              </div>
              <div class="CartScreenproduct-details">
                <h1>
                  <a href="#">{item.productName}</a>
                </h1>
                <p>
                  <strong>{item.Description}</strong>
                </p>
                <h2>Price: ₹{item.Price}</h2>
                <p style={{ color: "#ffffff" }}>
                  {(totalQuantity = totalQuantity + item.Quantity)}
                </p>
              </div>
            </div>
            <div class="CartScreenquantity">
              <input
                type="number"
                value={item.Quantity}
                min="1"
                class="CartScreenquantity-field CartScreenInput"
              />
            </div>
            <div class="CartScreensubtotal">
              <h3>₹{item.Quantity * item.Price}</h3>
            </div>
            <div class="CartScreenremove">
              <button className="CartScreenButton CartScreenRemoveButton">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>{" "}
      <aside className="CartScreenAside">
        <div class="CartScreensummary">
          <div class="CartScreensummary-total-items">
            <span class="CartScreentotal-items"></span> BIDDING SUMMARY
          </div>
          <div class="CartScreensummary-subtotal">
            <div class="CartScreensubtotal-title">Products</div>
            <div
              class="CartScreensubtotal-value final-value"
              id="basket-subtotal"
            >
              {cartItems.length}
            </div>
            <div class="CartScreensubtotal-title">Quantity</div>
            <div
              class="CartScreensubtotal-value final-value"
              id="basket-subtotal"
            >
              {totalQuantity}
            </div>
          </div>
          <div class="CartScreensummary-total">
            <div class="CartScreentotal-title">Total</div>
            <div class="CartScreentotal-value final-value" id="basket-total">
              ₹{totalPrice}
            </div>
          </div>
          <div class="CartScreensummary-checkout">
            <button className="CartScreenButton CartScreencheckout-cta">
              BID NOW
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}