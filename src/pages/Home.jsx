import { useEffect, useState } from 'react'
import Content from '../components/Content/Content'
import Categories from './../components/Categories/Categories'
import Header from './../components/Header/Header'

const Home = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [categoryId, setCategoryId] = useState(0)
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	})

	useEffect(() => {
		setIsLoading(true)

		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc' // если в сорте есть минус добавляй asc если нет делай desc

		const sortBy = sortType.sortProperty.replace('-', '') // если в сорте есть минус замени его на пустую строку

		const category = categoryId > 0 ? `category=${categoryId}` : '' // если категория больше нуля выводы Id категории если меньше нуля то возвращай пустую строку

		fetch(
			`https://6540affb45bedb25bfc2594d.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
		)
			.then(res => res.json())
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType])

	return (
		<>
			<Header />
			<Categories
				value={categoryId}
				onClickCategory={i => setCategoryId(i)}
				sortValue={sortType}
				onClickSort={i => setSortType(i)}
			/>
			<Content isLoading={isLoading} items={items} />
		</>
	)
}

export default Home
