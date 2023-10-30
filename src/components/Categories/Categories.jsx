import { useState } from 'react'
import style from '../../styles/_categories.module.scss'

const Categories = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	// const onClickCategory = index => {
	// 	setActiveIndex(index)
	// 	console.log(index)
	// }

	return (
		<div className={style.menu}>
			<div className={style.categories}>
				<ul>
					{categories.map((name, index) => (
						<li
							key={index}
							onClick={() => setActiveIndex(index)}
							className={activeIndex === index ? style.active : ''}
						>
							{name}
						</li>
					))}
				</ul>
			</div>
			<div className={style.select}>
				<label htmlFor=''>Сортировка по:</label>
				<select name='' id=''>
					<option value=''>Популярности</option>
					<option value=''>По цене</option>
					<option value=''>По алфавиту</option>
				</select>
			</div>
		</div>
	)
}

export default Categories
