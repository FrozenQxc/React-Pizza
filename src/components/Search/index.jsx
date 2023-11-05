import { PropTypes } from 'prop-types'
import style from './search.module.scss'

const Search = ({ setInputValue, inputValue }) => {
	return (
		<div className={style.root}>
			<img className={style.lupa} src='lupa.svg' alt='' />
			<input
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
				type='text'
				placeholder='Поиск пиццы...'
			/>
			{inputValue && (
				<img
					onClick={() => setInputValue('')}
					className={style.close}
					src='close.svg'
					alt=''
				/>
			)}
		</div>
	)
}

Search.propTypes = {
	setInputValue: PropTypes.func,
	inputValue: PropTypes.string,
}

export default Search
