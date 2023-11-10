import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSilce'

const store = configureStore({
	reducer: {
		filter,
	},
})

export default store
