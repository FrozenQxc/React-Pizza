import { PropTypes } from 'prop-types'
import styles from '../../styles/_NotFound.module.scss'
import style from '../../styles/global.module.scss'
import Skeleton from '../PizzaCard/Skeleton'
import PizzaCard from './../PizzaCard/'

const Content = ({ isLoading, items }) => {
	console.log(isLoading)

	if (items.length === 0) {
		return (
			<div className={styles.block}>
				<h1>Пиццы не найдены🍕</h1>
				<p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
			</div>
		)
	}

	// фильтрация на уровне клиента

	// const filteredPizza = items.filter(obj => {
	// 	return obj.title.toLowerCase().includes(inputValue.toLowerCase())
	// })

	const pizza = items.map(obj => (
		<PizzaCard key={obj.id} {...obj} image={obj.imgUrl} />
	))

	// if (inputValue.length === 0) {
	// 	return (
	// 		<div className={styles.block}>
	// 			<h1>По вашему запросу пиццы не найдены🍕</h1>
	// 			<p>Проверьте правильность запроса</p>
	// 		</div>
	// 	)
	// }

	const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

	return (
		<div className={style.title}>
			<h1>Все пиццы</h1>
			<div className={style.content}>{isLoading ? skeleton : pizza}</div>
		</div>
	)
}

Content.propTypes = {
	isLoading: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.object),
}

export default Content
