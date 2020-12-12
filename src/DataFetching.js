import React from "react";
import "./styles.css";

class DataFetching extends React.Component {
  render() {
    return (
      <div>
        <h1> NEWS SITE</h1>
        <input
          placeholder="Search News"
          icon=""
          search
          onChange={this.handleChange}
        />

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
