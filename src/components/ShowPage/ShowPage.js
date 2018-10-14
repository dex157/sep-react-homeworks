import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getShowRequest } from '../../actions/show';
import { getInfo, getError, getLoading } from '../../reducers/shows';
import styles from './ShowPage.module.css';

class ShowPage extends Component {
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
    const {
      show: { cast }
    } = this.props;

    return cast.map(({ id, name, image }) => (
      <div className="t-person" key={id}>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
      </div>
    ));
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
