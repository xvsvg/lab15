import './main.css'
import { Section } from './mcomps/section/section'
import { Aside } from './mcomps/aside/aside'
import { Article } from './mcomps/article/article'

export default function Main() {
	return (
		<div className="main">
			<Section />
			<Article />
			<Aside />
		</div>
	)
}