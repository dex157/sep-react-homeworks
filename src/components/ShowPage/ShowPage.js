import React, {Component} from 'react';
import { connect } from 'react-redux'
import styles from './ShowPage.module.css';

class ShowPage extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
       Какое-то шоу
      </div>
    )
  }
}

const mapStateToProps = state => state;

// const mapDispatchToProps = { fetchShowRequest };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ShowPage);