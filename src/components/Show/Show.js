import React from 'react'
import './Show.css';

const URLs = {
  house: "http://api.tvmaze.com/shows/118",
  santaBarbara: "http://api.tvmaze.com/shows/5909",
  bigBang: "http://api.tvmaze.com/shows/66"
}
class Show extends React.Component {
  state = {
    showId: '',
    data: {},
  }

  componentDidMount () {
    const { showId } = this.props;  
    if (showId){
      fetch(URLs[showId])
            .then(response => response.json())
            .then(data => this.setState({ data, showId }));  
    }        
  }

  render(){
    const { data: { image, name, genres, summary }} = this.state;   
    const { showId } = this.props;   
    if (showId === '') {
      return <p className="show-inforation t-show-info">Шоу не выбрано</p>
    } else if(image) {
      const genresArr = genres.join(', ');
      return (
        <div className="show">
          <img className="show-image" src={image.medium} alt={name} />
          <h2 className="show-label t-show-name">{name}</h2>
          <p className="show-text t-show-genre">
            <b>Жанр: </b>
            {genresArr}
          </p>
          <p className="show-text t-show-summary" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      )
    } else {
      return null;
    }    
  }
}

export default Show;