import { Route, Routes } from 'react-router-dom'

import CartPage from './pages/CartPage'
import FullPizza from './pages/FullPizza'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import style from './styles/global.module.scss'

function App() {
	return (
		<div className={style.App}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/pizza/:id' element={<FullPizza />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
