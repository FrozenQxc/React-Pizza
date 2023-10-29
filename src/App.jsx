import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import style from './styles/global.module.scss'

function App() {
	return (
		<div className={style.App}>
			<Header />
			<Sidebar />

			<Content />
		</div>
	)
}

export default App
