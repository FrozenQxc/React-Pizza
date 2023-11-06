import { Link } from 'react-router-dom'
import style from '../../styles/global.module.scss'
import Search from '../Search'
import Button from './Button'

const Header = () => {
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
			<Search />

			<Button />
		</div>
	)
}

export default Header
