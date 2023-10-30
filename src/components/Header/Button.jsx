import style from '../../styles/global.module.scss'

const Button = () => {
	return (
		<div className={style.basket__button}>
			<button>
				<label htmlFor=''>500 p</label>
				<img src='busket.svg' alt='' />3
			</button>
		</div>
	)
}

export default Button
