import React from 'react';
import {connect} from 'react-redux';
import { showRequest } from '../../actions/show';
import styles from './ShowPage.module.css';

class ShowPage extends React.Component {
  componentDidMount () {
    const {
      match: {
        params: { id }
      },
      showRequest,
    } = this.props;
    showRequest(id);
  }

  render() {  
    const { show } = this.props;
    if (!show) return null;
    const { name, summary, image, _embedded } = show;
    return (
      <div>
        <p>{name}</p>
        <img src={image.medium} alt={name} />
        <div  dangerouslySetInnerHTML={{__html: summary}} />
        <div className={styles.cast}>
          {_embedded.cast.map(actor => (
            <div className="t-person">
              <p>{actor.person.name}</p>
              <img src={actor.person.image.medium} alt={actor.person.name} />
            </div>            
          ))}
        </div>
      </div>           
    )
  }  
}

const mapStateToProps = state => {
  return {
    show: state.show.result,
  }
};

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
