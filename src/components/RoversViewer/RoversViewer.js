import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import {
  getCurrentSol,
  changeSol,
  fetchPhotosRequest,
  getMaxSol,
  getMinSol
} from '../../modules/RoverPhotos';
import styles from './RoversViewer.module.css';
import rovers from '../../rovers/rovers';
import { getPhotos } from '../../modules/RoverPhotos';

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
      if (currentPhotos !== undefined) {
        if (currentPhotos.error)
          return (
            <RoverPhotos
              name={rover}
              photos={[]}
              key={rover}
              error={currentPhotos.error}
            />
          );
        else
          return (
            <RoverPhotos
              name={rover}
              photos={
                currentPhotos.photos.length > 0 ? currentPhotos.photos : []
              }
              key={rover}
              error={null}
            />
          );
      } else return null;
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
        <div className={styles.сontainer}>{this.renderRoversPhoto()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentSol: getCurrentSol(state),
  minSol: getMinSol(state),
  maxSol: getMaxSol(state),
  photos: getPhotos(state)
});

export default connect(
  mapStateToProps,
  { changeSol, fetchPhotosRequest }
)(RoverViewers);
