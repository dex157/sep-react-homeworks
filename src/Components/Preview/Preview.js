import React, { Component } from "react";
import CastList from "../CastList/CastList";
import { GetApiContext } from "../../Context/GetApi/GetApi";

class Preview extends Component {
  render() {
    const prodId = this.props.match.params.id;

    return (
      <GetApiContext.Consumer>
        {({ items }) => (
          <div className="preview-page">
            {items.map(item => (
              <React.Fragment>
                {item.id.toString() === prodId ? (
                  <div key={item.id}>
                    <img src={item.show.image.medium} alt="" />
                    <div>
                      <b>Name:</b> {item.name}
                    </div>
                    <div>
                      <b>Season:</b> {item.season}
                    </div>
                    <div>
                      <b>Description:</b>
                    </div>
                    <div
                      className="question-text"
                      dangerouslySetInnerHTML={{ __html: item.show.summary }}
                    />
                    <CastList show={item.show.id} />
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </GetApiContext.Consumer>
    );
  }
}

export default Preview;
