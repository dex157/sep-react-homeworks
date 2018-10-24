import React, { Component } from "react";

const GetApiContext = React.createContext();

class GetApiProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/schedule`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          isLoaded: true,
          items: result
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  getProviderValue() {
    return {
      items: this.state.items,
      search: this.search
    };
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <GetApiContext.Provider value={this.getProviderValue()}>
          {this.props.children}
        </GetApiContext.Provider>
      );
    }
  }
}

export { GetApiProvider, GetApiContext };
