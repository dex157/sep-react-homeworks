import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import {
  getSelectedSol,
  changeSol,
  fetchPhotosRequest,
  getMaxSol,
  getMinSol
} from '../../modules/RoverPhotos';
import styles from './RoversViewer.module.css';
import rovers from '../../utils/rovers';
import { getRoversPhotos } from '../../modules/RoverPhotos';

class RoverViewers extends Component {
  componentDidMount() {
    const { fetchPhotosRequest, currentSol } = this.props;
    rovers.forEach(roverName => {
      fetchPhotosRequest({
        name: roverName,
        sol: currentSol
      });
    });
  }

  changeSol = value => {
    const { changeSol, currentSol } = this.props;
    if (value === currentSol) {
      return;
    }
    changeSol(value);
  };

  renderRoversPhoto = () => {
    const { photos, currentSol } = this.props;
    return rovers.map(rover => {
      const currentPhotos = photos[rover][currentSol];
      const roverPhotos =
        !currentPhotos || !currentPhotos.isLoaded ? [] : currentPhotos.photos;
      if (currentPhotos && currentPhotos.error) {
        return <div>{currentPhotos.error}</div>;
      }
      return <RoverPhotos name={rover} photos={roverPhotos} key={rover}/>;
    });
  };

  render() {
    const { currentSol, maxSol, minSol } = this.props;
    return (
      <div className={styles.root}>
        <SelectSol
          minSol={minSol}
          maxSol={maxSol}
          selectedSol={currentSol}
          changeSol={this.changeSol}
        />
        <div className={styles.photosContainer}>{this.renderRoversPhoto()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentSol: getSelectedSol(state),
  minSol: getMinSol(state),
  maxSol: getMaxSol(state),
  photos: getRoversPhotos(state)
});

export default connect(
  mapStateToProps,
  { changeSol, fetchPhotosRequest }
)(RoverViewers);