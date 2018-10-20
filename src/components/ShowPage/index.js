import React, {Component} from 'react'
import style from './ShowPage.module.css'
import { Link } from 'react-router-dom'

class ShowPage extends Component{
    render(){
        const {match:{params: {id}}} = this.props;
        console.log(this.props);

        
        return (
            <div>{id}</div>
        )
    }
};

export default ShowPage;
