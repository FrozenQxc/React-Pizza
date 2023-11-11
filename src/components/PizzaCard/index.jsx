import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import style from '../../styles/global.module.scss'

const typeName = ['Тонкое', 'Традиционное']

const PizzaCard = ({ id, title, image, price, type, size }) => {
	const [count, setCount] = useState(0)
	const cartItem = useSelector(state =>
		state.cart.items.find(obj => obj.id === id)
	)
	const [activeIndex, setActiveIndex] = useState(0)
	const [activeSizeIndex, setActiveSizeIndex] = useState(0)
	const dispatch = useDispatch()

	const addedCount = cartItem ? cartItem.count : 0

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			image,
			type: typeName[activeIndex],
			size: size[activeSizeIndex],
		}
		dispatch(addItem(item))
	}

	const handleDecrement = () => {
		onClickAdd()

		if (count < 10) {
			setCount(count + 1)
		} else {
			alert('Вы превысили значение!')
		}
	}

	return (
		<div className={style.pizza_block}>
			<div className={style.pizza_card}>
				<img src={image} alt={title} />
				<p>{title}</p>
				<div className={style.select_block}>
					{type && type.length > 0 && (
						<ul>
							{type.map((typeIndex, index) => (
								<li
									key={index}
									onClick={() => setActiveIndex(index)}
									className={activeIndex === index ? style.active : ''}
								>
									{typeName[typeIndex]}
								</li>
							))}
						</ul>
					)}
					{size && size.length > 0 && (
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
					)}
				</div>
				<div className={style.add}>
					<label htmlFor=''>{price} ₽</label>
					<button onClick={handleDecrement}>
						Добавить {addedCount > 0 && <label htmlFor=''>{addedCount}</label>}
					</button>
				</div>
			</div>
		</div>
	)
}

PizzaCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	type: PropTypes.arrayOf(PropTypes.number),
	size: PropTypes.arrayOf(PropTypes.number),
}

export default PizzaCard
