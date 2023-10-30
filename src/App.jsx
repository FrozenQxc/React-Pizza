import Categories from './components/Categories/Categories'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import style from './styles/global.module.scss'

function App() {
	return (
		<div className={style.App}>
			<Header />
			<Categories />
			<Content />
		</div>
	)
}

export default App
