import { useEffect, useState } from 'react'
import Categories from './components/Categories/Categories'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import style from './styles/global.module.scss'

function App() {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://6540affb45bedb25bfc2594d.mockapi.io/items')
			.then(res => res.json())
			.then(json => setItems(json))
	}, [])

	return (
		<div className={style.App}>
			<Header />
			<Categories />
			<Content items={items} />
		</div>
	)
}

export default App
