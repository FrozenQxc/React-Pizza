import style from "../../styles/global.module.scss";

const CartEmpty = () => {
  return (
    <div className={style.emptyCart}>
      <h2>Корзина пуста</h2>
      <p>
        Что бы добавить товар вернитесь на <a href="/">главную страницу</a>
      </p>
      <img src="/public/cat-spinning.gif"></img>
    </div>
  );
};

export default CartEmpty;
