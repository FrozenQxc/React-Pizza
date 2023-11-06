import React, { useEffect, useState } from 'react'

import Content from '../components/Content/Content'
import Categories from './../components/Categories/Categories'
import Header from './../components/Header/Header'
import Pagination from './../components/Pagination/'

export const SearchContext = React.createContext()

const Home = () => {
	const [items, setItems] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [searchValue, setSearchValue] = useState('')
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

		const category = categoryId > 0 ? `&category=${categoryId}` : '' // если категория больше нуля выводы Id категории если меньше нуля то возвращай пустую строку

		const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://6540affb45bedb25bfc2594d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then(res => res.json())
			.then(json => {
				setItems(json)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Header />
			<Categories
				value={categoryId}
				onClickCategory={i => setCategoryId(i)}
				sortValue={sortType}
				onClickSort={i => setSortType(i)}
			/>
			<Content isLoading={isLoading} items={items} />
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</SearchContext.Provider>
	)
}

export default Home
