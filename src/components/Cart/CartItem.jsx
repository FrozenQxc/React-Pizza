import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";

import {
  addItem,
  minusItem,
  removeItem as removeFromCart,
} from "../../redux/slices/cartSlice.js";

import style from "../../styles/_cart.module.scss";

const CartItem = ({ id, title, image, price, type, size, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={style.pizza}>
      <div className={style.title}>
        <img src={image} alt="" />
        <ul>
          <li>{title}</li>
          <p>
            {type}, {size} см
          </p>
        </ul>
      </div>
      <div className={style._button}>
        <button onClick={onClickPlus}>+</button>
        <p>{count}</p>
        <button disabled={count === 1} onClick={onClickMinus}>
          -
        </button>
      </div>
      <div className={style.rubli}>
        <p>{price * count} ₽</p>
      </div>
      <button onClick={onClickRemove}>Удалить</button>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  count: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.arrayOf(PropTypes.number),
};

export default CartItem;
