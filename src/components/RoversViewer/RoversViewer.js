import React, { Component } from 'react';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux';
import {
  changeSol,
  fetchPhotosRequest,
  getCurrentSol,
  getMaxSol,
  getMinSol,
  getPhotos
} from '../../modules/RoverPhotos';
import Grid from '@material-ui/core/Grid';
import { rovers } from '../../constants/rovers';
import styles from './RoversViewer.module.css';

class RoversViewer extends Component {
  componentDidMount() {
    const { currentSol, fetchPhotosRequest } = this.props;

    rovers.forEach(el => fetchPhotosRequest({ rover: el, sol: currentSol }));
  }

  changeSol = value => {
    const { changeSol, currentSol } = this.props;
    if (value !== currentSol) {
      changeSol(value);
    }
  };

  renderRoverPhotos = () => {
    const { photos, currentSol } = this.props;

    return (
      <Grid alignItems="flex-start" justify="space-between" container>
        {rovers.map(el => {
          const currentPhotos = photos[el][currentSol] !== undefined
              ? photos[el][currentSol].photos
              : [];
          return currentPhotos 
            ? ( <RoverPhotos key={el} name={el} photos={currentPhotos} /> ) 
            : null;
        })}
      </Grid>
    );
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
        {this.renderRoverPhotos()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: getPhotos(state),
  currentSol: getCurrentSol(state),
  minSol: getMinSol(state),
  maxSol: getMaxSol(state)
});

const mapDispatchToProps = { changeSol, fetchPhotosRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoversViewer);
