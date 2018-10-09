import React, {Component} from 'react';
import './Show.css';
import {getShowInfo} from '../../api';

export default class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showId: "",
            date: ""
        };

        this.showName = React.createRef();
    }

    render() {
        console.log("render state" + this.state.date);
        console.log("render prop" + this.props.showId);
        if (this.props.showId !== "" && this.state.showId !== this.props.showId) {
            this.getShow(this.props.showId)
        }


        return (<div>{this.state.date ?
            <div className="show"></div>
            : <p className="show-inforation t-show-info">Шоу не выбрано</p>
        }
            <div className="show-label t-show-name" ref={this.showName}></div>
        </div>)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate"+ this.state.date.name);
        this.showName.current.innerText = this.state.date.name
    }

    getShow = (name) => {
        var response = getShowInfo(name).then((successMessage) => {
            console.log(successMessage);
            this.setState({date: successMessage, showId:name})
        });
        console.log("final" + response);
    }
}