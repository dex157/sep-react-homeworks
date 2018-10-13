import React, { Component, Fragment } from 'react';
import styles from './ShowPage.module.css';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/showActions';
import { getShowInfo, getError, getLoading } from '../../reducers/selectors';

class ShowPage extends Component {
  componentDidMount() {
    const {
      showRequest,
      match: {
        params: { id }
      }
    } = this.props;

    showRequest(id);
  }

  renderCast = () => {
    const {
      show: { cast }
    } = this.props;

    return cast.map(({ id, name, image }) => (
      <div className="t-person" key={id}>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
      </div>
    ));
  };

  render() {
    const { isLoading, show } = this.props;

    if (isLoading || !show) {
      return <div>Загрузка...</div>;
    }
    const { name, image, summary } = show;

    return (
      <Fragment>
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
        <div className={styles.cast}>{this.renderCast()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shows }) => ({
  show: getShowInfo(shows),
  error: getError(shows),
  isLoading: getLoading(shows)
});

export default connect(
  mapStateToProps,
  { showRequest }
)(ShowPage);
