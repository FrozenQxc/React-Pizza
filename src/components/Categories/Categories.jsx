import { useState } from 'react'
import style from '../../styles/_categories.module.scss'

const Categories = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [openSelect, setOpenSelect] = useState(false)
	const [selectName, setSelectName] = useState(0)

	const list = ['Популярности', 'Цене', 'Алфавиту']

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	const onClickList = index => {
		setSelectName(index)
		setOpenSelect(false)
	}

	return (
		<div className={style.menu}>
			<div className={style.categories}>
				<ul>
					{categories.map((category, index) => (
						<li
							key={index}
							onClick={() => setActiveIndex(index)}
							className={activeIndex === index ? style.active : ''}
						>
							{category}
						</li>
					))}
				</ul>
			</div>

			<div className={style.select}>
				<b htmlFor=''>Сортировка по: </b>
				<span
					className={style.title}
					onClick={() => setOpenSelect(!openSelect)}
				>
					{list[selectName]}
				</span>

				{openSelect && (
					<div className={style.popup}>
						{list.map((name, index) => (
							<span
								key={index}
								onClick={() => onClickList(index)}
								className={selectName === index ? style.active : ''}
							>
								{name}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Categories
