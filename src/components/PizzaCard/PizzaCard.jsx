import { PropTypes } from 'prop-types'
import { useState } from 'react'
import style from '../../styles/global.module.scss'

const PizzaCard = ({ title, image, price, size, type }) => {
	const [count, setCount] = useState(1)

	const [activeIndex, setActiveIndex] = useState(0)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)

	const handleDecrement = () => {
		if (count < 10) {
			setCount(count + 1)
		} else {
			alert('Вы привысили значение!')
		}
	}

	const typeName = ['Тонкое', 'Традиционное']

	return (
		<div className={style.pizza_block}>
			<div className={style.pizza_card}>
				<img src={image} />
				<h1>{title}</h1>
				<div className={style.select_block}>
					<ul>
						{type.map((typeIndex, index) => (
							<li
								key={typeIndex}
								onClick={() => setActiveIndex(index)}
								className={activeIndex === index ? style.active : ''}
							>
								{typeName[typeIndex]}
							</li>
						))}
					</ul>
					<ul>
						{size.map((size, index) => (
							<li
								onClick={() => setActiveSizeIndex(index)}
								className={activeSizeIndex === index ? style.active : ''}
								key={index}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className={style.add}>
					<label htmlFor=''>{price} ₽</label>
					<button onClick={handleDecrement}>
						Добавить <label htmlFor=''>{count}</label>
					</button>
				</div>
			</div>
		</div>
	)
}

PizzaCard.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	type: PropTypes.arrayOf(PropTypes.number),
	size: PropTypes.arrayOf(PropTypes.number),
}

export default PizzaCard
