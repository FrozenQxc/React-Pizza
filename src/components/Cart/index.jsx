import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearItems } from '../../redux/slices/cartSlice.js'
import style from '../../styles/_cart.module.scss'
import CartEmpty from './CartEmpty.jsx'
import CartItem from './CartItem'

const Cart = () => {
	const items = useSelector(state => state.cart.items)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const dispatch = useDispatch()

	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	const onClickClean = () => {
		if (window.confirm('Очистить корзину?')) {
			dispatch(clearItems())
		}
	}

	if (!totalPrice) {
		return <CartEmpty />
	}

	console.log(items)

	return (
		<div className={style.cart}>
			<div className={style.Header}>
				<div className={style.bucket}>
					<img src='black.svg' alt='' />
					<p>Корзина</p>
				</div>
				<button onClick={onClickClean}>Очистить корзину</button>
			</div>
			{items.map(item => (
				<CartItem key={item.id} {...item} />
			))}

			<div className={style.oplata}>
				<div className={style.all__pizza}>
					<p>
						Всего пицц:
						<h2>{totalCount} шт</h2>
					</p>
					<Link to='/'>
						<button>Вернуться назад</button>
					</Link>
				</div>
				<div className={style.summa}>
					<h1>
						Сумма заказа:
						<p>{totalPrice} рублей</p>
					</h1>
					<button>Оплатить сейчас</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
