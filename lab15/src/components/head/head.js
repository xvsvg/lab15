import './head.css'
import {Link} from 'react-router-dom'

export default function Head(){
	return(
		<div className="head">
			<Link to='/news'>Новости</Link>
			<Link to='/contacts'>Контакты</Link>
			<Link to='/about'>О проекте</Link>
		</div>
	)
}