/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (

      <footer className="d-flex col-12 text-center flex-row">
        <Link className="text-decoration-none flex-column border border-1 col-3 flex-end">dashboard</Link>
        <Link to="/ExerciseForm" className="text-decoration-none flex-column border border-1 col-3 ">Add Measure</Link>
        <Link className="text-decoration-none flex-column border border-1 col-3 ">Pogress</Link>
        <Link className="text-decoration-none flex-column border border-1 col-3 ">more</Link>
      </footer>

    );
  }
}
export default Navbar;
