import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'

const store = configureStore({
	reducer: {
		filter,
		cart,
	},
})

export default store
