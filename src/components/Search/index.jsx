import { debounce } from 'lodash'
import { PropTypes } from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { SearchContext } from './../../pages/Home'
import style from './search.module.scss'

const Search = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext)
	const [value, setValue] = useState('')
	const inputRef = useRef() // reference - означает ссылка

	const updateSearchValue = useCallback(
		debounce(str => {
			setSearchValue(str)
		}, 300),
		[]
	)

	const onClickClear = () => {
		setSearchValue('')
		setValue('')
		inputRef.current.focus()
	}
	const onChangeInput = event => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={style.root}>
			<img className={style.lupa} src='lupa.svg' alt='' />
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				type='text'
				placeholder='Поиск пиццы...'
			/>
			{searchValue && (
				<img
					onClick={onClickClear}
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
