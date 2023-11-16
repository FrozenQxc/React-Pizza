import { useEffect, useRef } from 'react'

// useSelector отвечает за вытаскивание данных
// useDispatch отвечает за действие
import qs from 'qs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Content from '../components/Content/Content'
import {
	selectFilter,
	setCategoryId,
	setFilters,
	setPageCount,
	setSortType,
} from '../redux/slices/filterSlice.js'

import { fetchPizza, selectStatus } from '../redux/slices/pizzaSlice.js'
import Categories, { sortList } from './../components/Categories/Categories'
import Header from './../components/Header/Header'
import Pagination from './../components/Pagination/'

const Home = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isSearch = useRef(false)
	const isMounted = useRef(false)
	const { categoryId, sort, pageCount, searchValue } = useSelector(selectFilter)

	const { status } = useSelector(selectStatus)

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
	}, [categoryId, sort.sortProperty, searchValue, pageCount, navigate])

	useEffect(() => {
		if (!isSearch.current) {
			getPizza()
		}

		isSearch.current = false

		window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue, pageCount])

	const getPizza = async () => {
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sort.sortProperty.replace('-', '')
		const category = categoryId > 0 ? `&category=${categoryId}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		dispatch(
			fetchPizza({
				order,
				sortBy,
				category,
				search,
				pageCount,
			})
		)
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
		<>
			<Header />
			<Categories
				value={categoryId}
				onClickCategory={onChangeCategory}
				sortValue={sort}
				onClickSort={onChangeSort}
			/>

			<Content status={status} />
			<Pagination value={pageCount} onChangePage={onChangePage} />
		</>
	)
}

export default Home
