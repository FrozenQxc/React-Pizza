import { PropTypes } from 'prop-types'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

const Pagination = ({ onChangePage, value }) => {
	return (
		<ReactPaginate
			className={style.root}
			forcePage={value - 1}
			breakLabel='...'
			nextLabel='>'
			onPageChange={event => {
				onChangePage(event.selected + 1)
			}}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}

Pagination.propTypes = {
	onChangePage: PropTypes.func,
	value: PropTypes.number,
}

export default Pagination
