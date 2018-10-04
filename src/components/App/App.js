import React, { Component } from 'react';
import Form from '../../components/Form';
import Bond from './bond_approve.jpg';

class App extends Component {
    state = {
        validation: 0
    };
    checkForm = check => {
        if (check === true) this.setState({ validation: 1 });
    };
    render() {
        return (
            <div className="app-container">
                {this.state.validation === 0 ? (
                    <Form onApp={this.checkForm} />
                ) : (
                    <img
                        src={Bond}
                        alt="bond approve"
                        className="t-bond-image"
                    />
                )}
            </div>
        );
    }
}

export default App;
