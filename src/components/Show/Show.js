import React, { Component, PureComponent } from 'react'
import './Show.css'
import { getShowInfo } from '../../api';

export default class Show extends PureComponent {
	state = {
		show: '',
		data: null,
	}

	// Проверяем изменился ли props.showId с прошлого рендеринга
	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.showId !== prevState.show 
			? {data: null, show: nextProps.showId}
			: null
	}

	// После рендера компоненты ждем новых данных для state.data
	componentDidUpdate() {
		const {show, data} = this.state

		if (show !== '' && data === null) {
			getShowInfo(show).then(resp => {
				this.setState({ data: resp })
			})
		}
	}
	
	render() {
		const { data } = this.state
		
		console.log(data)
		return data == null
			? (<p>Шоу не выбрано</p>)
			: (<div className="show">
				<img className="schow-image" src={data.image.medium} alt="Картинка" />
				<h2>{data.name}</h2>
				<p><b>Жанр: </b> 
					{data.genres.map(item => {
						return `${item}, `
					})}
				</p>
				<p>Описание</p>
			</div>
		)
	}
}