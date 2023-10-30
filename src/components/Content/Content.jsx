import style from '../../styles/global.module.scss'
import PizzaCard from '../PizzaCard/PizzaCard'

import pizza from '../../assets/pizza.json'

const Content = () => {
	return (
		<div className={style.title}>
			<h1>Все пиццы</h1>
			<div className={style.content}>
				{pizza.map(obj => (
					<PizzaCard {...obj} image={obj.imgUrl} key={obj.id} />
				))}
			</div>
		</div>
	)
}

export default Content
