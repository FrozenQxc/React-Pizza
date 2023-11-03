import { Link } from 'react-router-dom'
import style from '../../styles/_cart.module.scss'

const Cart = () => {
	// <h1>Ваша корзина пуста</h1>
	// <img src='1.jpg' alt='' />

	return (
		<div className={style.cart}>
			<div className={style.Header}>
				<div className={style.bucket}>
					<img src='black.svg' alt='' />
					<p>Корзина</p>
				</div>
				<button>Очистить корзину</button>
			</div>
			<div className={style.pizza}>
				<div className={style.title}>
					<img src='react.svg' alt='' />
					<ul>
						<li>Сырный цыпленок</li>
						<p>Тонкое тесто,26 см</p>
					</ul>
				</div>

				<div className={style._button}>
					<button>+</button>
					<p>2</p>
					<button>-</button>
				</div>
				<div className={style.rubli}>
					<p>100 рублей</p>
				</div>
				<button>Удалить</button>
			</div>
			<div className={style.oplata}>
				<div className={style.all__pizza}>
					<p>
						Всего пицц:
						<h2> 1 шт</h2>
					</p>
					<Link to='/'>
						<button>Вернуться назад</button>
					</Link>
				</div>
				<div className={style.summa}>
					<h1>
						Сумма заказа:
						<p>100 рублей</p>
					</h1>
					<button>Оплатить сейчас</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
