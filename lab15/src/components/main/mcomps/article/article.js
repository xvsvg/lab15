import './article.css'
import { Routes, Route } from 'react-router-dom'
import { News } from '../../../articlecomps/news/news'
import { About } from '../../../articlecomps/about/about'
import { Contacts } from '../../../articlecomps/contacts/contacts'
import { NotFound } from '../../../articlecomps/404/404'

export function Article() {
	return (
		<div className="article">
			<Routes>
				<Route path='/news' element={<News />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}