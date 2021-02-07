import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return(
            <footer className="bg-dark text-white text-center py-3 mt-auto">
                <p className="mb-0">Muhammad Lutfi Fahreza</p>
                <h5>
                    <a href="https://instagram.com/mlutfifahreza" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram text-white mx-2"></i></a>
                    <a href="https://twitter.com/mlutfifahreza" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter text-white mx-2"></i></a>
                    <a href="https://github.com/mlutfifahreza" target="_blank" rel="noopener noreferrer"><i className="bi bi-github text-white mx-2"></i></a>
                </h5>

            </footer>
        )
    }
}