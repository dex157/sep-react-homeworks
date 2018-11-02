import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { getShowRequest } from '../../actions/show';
import { getInfo, getError, getLoading } from '../../reducers/shows';
import styles from './ShowPage.module.css';

class ShowPage extends PureComponent {
  componentDidMount = () => {
    const {
      getShowRequest,
      match: {
        params: { id }
      }
    } = this.props;
    getShowRequest(id);
  };

  renderShow() {
    const {show} = this.props;
    let cast;

    if( !Array.isArray(show)) {
     cast = show._embedded.cast;
    }
    if(!Array.isArray(show)){
      return cast.map((item) => (
        <div className="t-person" key={item.person.id}>
          <p>{item.person.name}</p>
          {item.person.image && <img src={item.person.image.medium} alt={item.person.name} />}
        </div>
      ));
    } else return null;
  }

  render() {
    const { isLoading, show } = this.props;

    if (isLoading || !show) {
      return <div>Идет загрузка...</div>;
    }    
    const { name, image, summary } = show;
    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
        <div className={styles.cast}>{this.renderShow()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shows }) => ({
  show: getInfo(shows),
  isLoading: getLoading(shows),
  error: getError(shows)
});

export default connect(
  mapStateToProps,
  { getShowRequest }
)(ShowPage);
