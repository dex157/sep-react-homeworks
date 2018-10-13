import React, {Component, Fragment} from 'react';
import style from './ShowPage.module.css';
import {connect} from 'react-redux';
import {showRequest} from '../../actions/showActions';
import {getShowDescription, getError, getLoading} from '../../reducers/shows';

class ShowPage extends Component {
    componentDidMount() {
      const {showRequest, match: {params: { id }}} = this.props;
      showRequest(id);
    }
  
    renderActors = () => {
      const {
        show: {cast}
      } = this.props;
  
      return cast.map(({id, name, image}) => (
        <div className = "t-person" key = {id}>
          <p>{name}</p>
          {image && <img src = {image.medium} alt = {name}/>}
        </div>
      ));
    };
  
    render() {
      const {isLoading, show} = this.props;

      if (isLoading || !show) {
        return <div>Загрузка...</div>;
      }
  
      const {name, image, summary} = show;

      return (
        <Fragment>
          <p>{name}</p>
          {image && <img src = {image.medium} alt = {name}/>}
          {summary && <div dangerouslySetInnerHTML = {{ __html: summary }}/>}
          <div className = {style.cast}>{this.renderActors()}</div>
        </Fragment>
      );
    }
}

const mapStateToProps = ({ shows }) => ({
    show: getShowDescription(shows),
    error: getError(shows),
    isLoading: getLoading(shows)
  });
  
export default connect(mapStateToProps, {showRequest})(ShowPage);