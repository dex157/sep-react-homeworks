import React, {Component} from 'react';
import { connect } from 'react-redux'
import styles from './ShowPage.module.css';
import { fetchShowRequest } from '../../actions/actions'
import { getShow, getShowIsLoading, getShowError } from '../../reducers/selectors';

class ShowPage extends Component {

  componentDidMount() {
    const { fetchShowRequest, match } = this.props;

    fetchShowRequest(match.params.id);    
  }
  
  render () {
    const { show, isLoading, error } = this.props;
    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
      <div>
        <p> {show.name} </p>
        {show.image && <img src={show.image.medium} alt={show.name}/>}
        <div dangerouslySetInnerHTML={{__html: show.summary}} />
        <div className={styles.cast}>
          {show._embedded && show._embedded.cast.map(actor => (
            <div className='t-person' key={actor.person.id}>
              <p>{actor.person.name}</p>
              {actor.person.image && <img src={actor.person.image.medium} alt={actor.person.name}/>} 
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  show: getShow(state),
  isLoading: getShowIsLoading(state),
  error: getShowError(state),
});

const mapDispatchToProps = { fetchShowRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPage);