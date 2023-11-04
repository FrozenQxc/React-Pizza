import { PropTypes } from 'prop-types'
import style from '../../styles/global.module.scss'
import Skeleton from '../PizzaCard/Skeleton'
import PizzaCard from './../PizzaCard/'

const Content = ({ isLoading, items }) => {
	return (
		<div className={style.title}>
			<h1>Все пиццы</h1>
			<div className={style.content}>
				{isLoading
					? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
					: items.map(obj => (
							<PizzaCard key={obj.id} {...obj} image={obj.imgUrl} />
					  ))}
			</div>
		</div>
	)
}

Content.propTypes = {
	isLoading: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.object),
}

export default Content
