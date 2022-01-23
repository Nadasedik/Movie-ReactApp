import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar =()=>{
  const selector = useSelector(state => state.Fav);

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand me-3" to="/">Movies</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item position-relative me-5">
                <Link className="nav-link active" to="/Favorites">Favorites
                <span  className="position-absolute start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-3 fas fa-star">
                   {selector.length}
                    </span>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link " to="/LoginForm">Login</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/Form">Register</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
};
export default Navbar;