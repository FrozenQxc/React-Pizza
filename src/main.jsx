import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import store from './redux/store.js'

import { BrowserRouter } from 'react-router-dom'
import './styles/reset.scss'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
