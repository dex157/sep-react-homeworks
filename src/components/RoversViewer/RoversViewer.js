import React, { Component } from 'react';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux'
import {
  rovers,
  changeSol,
  fetchPhotosRequest,
  getChangeSol,
  getPhotosRover,
} from '../../modules/RoverPhotos'

class RoversViewer extends Component {
  componentDidMount(){ this.photoRequest() }
  
  componentDidUpdate(prevProps){
    const { sol } = this.props;

    if (sol.current !== prevProps.sol.current){
      this.photoRequest()
    }
  }

  photoRequest = () => {
    const { sol, fetchPhotosRequest } = this.props;

    rovers.forEach(rover => fetchPhotosRequest({
      name: rover,
      sol: sol.current
    }))
  }

  render () {
    const { sol } = this.props;
    
    return (
      <div className={styles.root}>
        <SelectSol 
          selectedSol={sol.current}
          minSol={sol.min}
          maxSol={sol.max}
          {...this.props}
          />
        <div className={styles.containerRovers}>{this.renderRoverPhotos()}</div>
      </div>
    )
  }
  
  renderRoverPhotos = () => {
    const { sol, photos } = this.props;
    const emptyPhotos = []

    return (
      rovers.map(roverName => (
        <RoverPhotos 
          key={roverName}
          name={roverName} 
          photos={
            (photos[roverName][sol.current]) 
              ? photos[roverName][sol.current].photos
              : emptyPhotos
            }
        />
      ))
    )
  }
}

const mapStateToProps = state => ({
  sol: getChangeSol(state),
  photos: getPhotosRover(state)
});

const mapDispatchToProps = { changeSol, fetchPhotosRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoversViewer)