import { PropTypes } from 'prop-types'
import React from 'react'
import { SearchContext } from './../../pages/Home'
import style from './search.module.scss'

const Search = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext)
	return (
		<div className={style.root}>
			<img className={style.lupa} src='lupa.svg' alt='' />
			<input
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				type='text'
				placeholder='Поиск пиццы...'
			/>
			{searchValue && (
				<img
					onClick={() => setSearchValue('')}
					className={style.close}
					src='close.svg'
					alt=''
				/>
			)}
		</div>
	)
}

Search.propTypes = {
	setSearchValue: PropTypes.func,
	searchValue: PropTypes.string,
}

export default Search
