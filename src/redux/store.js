import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'
import pizza from './slices/pizzaSlice'

const store = configureStore({
	reducer: {
		filter,
		cart,
		pizza,
	},
})

export default store
