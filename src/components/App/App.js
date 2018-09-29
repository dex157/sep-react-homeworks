import React, { PureComponent } from 'react';
import './App.css';

import Show from '../Show';

import bigBangImage from './assets/bigBang.jpg';
import houseImage from './assets/house.jpg';
import santaBarbaraImage from './assets/santaBarbara.jpg';

const radioGroup = [
  {
    name: 'House M.D.',
    apiKey: 'house',
    image: houseImage
  },
  {
    name: 'Santa Barbara',
    apiKey: 'santaBarbara',
    image: santaBarbaraImage
  },
  {
    name: 'The Big Bang Theory',
    apiKey: 'bigBang',
    image: bigBangImage
  }
];

class App extends PureComponent {
  state = {
    selectedShow: ''
  };

  selectShow = event => {
    this.setState({ selectedShow: event.target.value });
  };

  render() {
    const { selectedShow } = this.state;

    return (
      <div className="app">
        <div className="radio-group">
          {radioGroup.map(radioInfo => (
            <div
              className={`radio ${
                selectedShow === radioInfo.apiKey ? 'radio--selected' : ''
              }`}
              key={radioInfo.name}
            >
              <input
                id={radioInfo.apiKey}
                className={`radio-input t-radio-input-${radioInfo.apiKey}`}
                type="radio"
                name="show"
                value={radioInfo.apiKey}
                checked={selectedShow === radioInfo.apiKey}
                onChange={this.selectShow}
              />
              <label htmlFor={radioInfo.apiKey} className="radio-label">
                <img
                  className="radio-image"
                  src={radioInfo.image}
                  alt={radioInfo.name}
                />
                <span className="radio-label">{radioInfo.name}</span>
              </label>
            </div>
          ))}
        </div>
        <Show key={selectedShow} showId={selectedShow} />
      </div>
    );
  }
}

export default App;
