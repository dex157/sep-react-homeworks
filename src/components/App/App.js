import React, { Component } from 'react';
import Form from '../Form';
import './App.css';
import Photo from './assets/bond_approve.jpg';

class App extends Component {
  state = {
    authenticated: false
  };

  renderContent = () => {
    const { authenticated } = this.state;

    return authenticated ? (
      <img src={Photo} alt="bond approve" className="t-bond-image" />
    ) : (
      <Form handleSubmit={this.loginIn} />
    );
  };

  loginIn = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    return <div className="app-container">{this.renderContent()}</div>;
  }
}
export default App;
