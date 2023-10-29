import style from '../../styles/global.module.scss'
import Button from './Button'

const Header = () => {
	return (
		<div className={style.Header}>
			<div className={style.logo}>
				<img src='/src/assets/react.svg' alt='' />
				<div className={style.logo__text}>
					<h1>REACT PIZZA</h1>
					<h2>самая вкусная пицца во вселенной</h2>
				</div>
			</div>
			<Button />
		</div>
	)
}

export default Header
