import React, { PureComponent } from 'react';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux';
import {
  getSol,
  getPhotos,
  changeSol,
  fetchPhotosRequest,
  rovers
} from '../../modules/RoverPhotos';

class RoverViewers extends PureComponent {
  componentDidMount() {
    const {
      fetchPhotosRequest,
      sol: { current },
      rovers
    } = this.props;

    Object.keys(rovers).forEach(rover => {
      fetchPhotosRequest({ name: rover, sol: current });
    });
  }

  changeSolFunction = value => {
    const {
      changeSol,
      sol: { current }
    } = this.props;
    if (value === current) return;

    changeSol(value);
  };

  render() {
    const {
      sol: { current, min, max }
    } = this.props;

    return (
      <div className={styles.root}>
        <SelectSol
          selectedSol={current}
          minSol={min}
          maxSol={max}
          changeSol={this.changeSolFunction}
        />
        <div className={styles.container}>{this.renderPhoto()}</div>
      </div>
    );
  }

  renderPhoto = () => {
    const {
      photos,
      sol: { current },
      rovers
    } = this.props;

    return Object.keys(rovers).map(rover => {
      const currentPhotos = photos[rover][current];
      const emptyArray = [];

      if (currentPhotos !== undefined) {
        return (
          <RoverPhotos
            name={rover}
            photos={
              currentPhotos.photos.length > 0
                ? currentPhotos.photos
                : emptyArray
            }
            key={rover}
          />
        );
      } else return null;
    });
  };
}

export default connect(
  state => ({
    sol: getSol(state),
    photos: getPhotos(state),
    rovers: rovers
  }),
  {
    changeSol,
    fetchPhotosRequest
  }
)(RoverViewers);
