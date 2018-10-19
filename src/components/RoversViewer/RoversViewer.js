import React, {PureComponent} from 'react';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { connect } from 'react-redux';
import { getSol, getPhotos } from '../../modules/RoverPhotos';


class RoverViewers extends PureComponent {

    render() {
        console.log(this.props.sol)
        return <div className={styles.root}>
            <SelectSol selectedSol={this.props.sol.current} minSol={this.props.sol.min} maxSol={this.props.sol.max}/>

        </div>;
    }
}

export default connect(
    state => ({ sol: getSol(state) , photos: getPhotos(state)}),
  null
)(RoverViewers);