import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetApiContext } from "../../Context/GetApi/GetApi";

class ViewList extends Component {
  render() {
    let searchSubmit = this.props.searchSubmit.toLowerCase() || false;
    return (
      <GetApiContext.Consumer>
        {({ items }) => (
          <ul className="view-list">
            {items.map(item => (
              <React.Fragment>
                {item.name.toLowerCase().indexOf(searchSubmit) !== -1 ? (
                  <li key={item.id}>
                    NAME:
                    <Link to={`/shows/${item.id}`}>{item.name}</Link>
                    SEASON: {item.season}
                    <img src={item.show.image.medium} alt="" />
                  </li>
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </GetApiContext.Consumer>
    );
  }
}

export default ViewList;
