import { PropTypes } from 'prop-types'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={style.root}
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
}

export default Pagination