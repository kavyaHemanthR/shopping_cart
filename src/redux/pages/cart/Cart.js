import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { useEffect, useState } from "react";
import { removeFromCart } from "../../store/slices/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (cartItem) => {
    console.log(cartItem);

    dispatch(removeFromCart(cartItem));
  };
  useEffect(() => {
    setTotalCartAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="cart-container">
      {cart?.length ? (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image-container">
              <img src={item.image} alt="" />
            </div>

            <div className="cart-item-info-container">
              <p>{item.category}</p>
              <p>{item.description}</p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)}>
                REMOVE FROM CART
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>Cart is empty</h3>
          <button onClick={() => navigate("/")}>SHOP NOW</button>
        </div>
      )}
      {cart && cart.length > 0 && (
        <div>
          <h2>Total Amount : {totalCartAmount}</h2>
        </div>
      )}
    </div>
  );
};
export default Cart;
