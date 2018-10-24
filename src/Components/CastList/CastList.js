import React, { Component } from "react";

class CastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/shows/${this.props.show}?embed=cast`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          isLoaded: true,
          cast: result._embedded.cast
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { error, isLoaded, cast } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {cast.map(item => (
            <li key={item.person.id}>
              {item.person.name}
              <img src={item.person.image.medium} alt="" />
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default CastList;
