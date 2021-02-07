import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Revuit</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                  <li className="navbar-item">
                      <Link to="/" className="nav-link">All Reviews</Link>
                  </li>
                  <li className="navbar-item">
                      <Link to="/review-add" className="nav-link">Create Review</Link>
                  </li>
              </ul>
              
              <ul className="navbar-nav ml-auto">
                  <li className="navbar-item">
                      <Link to="/register" className="nav-link">Register</Link>
                  </li>
              </ul>
          </div>
          
        </div>
      </nav>
    );
  }
}