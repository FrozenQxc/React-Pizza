import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0,
	pageCount: 1,
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},

		setSortType(state, action) {
			state.sort = action.payload
		},
		setPageCount(state, action) {
			state.pageCount = action.payload
		},
		setFilters(state, action) {
			state.sort = action.payload.sort
			state.categoryId = Number(action.payload.categoryId)
			state.currentPage = Number(action.payload.currentPage)
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
	},
})

export const selectFilter = state => state.filter

export const {
	setCategoryId,
	setSortType,
	setPageCount,
	setFilters,
	setSearchValue,
} = filterSlice.actions

export default filterSlice.reducer
