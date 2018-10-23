import React, { Component } from 'react';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';
import { connect } from 'react-redux';
import { changeSol, fetchPhotosRequest, getSol, getPhotos } from '../../modules/RoverPhotos';
import { rovers, minSol, maxSol } from '../../rovers';

class RoversViewer extends Component {
    componentDidMount() {
        const { fetchPhotosRequest, currentSol } = this.props;
  
        rovers.forEach(rover => {
            fetchPhotosRequest({
                name: rover,
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
            const roverPhotos = !currentPhotos || !currentPhotos.isLoaded 
                ? [] 
                : currentPhotos.photos;
            if (currentPhotos && currentPhotos.error) {
                return <div>{currentPhotos.error}</div>;
            }
            return <RoverPhotos name={rover} photos={roverPhotos} key={rover} />;
        });
    };
    
  
    render() {
      const { currentSol } = this.props;
  
      return (
        <div className={styles.root}>
          <SelectSol
            maxSol = {maxSol}
            minSol = {minSol}
            selectedSol = {currentSol || 1} 
            changeSol = {this.changeSol}
          />
          <div className = {styles.photosContainer}>{this.renderRoversPhoto()}</div>
        </div>
      );
    }
}
  
export default connect(
    state => ({
        sol: getSol(state),    
        photos: getPhotos(state)
    }),
    { changeSol, fetchPhotosRequest }
)(RoversViewer); 
