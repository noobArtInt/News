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
        <h2> Shorts </h2>
        <div>
          <button className="card">
            <div className="container">
              <p>
                <strong>News 1</strong>
              </p>
              bla bla bla
              <div>
                <button className="card">
                  <div className="container">
                    <p>Sector 1 </p>
                  </div>
                </button>
                <button className="card">
                  <div className="container">
                    <p>Sector 2</p>
                  </div>
                </button>
              </div>
            </div>
          </button>
          <button className="card">
            <div className="container">
              <p>
                <strong>News 2</strong>
              </p>
              bla bla bla
              <div>
                <button className="card">
                  <div className="container">
                    <p>Sector Up </p>
                  </div>
                </button>
                <button className="card">
                  <div className="container">
                    <p>Sector Down</p>
                  </div>
                </button>
              </div>
            </div>
          </button>
        </div>

        <div className="Sector">
          <h2>Sectors</h2>
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
      </div>
    );
  }
}

export default DataFetching;
