import React, { useEffect, useRef, useState } from 'react'

// useSelector отвечает за вытаскивание данных
// useDispatch отвечает за действие
import axios from 'axios'
import qs from 'qs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Content from '../components/Content/Content'
import {
	setCategoryId,
	setFilters,
	setPageCount,
	setSortType,
} from '../redux/slices/filterSilce.js'
import Categories, { sortList } from './../components/Categories/Categories'
import Header from './../components/Header/Header'
import Pagination from './../components/Pagination/'

export const SearchContext = React.createContext()

const Home = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isSearch = useRef(false)
	const isMounted = useRef(false)
	const categoryId = useSelector(state => state.filter.categoryId)
	const sort = useSelector(state => state.filter.sort)
	const pageCount = useSelector(state => state.filter.pageCount)

	const [items, setItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	// Если был первый рендер, то проверяем URl-параметры и сохраняем в редуксе
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))

			const sort = sortList.find(
				obj => obj.sortProperty === params.sortProperty
			)
			dispatch(setFilters({ ...params, sort }))
			isSearch.current = true
		}
	}, [])

	// Если изменили параметры и был первый рендер
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				pageCount,
			})
			navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [categoryId, sort.sortProperty, searchValue, pageCount])

	// Если был первый рендер, то запрашиваем пиццы
	useEffect(() => {
		if (!isSearch.current) {
			fetchPizza()
		}

		isSearch.current = false
		// fetch(
		// 	`https://6540affb45bedb25bfc2594d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
		// )
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		setItems(json)
		// 		setIsLoading(false)
		// 	})
		window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue, pageCount])

	const fetchPizza = () => {
		setIsLoading(true)

		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc' // если в сорте есть минус добавляй asc если нет делай desc

		const sortBy = sort.sortProperty.replace('-', '') // если в сорте есть минус замени его на пустую строку

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
	}

	const onChangeCategory = id => {
		dispatch(setCategoryId(id))
	}

	const onChangeSort = id => {
		dispatch(setSortType(id))
	}

	const onChangePage = number => {
		dispatch(setPageCount(number))
	}

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Header />
			<Categories
				value={categoryId}
				onClickCategory={onChangeCategory}
				sortValue={sort}
				onClickSort={onChangeSort}
			/>

			<Content isLoading={isLoading} items={items} />
			<Pagination value={pageCount} onChangePage={onChangePage} />
		</SearchContext.Provider>
	)
}

export default Home
