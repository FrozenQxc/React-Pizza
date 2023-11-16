import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'

const FullPizza = () => {
	const [pizza, setPizza] = useState<{
		title: string
		imgUrl: string
		price: number
	}>({
		title: '',
		imgUrl: '',
		price: 0,
	})

	const { id } = useParams()

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					'https://6540affb45bedb25bfc2594d.mockapi.io/items/' + id
				)
				setPizza(data)
			} catch (error) {
				alert('Ошибка', error)
			}
		}
		fetchPizza()
	}, [])

	if (!pizza) {
		return 'Загрузка....'
	}

	return (
		<>
			<Header />
			<div>
				<img src='' alt='' />
				<h2>{pizza.title}</h2>
				<img src={pizza.imgUrl} alt='' />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					dolores odit veritatis nemo vitae ab adipisci delectus voluptate quis
					aperiam, voluptates ex nesciunt nam ullam natus, quod vel nulla?
					Provident?
				</p>
				<h4>{pizza.price}</h4>
			</div>
		</>
	)
}

export default FullPizza
