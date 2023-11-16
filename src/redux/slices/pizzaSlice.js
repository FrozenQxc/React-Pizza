import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// асинхронный экшен
export const fetchPizza = createAsyncThunk(
	'pizza/fetchPizzaStatus',
	async (params, thunkAPI) => {
		const { order, sortBy, category, search, pageCount } = params
		const { data } = await axios.get(
			`https://6540affb45bedb25bfc2594d.mockapi.io/items?page=${pageCount}&limit=3&${category}&sortBy=${sortBy}&order=${order}${search}`
		)

		return data
	}
)

const initialState = {
	items: [],
	status: 'loading', // loading, success , error
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers: {
		[fetchPizza.pending]: state => {
			state.status = 'loading'
			state.items = []
		},
		[fetchPizza.fulfilled]: (state, action) => {
			state.status = 'success'
			state.items = action.payload
		},
		[fetchPizza.rejected]: state => {
			state.status = 'error'
			state.items = []
		},
	},
})

export const selectStatus = state => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
