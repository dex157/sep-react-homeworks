import React, { Component } from 'react';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import styles from './RoversViewer.module.css';
import { connect } from 'react-redux';
import {
    changeSol,
    fetchPhotosRequest,
    getSol,
    getPhotos
} from '../../modules/RoverPhotos';
import { 
    rowsName,
    minValue,
    maxValue
} from '../../constants';

class RoversViewer extends Component {    
    componentDidMount() {
        const { fetchPhotosRequest } = this.props;
        const { current } = this.props.sol;
/*
        rowsName.forEach(name => {
            fetchPhotosRequest({
                name: name,
                sol: current
            });
        });*/
        
        fetchPhotosRequest({
            name: 'curiosity',
            sol: current
        });
        fetchPhotosRequest({
            name: 'opportunity',
            sol: current
        });
        fetchPhotosRequest({
            name: 'spirit',
            sol: current
        });
    }

    changeSolFunction = (value) => {
        const { changeSol } = this.props;
        const { current } = this.props.sol;

        if (value === current)
            return;
            
        changeSol(value);
    }

    renderRoversPhoto = () => {
        const { photos } = this.props;
        const { current } = this.props.sol;
        console.log("this.props");
        console.log(this.props);

        return rowsName.map(name => {
            const currentPhotos = photos[name][current];
            //console.log(currentPhotos);
            if (currentPhotos !== undefined) {
                if (currentPhotos.error)
                    return <RoverPhotos 
                        name={name} 
                        photos={[]} 
                        key={name} 
                        error={currentPhotos.error} />;
                else
                    return <RoverPhotos 
                        name={name} 
                        photos={currentPhotos.photos.length > 0 ? currentPhotos.photos : []} 
                        key={name} 
                        error={null}/>;
            } else  
                return null;
        });
      };

    render() {
        console.log(this.props);
        const { current } = this.props.sol;

        return (
            <div>
                <SelectSol 
                    minSol={minValue} 
                    maxSol={maxValue} 
                    selectedSol={current} 
                    changeSol={this.changeSolFunction}
                />
                <div className={styles.сontainer}>{this.renderRoversPhoto()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sol: getSol(state),    
    photos: getPhotos(state)
});
  
const mapDispatchToProps = { 
    changeSol, fetchPhotosRequest 
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoversViewer);