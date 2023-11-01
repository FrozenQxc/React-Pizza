import { PropTypes } from 'prop-types'
import style from '../../styles/global.module.scss'
import PizzaCard from '../PizzaCard/PizzaCard'

const Content = ({ items }) => {
	return (
		<div className={style.title}>
			<h1>Все пиццы</h1>
			<div className={style.content}>
				{items.map(obj => (
					<PizzaCard {...obj} image={obj.imgUrl} key={obj.id} />
				))}
			</div>
		</div>
	)
}
Content.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
}

export default Content
