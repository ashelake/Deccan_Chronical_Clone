import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {


  return (
    <>
    <Logo/>
    
    <nav class="navbar navbar-expand-lg bg-white">
      
      <div class="container">
        <div className="container1">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 10"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/nation">
                Nation
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/south">
                South
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/world">
                World
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Entertainment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Jobs & Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Sports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Technology
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Lifestyle
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Gallary
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More...
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
    </>
  );
}
export default Navbar;
