import style from '../../styles/global.module.scss'

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.categories}>
				<ul>
					<li>Все</li>
					<li>Мясные</li>
					<li>Вегетарианская</li>
					<li>Гриль</li>
					<li>Острые</li>
					<li>Закрытые</li>
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

export default Sidebar
