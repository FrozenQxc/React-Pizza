import { useEffect, useState } from 'react'
import style from '../../styles/global.module.scss'
import Skeleton from '../PizzaCard/Skeleton'
import PizzaCard from './../PizzaCard/'

const Content = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://6540affb45bedb25bfc2594d.mockapi.io/items')
			.then(res => res.json())
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [])

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

export default Content
