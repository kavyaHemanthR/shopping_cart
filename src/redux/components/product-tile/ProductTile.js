import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/CartSlice";
import "./ProductTile.css"
const ProductTile = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  
    // Check if the product is in the cart
    const isInCart = cart.some((item) => item.id === product.id);
  
    return (
      <div className="product-tile-container">
        <div className="product-tile-image-container">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-tile-info-container">
          <p>{product.category}</p>
          <p style={{ textTransform: "capitalize" }}>{product.title}</p>
        </div>
        <div>
          {isInCart ? (
            <button onClick={() => dispatch(removeFromCart(product))}>
              REMOVE FROM CART
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(product))}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    );
  };

  export default ProductTile
  