import style from '../../styles/global.module.scss'

const PizzaCard = () => {
	return (
		<div className={style.pizza_block}>
			<div className={style.pizza_card}>
				<img src='/src/assets/pizza.svg' alt='' />
				<h1>Чизбургер-пицца</h1>
				<div className={style.select_block}>
					<ul>
						<li className={style.active}>тонкое</li>
						<li>традиционное</li>
					</ul>
					<ul>
						<li>26 см.</li>
						<li>30 см.</li>
						<li>40 см.</li>
					</ul>
				</div>
				<div className={style.add}>
					<label htmlFor=''>От 395 ₽</label>
					<button>Добавить</button>
				</div>
			</div>
		</div>
	)
}

export default PizzaCard
