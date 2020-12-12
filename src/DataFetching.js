import React from "react";
import "./styles.css";

class DataFetching extends React.Component {
  state = {
    person: null,
    filter: ""
  };

  render() {
    return (
      <div>
        {/*<input
       placeholder="Search"
          icon=""
          search
          onChange={this.handleChange}
        />
       */}
        <h1> NEWS SITE</h1>

        <button className="card">
          <div className="container">
            <p>IT</p>
          </div>
        </button>
        <button className="card">
          <div className="container">
            <p>Automobile</p>
          </div>
        </button>
        <button className="card">
          <div className="container">
            <p>Finance</p>
          </div>
        </button>
        <button className="card">
          <div className="container">
            <p>Pharmacy</p>
          </div>
        </button>
      </div>
    );
  }
}

export default DataFetching;
