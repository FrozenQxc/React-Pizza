import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import style from '../../styles/global.module.scss'
import Search from './../Search/index'

const Header = () => {
	const { items, totalPrice } = useSelector(state => state.cart)

	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	const dispatch = useDispatch()

	const location = useLocation()

	return (
		<div className={style.Header}>
			<Link to='/'>
				<div className={style.logo}>
					<img src='react.svg' alt='' />

					<div className={style.logo__text}>
						<h1>REACT PIZZA</h1>
						<h2>самая вкусная пицца во вселенной</h2>
					</div>
				</div>
			</Link>
			{location.pathname !== '/cart' && <Search />}

			<div className={style.basket__button}>
				<Link to='/cart'>
					<button>
						<label htmlFor=''>{totalPrice} ₽</label>
						<img src='busket.svg' alt='' />
						<span>{totalCount}</span>
					</button>
				</Link>
			</div>
			{/* <Button /> */}
		</div>
	)
}

export default Header
