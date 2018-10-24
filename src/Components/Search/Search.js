import React, { Component } from "react";
import ViewList from "../ViewList/ViewList";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: "" };
    this.state = { searchSubmit: "" };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.SearchSubmit = this.SearchSubmit.bind(this);
  }

  SearchSubmit(e) {
    e.preventDefault();
    this.setState({ searchSubmit: this.state.searchVal });
  }

  onSearchChange(e) {
    var val = e.target.value;
    this.setState({ searchVal: val });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.SearchSubmit}>
          <label>Search:</label>
          <input
            type="text"
            value={this.state.searchVal}
            onChange={this.onSearchChange}
          />
          <button>Find</button>
        </form>
        <ViewList searchSubmit={this.state.searchSubmit} />
      </React.Fragment>
    );
  }
}

export default Search;
