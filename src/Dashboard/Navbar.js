import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Nav({ Toggle }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
            <i className='navbar-brand bi bi-justify-left fs-4' onClick={Toggle}></i>

            {/* <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <a className="navbar-brand" href="#">
                <i className={`bi bi-justify-left fs-4 ${Toggle ? 'active' : ''}`}></i>
            </a> */}
            {/* <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Yousofe
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
}

export default Nav;
