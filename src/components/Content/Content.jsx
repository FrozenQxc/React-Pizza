import style from '../../styles/global.module.scss'
import PizzaCard from '../PizzaCard/PizzaCard'

const Content = () => {
	return (
		<div className={style.title}>
			Все пиццы
			<div className={style.content}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	)
}

export default Content
