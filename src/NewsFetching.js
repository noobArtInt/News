import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("NIFTY 50"),
  createData("NIFTY Next 50"),
  createData("NIFTY BANK"),
  createData("NIFTY 100"),
  createData("NIFTY 500"),
  createData("SENSEX"),
  createData("BANKEX"),
  createData("BSE 100")
];

class NewsFetching extends React.Component {
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
          <button className="card1">
            <div className="container">
              <p>
                <strong>
                  international crude oil rates have crossed $50 a barrel for
                  the first time
                </strong>
              </p>

              <div>
                <button className="card2">
                  <p>Petroleum Metal</p>
                </button>
                <button className="card2">
                  <p> Travel</p>
                </button>
              </div>
            </div>
          </button>
          <button className="card1">
            <div className="container">
              <p>
                <strong>
                  According to analyst, Airtel is targeting on low-end customers
                  of VI
                </strong>
              </p>
              <div>
                <button className="card2">
                  <p>Communication IT</p>
                </button>
                <button className="card2">
                  <p>Finance</p>
                </button>
              </div>
            </div>
          </button>
        </div>
        <div className="Previous">
          <h2>Previous Summary</h2>
          <div>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Indices</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Prev-Close&nbsp;</TableCell>
                    <TableCell align="right">%Change&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Value}</TableCell>
                      <TableCell align="right">{row.Prev_Close}</TableCell>
                      <TableCell align="right">{row.change}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="Sector">
          <h2>Sectors</h2>
          <button className="card">
            <div className="container">
              <p>
                <strong>IT</strong>
              </p>
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

export default NewsFetching;
