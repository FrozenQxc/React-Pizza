import ContentLoader from 'react-content-loader'
import style from '../../styles/global.module.scss'

const Skeleton = props => (
	<ContentLoader
		className={style.pizza_block}
		speed={2}
		width={280}
		height={500}
		viewBox='0 0 280 500'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='469' y='122' rx='0' ry='0' width='11' height='16' />
		<rect x='575' y='197' rx='0' ry='0' width='17' height='12' />
		<circle cx='126' cy='126' r='126' />
		<rect x='2' y='267' rx='16' ry='16' width='255' height='29' />
		<rect x='1' y='313' rx='0' ry='0' width='260' height='72' />
		<rect x='5' y='409' rx='15' ry='15' width='80' height='35' />
		<rect x='100' y='406' rx='17' ry='17' width='155' height='40' />
		<rect x='207' y='431' rx='0' ry='0' width='2' height='0' />
	</ContentLoader>
)

export default Skeleton
