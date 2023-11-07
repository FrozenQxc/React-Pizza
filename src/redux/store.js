import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'

const store = configureStore({
	reducer: {
		counter: filterReducer,
	},
})

export default store
