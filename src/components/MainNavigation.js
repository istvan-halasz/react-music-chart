import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
          <NavLink className="navbar-brand" href="#page-top">
            Start Bootstrap
          </NavLink>
          <NavLink className="navbar-brand" to="/artists" href="#page-top">
            Artists
          </NavLink>
          <NavLink className="navbar-brand" to="/songs" href="#page-top">
            Songs
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link' : 'nav-link'
                  }
                  href="#!"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
