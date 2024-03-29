import { PropTypes } from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import style from '../../styles/_categories.module.scss'

export const sortList = [
	{ name: 'Популярности(DESC)', sortProperty: 'rating' },
	{ name: 'Популярности(ASC)', sortProperty: '-rating' },
	{ name: 'Цене(DESC)', sortProperty: 'price' },
	{ name: 'Цене(ASC)', sortProperty: '-price' },
	{ name: 'Алфавиту(DESC)', sortProperty: 'title' },
	{ name: 'Алфавиту(ASC)', sortProperty: '-title' },
]

const Categories = ({ value, sortValue, onClickCategory, onClickSort }) => {
	const [openSelect, setOpenSelect] = useState(false)

	const sortRef = useRef()

	useEffect(() => {
		const handleClickOutside = event => {
			const path = event.composedPath()

			if (!path.includes(sortRef.current)) {
				setOpenSelect(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	const onClickList = index => {
		onClickSort(index)
		setOpenSelect(false)
	}

	return (
		<div className={style.menu}>
			<div className={style.categories}>
				<ul>
					{categories.map((categoryName, index) => (
						<li
							key={index}
							onClick={() => onClickCategory(index)}
							className={value === index ? style.active : ''}
						>
							{categoryName}
						</li>
					))}
				</ul>
			</div>

			<div ref={sortRef} className={style.select}>
				<b htmlFor=''>Сортировка по: </b>
				<span
					className={style.title}
					onClick={() => setOpenSelect(!openSelect)}
				>
					{sortValue.name}
				</span>

				{openSelect && (
					<div className={style.popup}>
						{sortList.map((obj, index) => (
							<span
								key={index}
								onClick={() => onClickList(obj)}
								className={
									sortValue.sortProperty === obj.sortProperty
										? style.active
										: ''
								}
							>
								{obj.name}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
Categories.propTypes = {
	value: PropTypes.number,
	sortValue: PropTypes.object,
	onClickSort: PropTypes.func,
	onClickCategory: PropTypes.func,
}
export default Categories
