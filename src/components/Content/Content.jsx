import { PropTypes } from 'prop-types'
import { useSelector } from 'react-redux'
import styles from '../../styles/_NotFound.module.scss'
import style from '../../styles/global.module.scss'
import Skeleton from '../PizzaCard/Skeleton'
import PizzaCard from './../PizzaCard/'

const Content = ({ status }) => {
	const { items } = useSelector(state => state.pizza)

	console.log(items)

	const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

	const pizza = items.map(obj => (
		<PizzaCard {...obj} key={obj.id} image={obj.imgUrl} />
	))

	return (
		<div className={style.title}>
			<h1>Все пиццы</h1>
			<div className={style.content}>
				{status === 'loading' ? (
					skeleton
				) : items.length === 0 ? (
					<div className={styles.block}>
						<h1>Пиццы не найдены🍕</h1>
						<p>
							К сожалению, данная страница отсутствует в нашем интернет-магазине
						</p>
					</div>
				) : (
					pizza
				)}
			</div>
		</div>
	)
}

Content.propTypes = {
	status: PropTypes.string,
}

export default Content
