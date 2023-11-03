import { Link } from 'react-router-dom'
import style from '../../styles/global.module.scss'

const Button = () => {
	return (
		<div className={style.basket__button}>
			<Link to='/cart'>
				<button>
					<label htmlFor=''>500 p</label>
					<img src='busket.svg' alt='' />3
				</button>
			</Link>
		</div>
	)
}

export default Button
