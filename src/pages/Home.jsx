import React, { useEffect, useState } from 'react'

// useSelector отвечает за вытаскивание данных
// useDispatch отвечает за действие
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../components/Content/Content'
import {
	setCategoryId,
	setPageCount,
	setSortType,
} from '../redux/slices/filterSilce.js'
import Categories from './../components/Categories/Categories'
import Header from './../components/Header/Header'
import Pagination from './../components/Pagination/'

export const SearchContext = React.createContext()

const Home = () => {
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filter.categoryId)
	const sortType = useSelector(state => state.filter.sort)
	const pageCount = useSelector(state => state.filter.pageCount)

	const [items, setItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const onChangeCategory = id => {
		dispatch(setCategoryId(id))
	}

	const onChangeSort = id => {
		dispatch(setSortType(id))
	}

	const onChangePage = number => {
		dispatch(setPageCount(number))
	}

	useEffect(() => {
		setIsLoading(true)

		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc' // если в сорте есть минус добавляй asc если нет делай desc

		const sortBy = sortType.sortProperty.replace('-', '') // если в сорте есть минус замени его на пустую строку

		const category = categoryId > 0 ? `&category=${categoryId}` : '' // если категория больше нуля выводы Id категории если меньше нуля то возвращай пустую строку

		const search = searchValue ? `&search=${searchValue}` : ''

		axios
			.get(
				`https://6540affb45bedb25bfc2594d.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
			)
			.then(res => {
				setItems(res.data)
				setIsLoading(false)
			})

		// fetch(
		// 	`https://6540affb45bedb25bfc2594d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		// )
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		setItems(json)
		// 		setIsLoading(false)
		// 	})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, pageCount])

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Header />
			<Categories
				value={categoryId}
				onClickCategory={onChangeCategory}
				sortValue={sortType}
				onClickSort={onChangeSort}
			/>

			<Content isLoading={isLoading} items={items} />
			<Pagination value={pageCount} onChangePage={onChangePage} />
		</SearchContext.Provider>
	)
}

export default Home
